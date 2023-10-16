---
sidebar_position: 1
---

# Jetton Master

This Jetton Master smart contract provides a framework for Jetton Master that comply with the [TEP-0074](https://github.com/ton-blockchain/TEPs/blob/master/text/0074-jettons-standard.md) standard.

## Overview

In TEP-0074, each Jetton has a corresponding Jetton Master contract, which stores the basic information of the Jetton, including the total supply, the link to the metadata, the metadata itself, etc., and is used to mint the Jetton.

If you need to get the information of the entire Jetton, you can get it through the `get_jetton_data()` of the Jetton Master.

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

For Jetton Master, we define the `JettonMint` message type for minting Jetton.

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

Jetton Master defines the following **MUST** override functions:

#### `calculate_jetton_wallet_init(owner_address: Address)`:

Calculate Jetton Wallet's StateInit by Jetton Wallet's **owner address**.

```typescript
// @dev  calculate_jetton_wallet_init retrieve init code of a jetton wallet
// @note one MUST override this function in inherited contract
abstract inline fun calculate_jetton_wallet_init(owner_address: Address): StateInit;
```

### Optional Override Functions

Jetton Master defines the following **Optional** override functions:

#### `_mint_validate(ctx: Context, msg: JettonMint)`:

Check if the mint request is valid. For example, check if the sender of the mint request is the owner of the Jetton Master, and if the Jetton can be minted.

```typescript
// @dev  _mint_validate conduct some custom validating before mint
virtual inline fun _mint_validate(ctx: Context, msg: JettonMint) {
    require(ctx.sender == self.owner, "JettonMaster: Sender is not a Jetton owner");
    require(self.mintable, "JettonMaster: Jetton is not mintable");
}
```

#### `_mint(ctx: Context, msg: JettonMint)`:

Mint Jetton and send [Jetton Wallet](JettonWallet)'s init code, init data and mint information to Jetton Wallet.

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

Check if the burn request is valid. For example, check if the sender of the burn request is a Jetton Wallet.

```typescript
// @dev  _burn_notification_validate perform some custom validation after receiving JettonBurnNotification sent from Jetton wallet
virtual inline fun _burn_notification_validate(ctx: Context, msg: JettonBurnNotification) {
    let initCode: StateInit = self.calculate_jetton_wallet_init(msg.sender);
    require(ctx.sender == contractAddress(initCode), "Sender is not a Jetton wallet");
}
```

## How to use

### Basic Usage

To use our Jetton Master Trait, you need to implement a Jetton Master contract and a [Jetton Wallet contract](JettonWallet), and implement `calculate_jetton_wallet_init(owner_address: Address)` and other must override functions and init function, for example:

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

If you need to customize the behavior of Jetton Master, you can override the optional override function of Jetton Master and add various functions. For example, if we want to check if the Jetton can be minted when minting Jetton, we can override `_mint_validate(ctx: Context, msg: JettonMint)`, or if we want to let the User send "Mint:1" directly to the Jetton Master to mint Jetton, we can add a `receive("Mint:1")` function, for example:

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
