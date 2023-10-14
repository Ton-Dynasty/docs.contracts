---
sidebar_position: 2
---

# Jetton Wallet

This Jetton Wallet smart contract provides a framework for Jetton MastWalleter that comply with the [TEP-0074](https://github.com/ton-blockchain/TEPs/blob/master/text/0074-jettons-standard.md) standard.

## Overview

在 TEP-0074 中定義了 Jetton 的標準，其中每種 Jetton 都有對應的 Jetton Wallet 合約，每個 user 對不同的 Jetton 都會有一個對應的 Jetton Wallet，Jetton Wallet 負責儲存 Jetton 的數量，並且提供一些基本的功能，例如轉帳、鑄造、銷毀等等。

如果需要拿到整個 Jetton Wallet 的資訊，可以透過 Jetton Wallet 的 `get_wallet_data()` 來取得。

`get_wallet_data()` 會回傳一個 `WalletData`，裡面包含了 Jetton Wallet 的基本資訊，大致上如下：

```typescript
struct WalletData {
    balance: Int as coins;      // amount of jettons on wallet
    owner: Address;             // address of wallet owner;
    jetton: Address;            // address of Jetton master-address
    jetton_wallet_code: Cell;   // with code of this wallet
}

// @dev  get_wallet_data will return wallet data, which follows TEP 0074 standard
get fun get_wallet_data(): WalletData{
    return WalletData {
        balance: self.balance,
        owner: self.owner,
        jetton: self.jetton_master,
        jetton_wallet_code: self.calculate_jetton_wallet_init(self.owner).code
    };
}
```

## Our Trait

### Message Types

針對 Jetton Wallet，我們依照 TEP-0074 實作了數個 Message Type，用於轉帳、銷毀 Jetton、發送通知。

#### `JettonTransfer`:

用於 Jetton Wallet 的 Owner 將 Jetton 轉移給其他人。
使用方式為 Owner 傳送一個 `JettonTransfer` 給 Jetton Wallet，Jetton Wallet 會將 Jetton 轉移給 `destination` 擁有的 Jetton Wallet，並且將剩餘的 TON 帶回 `response_destination`。

```typescript
message(0x0f8a7ea5) JettonTransfer {
    query_id: Int as uint64;                // arbitrary request number
    amount: Int as coins;                   // amount of jettons to transfer
    destination: Address;                   // address of the new owner of the jettons
    response_destination: Address;          // address where to send a response with confirmation of a successful transfer and the rest of the incoming message Toncoins.
    custom_payload: Cell?;                  // optional custom payload
    forward_ton_amount: Int as coins;       // the amount of nanotons to be sent to the destination address.
    forward_payload: Slice as remaining;    // optional custom data that should be sent to the destination address.
}
```

#### `JettonTransferNotification`:

用於 Jetton Wallet 的 Owner 將 Jetton 轉移給其他人後，通知 Jetton 的新 Owner。

```typescript
message(0x7362d09c) JettonTransferNotification {
    query_id: Int as uint64;                // arbitrary request number
    amount: Int as coins;                   // amount of jettons to transfer
    sender: Address;                        // address of the sender of the jettons
    forward_payload: Slice as remaining;    // optional custom payload
}
```

#### `JettonBurn`:

用於 Jetton Wallet 的 Owner 銷毀自己 Jetton Wallet 中的 Jetton。

```typescript
message(0x595f07bc) JettonBurn {
    query_id: Int as uint64;        // arbitrary request number
    amount: Int as coins;           // amount of jettons to burn
    response_destination: Address;  // address where to send a response with confirmation of a successful burn and the rest of the incoming message coins.
    custom_payload: Cell?;          // optional custom payload
}
```

#### `JettonExcesses`:

用於 Jetton Wallet 的 Owner 將 Jetton 轉移給其他人後，將剩餘的 TON 帶回。

```typescript
message(0xd53276db) JettonExcesses {
    query_id: Int as uint64;        // arbitrary request number
}
```

#### `JettonInternalTransfer`:

用於 Jetton Wallet 與其他 Jetton Wallet 或與 Jetton Master 之間的轉帳。
使用方式有兩種：

1. Jetton Wallet 與其他 Jetton Wallet 之間的轉帳：Jetton Wallet 傳送一個 `JettonInternalTransfer` 給 Jetton Wallet，Jetton Wallet 會將 Jetton 轉移給 `destination` 擁有的 Jetton Wallet，並且將剩餘的 TON 帶回 `response_destination`。

2. Jetton Master 與 Jetton Wallet 之間的轉帳：Jetton Master Mint Jetton 給 Jetton Wallet 時，會傳送一個 `JettonInternalTransfer` 給 Jetton Wallet。

```typescript
message(0x178d4519) JettonInternalTransfer {
    query_id: Int as uint64;                // arbitrary request number
    amount: Int as coins;                   // amount of jettons to transfer
    response_address: Address;              // address where to send a response with confirmation of a successful transfer and the rest of the incoming message coins.
    from: Address;                          // address of the sender of the jettons
    forward_ton_amount: Int as coins;       // the amount of nanotons to be sent to the destination address.
    forward_payload: Slice as remaining;    // optional custom data that should be sent to the destination address.
}
```

#### `JettonBurnNotification`:

用於 Jetton Wallet 銷毀 Jetton 後，通知 Jetton Master。

```typescript
message(0x7bdd97de) JettonBurnNotification {
    query_id: Int as uint64;          // arbitrary request number
    amount: Int as coins;             // amount of jettons to burn
    sender: Address;                  // address of the sender of the jettons
    response_destination: Address;    // address where to send a response with confirmation of a successful burn and the rest of the incoming message coins.
}
```

### Must Override Functions

Jetton Wallet 定義了一個必須在子合約中實作的 function：

#### `calculate_jetton_wallet_init(owner_address: Address)`:

利用 Jetton Wallet 的 **owner address** 計算 Jetton Wallet 的 StateInit。

```typescript
// @dev  calculate_jetton_wallet_init will get init code of a jetton wallet by provided it's owner address
// @note one MUST override this function and return state init of the inherited jetton wallet implementation
abstract inline fun calculate_jetton_wallet_init(owner_address: Address): StateInit;
```

### Optional Override Functions

Jetton Wallet 定義了以下幾個 Optional Override Functions：

#### `_internal_transfer_validate(ctx: Context, msg: JettonInternalTransfer)`:

用於檢查 internal transfer message 是否合法，例如檢查 sender 是否為 Jetton Master 或 Jetton Wallet。

```typescript
// @dev  _internal_tranfer_validate will validate internal transfer message, usually it will check that sender is a jetton master or jetton wallet
// @note this function will triggered on receiving JettonTransfer message
virtual inline fun _internal_transfer_validate(ctx: Context, msg: JettonInternalTransfer) {
    if(ctx.sender != self.jetton_master){
        let init: StateInit = self.calculate_jetton_wallet_init(msg.from);
        require(ctx.sender == contractAddress(init), "JettonWallet: Only Jetton master or Jetton wallet can call this function");
    }
}
```

#### `_internal_transfer_estimate_remain_value(ctx: Context, msg: JettonInternalTransfer)`:

用於估計轉帳後剩餘的 TON 數量，會扣除 storage fee、forward fee 以及 gas consumption。

```typescript
// @dev  _internal_transfer_estimate_remain_value will estimate remain value after deducting storage fee, forward fee and gas consumption
virtual inline fun _internal_transfer_estimate_remain_value(ctx: Context, msg: JettonInternalTransfer): Int {
    let tonBalanceBeforeMsg: Int = myBalance() - ctx.value;
    let storage_fee: Int =  self.minTonsForStorage - min(tonBalanceBeforeMsg, self.minTonsForStorage);
    let remain: Int = ctx.value - (storage_fee + self.gasConsumption);
    if (msg.forward_ton_amount > 0) {
        remain = remain - (ctx.readForwardFee() + msg.forward_ton_amount);
    }
    return remain;
}
```

#### `_internal_transfer_notification(ctx: Context, msg: JettonInternalTransfer)`:

用於轉帳後，通知 Jetton Wallet 的 Owner。

```typescript
// @dev  _internal_transfer_notification will send notification to the owner of the jetton wallet
virtual inline fun _internal_transfer_notification(ctx: Context, msg: JettonInternalTransfer) {
    if (msg.forward_ton_amount > 0) {
        send(SendParameters{
            to: self.owner,
            value: msg.forward_ton_amount,
            mode: SendPayGasSeparately,
            bounce: false,
            body: JettonTransferNotification{
                query_id: msg.query_id,
                amount: msg.amount,
                sender: msg.from,
                forward_payload: msg.forward_payload
            }.toCell()
        });
    }
}
```

#### `_internal_transfer_excesses(ctx: Context, msg: JettonInternalTransfer, remain: Int)`:

用於轉帳後，將剩餘的 TON 送回。

```typescript
// @dev  _internal_transfer_excesses will send excesses message back after transfer action completed
virtual inline fun _internal_transfer_excesses(ctx: Context, msg: JettonInternalTransfer, remain: Int){
    if((msg.response_address != newAddress(0, 0)) && remain > 0){
        send(SendParameters{
            to: msg.response_address,
            value: remain,
            bounce: false,
            mode: SendIgnoreErrors,
            body: JettonExcesses{
                query_id: msg.query_id
            }.toCell()
        });
    }
}
```

#### `_burn_validate(ctx: Context, msg: JettonBurn)`:

用於檢查 burn request 是否合法，例如檢查 burn request 的發送者是否為 Jetton Wallet 的 Owner。

```typescript
// @dev  _burn_validate will conduct custom checking when receiving JettonBurn message
virtual inline fun _burn_validate(ctx: Context, msg: JettonBurn) {
    require(ctx.sender == self.owner, "JettonWallet: Only owner can burn tokens");
}
```

#### `_burn_tokens(ctx: Context, msg: JettonBurn)`:

用於銷毀 Jetton，並且通知 Jetton Master。

```typescript
// @dev  _burn_tokens will burn tokens and send JettonBurnNotification back to the jetton master
// @note this message is bounceable, if burn action failed, the message will be bounced back, you should increase the balance of the wallet
virtual inline fun _burn_tokens(ctx: Context, msg: JettonBurn) {
    send(SendParameters{
        to: self.jetton_master,
        value: 0,
        mode: SendRemainingValue,
        bounce: true,
        body: JettonBurnNotification{
            query_id: msg.query_id,
            amount: msg.amount,
            sender: self.owner,
            response_destination: msg.response_destination
        }.toCell()
    });
}
```

#### `_transfer_validate(ctx: Context, msg: JettonTransfer)`:

用於檢查 transfer request 是否合法，例如檢查 transfer request 的發送者是否為 Jetton Wallet 的 Owner。

```typescript
// @dev  _transfer_validate will conduct custom checking when receiving JettonTransfer message
virtual inline fun _transfer_validate(ctx: Context, msg: JettonTransfer) {
    require(ctx.sender == self.owner, "Only owner can call this function");

}
```

#### `_transfer_estimate_remain_value(ctx: Context, msg: JettonTransfer)`:

用於估計轉帳後剩餘的 TON 數量，會扣除 storage fee、forward fee 以及 gas consumption。

```typescript
// @dev  _transfer_estimate_remain_value will estimate remain value after deducting storage fee, forward fee and gas consumption
virtual inline fun _transfer_estimate_remain_value(ctx: Context, msg: JettonTransfer) {
    let fwd_count: Int = 1;
    if (msg.forward_ton_amount > 0) {
        fwd_count = 2;
    }
    require(ctx.value > fwd_count * ctx.readForwardFee() + 2 * self.gasConsumption + self.minTonsForStorage, "Not enough funds to transfer");
}
```

#### `_transfer_jetton(ctx: Context, msg: JettonTransfer)`:

用於轉帳 Jetton，如果對方還沒有 Jetton Wallet，會先幫對方建立 Jetton Wallet。

```typescript
// @dev  _transfer_jetton will transfer jettons to the jetton wallet of the destination address (owner of jetton wallet)
// @note  this message is bounceable, if transfer action failed, the message will be bounced back, you should increase the balance of the wallet
virtual inline fun _transfer_jetton(ctx: Context, msg: JettonTransfer) {
    let init: StateInit = self.calculate_jetton_wallet_init(msg.destination);
    let receiver: Address = contractAddress(init);
    send(SendParameters{
        to: receiver,
        value: 0,
        bounce: true,
        mode: SendRemainingValue,
        body: JettonInternalTransfer{
            query_id: msg.query_id,
            amount: msg.amount,
            response_address: msg.response_destination,
            from: self.owner,
            forward_ton_amount: msg.forward_ton_amount,
            forward_payload: msg.forward_payload
        }.toCell(),
        code: init.code,
        data: init.data
    });
}
```

## How to Use

### Basic Usage

要使用我們的 Jetton Wallet Trait，首先需要先實作一個 Jetton Wallet 合約，並且實作 `calculate_jetton_wallet_init(owner_address: Address)` 等等 must override function 以及 init function，例如：

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

如果需要實作一個自己的 Jetton Wallet，可以 Override Jetton Wallet 的 Optional Override Functions，例如想要讓任何人都可以銷毀自己 Jetton Wallet 中的 Jetton，可以實作 `_burn_validate`：

```typescript
override inline fun _burn_validate(ctx: Context, msg: JettonBurn) {
    require(ctx.sender != newAddress(0, 0), "Null address can not burn tokens");
}
```
