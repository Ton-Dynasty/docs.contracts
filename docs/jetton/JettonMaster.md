---
sidebar_position: 1
---

# Jetton Master

This Jetton Master smart contract provides a framework for Jetton Master that comply with the [TEP-0074](https://github.com/ton-blockchain/TEPs/blob/master/text/0074-jettons-standard.md) standard.

## Overview

在 TEP-0074 中定義了 Jetton 的標準，其中每種 Jetton 都有對應的 Jetton Master 合約，Jetton Master 會儲存 Jetton 的基本資訊，包含總供給量、metadata 的連結、metadata 本身等等，並且用於鑄造 Jetton。

如果需要拿到整個 Jetton 的資訊，可以透過 Jetton Master 的 `get_jetton_data()` 來取得。
`get_jetton_data()` 會回傳一個 `JettonData`，裡面包含了 Jetton 的基本資訊，大致上如下：

```typescript
struct JettonData {
    total_supply: Int as coins; // the total number of issues jettons
    mintable: Bool;             // flag which indicates whether number of jettons can increase admin_address
    admin_address: Address;     // address of smart-contrac which control Jetton
    jetton_content: Cell;       // data in accordance to Token Data Standard #64
    jetton_wallet_code: Cell;   // code of wallet for that jetton
}

// @dev get_jetton_data retrieve information of this jetton
get fun get_jetton_data(): JettonData {
    return JettonData{
        total_supply: self.total_supply,
        mintable: self.mintable,
        admin_address: self.owner,
        jetton_content: self.jetton_content,
        jetton_wallet_code: self.calculate_jetton_wallet_init(myAddress()).code
    };
}
```

| Name                 | Type    | Description                                                                                                            |
| -------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------- |
| `total_supply`       | `int`   | the total number of issued jettons measured in indivisible units.                                                      |
| `mintable`           | `int`   | details whether new jettons can be minted or not. This value is either -1 (can be minted) or 0 (cannot be minted).     |
| `admin_address`      | `slice` |                                                                                                                        |
| `jetton_content`     | `cell`  | data in accordance with [TEP-64](https://github.com/ton-blockchain/TEPs/blob/master/text/0064-token-data-standard.md). |
| `jetton_wallet_code` | `cell`  | code of wallet for that jetton                                                                                         |

## Our Trait

### Message Types

針對 Jetton Master，我們定義了 JettonMint 這個 Message Type，用於鑄造 Jetton。

#### `JettonMint`:

```typescript
message JettonMint {
    origin: Address;        // address of origin mint request (may be wallet v4)
    receiver: Address;      // address of receiver
    amount: Int;            // amount of jettons to mint
    custom_payload: Cell?;  // optional custom data
    forward_ton_amount: Int as coins;
    forward_payload: Slice as remaining;
}
```

| Name                 | Type    | Description                                       |
| -------------------- | ------- | ------------------------------------------------- |
| `origin`             | `slice` | address of origin mint request (may be wallet v4) |
| `receiver`           | `slice` | address of receiver                               |
| `amount`             | `int`   | amount of jettons to mint                         |
| `custom_payload`     | `cell`  | optional custom data                              |
| `forward_ton_amount` | `int`   |                                                   |
| `forward_payload`    | `slice` |                                                   |

### Must Override Functions

Jetton Master 定義了一個必須在子合約中實作的 function：

#### `calculate_jetton_wallet_init(owner_address: Address)`:

利用 Jetton Wallet 的 **owner address** 計算 Jetton Wallet 的 StateInit。

```typescript
// @dev  calculate_jetton_wallet_init retrieve init code of a jetton wallet
// @note one MUST override this function in inherited contract
abstract inline fun calculate_jetton_wallet_init(owner_address: Address): StateInit;
```

### Optional Override Functions

Jetton Master 定義了以下幾個 Optional Override Functions：

#### `_mint_validate(ctx: Context, msg: JettonMint)`:

用於檢查 mint request 是否合法，例如檢查 mint request 的發送者是否為 Jetton Master 的擁有者、Jetton 是否可以被 mint 等等。

```typescript
// @dev  _mint_validate conduct some custom validating before mint
virtual inline fun _mint_validate(ctx: Context, msg: JettonMint) {
    require(ctx.sender == self.owner, "JettonMaster: Sender is not a Jetton owner");
    require(self.mintable, "JettonMaster: Jetton is not mintable");
}
```

#### `_mint(ctx: Context, msg: JettonMint)`:

用於 mint jettons，會傳送 [Jetton Wallet](JettonWallet) 的 init code、init data 以及 mint 的資訊給 Jetton Wallet。

```typescript
// @dev  _mint mint jettons
virtual inline fun _mint(ctx: Context, msg: JettonMint) {
    let initCode: StateInit = self.calculate_jetton_wallet_init(msg.receiver);
    self.total_supply = self.total_supply + msg.amount;
    send(SendParameters{
        to: contractAddress(initCode),
        value: 0,
        bounce: true,
        mode: SendRemainingValue,
        body: JettonInternalTransfer{
            query_id: 0,
            amount: msg.amount,
            response_address: msg.origin,
            from: myAddress(),
            forward_ton_amount: msg.forward_ton_amount,
            forward_payload: msg.forward_payload
        }.toCell(),
        code: initCode.code,
        data: initCode.data
    });
}
```

#### `_burn_notification_validate(ctx: Context, msg: JettonBurnNotification)`:

用於檢查 burn request 是否合法，例如檢查 burn request 的發送者是否為 Jetton Wallet 等等。

```typescript
// @dev  _burn_notification_validate perform some custom validation after receiving JettonBurnNotification sent from Jetton wallet
virtual inline fun _burn_notification_validate(ctx: Context, msg: JettonBurnNotification) {
    let initCode: StateInit = self.calculate_jetton_wallet_init(msg.sender);
    require(ctx.sender == contractAddress(initCode), "Sender is not a Jetton wallet");
}
```

## How to use

### Basic Usage

要使用我們的 Jetton Master Trait，首先需要先實作一個 Jetton Master 合約以及一個 [Jetton Wallet 合約](JettonWallet)，並且實作 `calculate_jetton_wallet_init(owner_address: Address)` 等等 must override function 以及 init function，例如：

```typescript
import "@stdlib/deploy";
import "./packages/token/jetton/JettonMaster";
import "./packages/token/jetton/JettonWallet";

contract ExampleJettonWallet with JettonWallet {
    balance: Int as coins = 0;
    owner: Address;
    jetton_master: Address;

    init(owner: Address, jetton_master: Address) {
        self.owner = owner;
        self.jetton_master = jetton_master;
    }

    override inline fun calculate_jetton_wallet_init(owner_address: Address): StateInit {
        return initOf ExampleJettonWallet(owner_address, self.jetton_master);
    }
}

contract ExampleJettonMaster with JettonMaster, Deployable {
    total_supply: Int as coins = 0;
    mintable: Bool = true;
    owner: Address;
    jetton_content: Cell;

    init(owner: Address, jetton_content: Cell){
        self.owner = owner;
        self.jetton_content = jetton_content;
    }
    override inline fun calculate_jetton_wallet_init(owner_address: Address): StateInit {
        return initOf ExampleJettonWallet(owner_address, myAddress());
    }
}
```

### Advanced Usage

如果需要自訂 Jetton Master 的行為，可以 override Jetton Master 的 optional override function 以及新增各種 function，例如我們想要在 mint Jetton 時檢查 Jetton 是否可以被 mint，可以 override `_mint_validate(ctx: Context, msg: JettonMint)`，或是我們想要讓 User 可以直接傳送 "Mint:1" 給 Jetton Master 來 mint Jetton，可以新增一個 `receive("Mint:1")` 的 function，例如：

```typescript
receive("Mint:1") {
    let ctx: Context = context();
    let msg: JettonMint = JettonMint{
        origin: ctx.sender,
        receiver: ctx.sender,
        amount: ton("1"),
        custom_payload: emptyCell(),
        forward_ton_amount: 0,
        forward_payload: emptySlice()
    };
    self._mint_validate(ctx, msg);
    self._mint(ctx, msg);
}

override inline fun _mint_validate(ctx: Context, msg: JettonMint) {
    require(self.mintable, "JettonMaster: Jetton is not mintable");
}
```
