---
sidebar_position: 2
---

# Jetton Wallet

This Jetton Wallet smart contract provides a framework for Jetton MastWalleter that comply with the [TEP-0074](https://github.com/ton-blockchain/TEPs/blob/master/text/0074-jettons-standard.md) standard.

## Overview

In TEP-0074, the standard of Jetton is defined. Each Jetton has corresponding Jetton Wallet contract. Each user will have a corresponding Jetton Wallet for different Jettons. Jetton Wallet is responsible for storing the number of Jettons and providing some basic functions, such as transfer, mint, burn, etc.

If you need to get the information of the entire Jetton Wallet, you can get it through `get_wallet_data()`.
`get_wallet_data()` will return a `WalletData`, which contains the basic information of the Jetton Wallet, roughly as follows:

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

For Jetton Wallet, we have implemented several Message Types according to TEP-0074, which are used for transfer, burn Jetton, send notification, etc.

#### `JettonTransfer`:

If you want to transfer Jetton, you can use `JettonTransfer` to send to Jetton Wallet. Jetton Wallet will transfer Jetton to the Jetton Wallet owned by `destination`, and bring back the remaining TON to `response_destination`.

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

After Jetton Wallet transfer Jetton to others, it will send a `JettonTransferNotification` to the new owner of the Jetton.

```typescript
message(0x7362d09c) JettonTransferNotification {
    query_id: Int as uint64;                // arbitrary request number
    amount: Int as coins;                   // amount of jettons to transfer
    sender: Address;                        // address of the sender of the jettons
    forward_payload: Slice as remaining;    // optional custom payload
}
```

#### `JettonBurn`:

Jetton Wallet will burn Jetton in its own contract.

```typescript
message(0x595f07bc) JettonBurn {
    query_id: Int as uint64;        // arbitrary request number
    amount: Int as coins;           // amount of jettons to burn
    response_destination: Address;  // address where to send a response with confirmation of a successful burn and the rest of the incoming message coins.
    custom_payload: Cell?;          // optional custom payload
}
```

#### `JettonExcesses`:

After Jetton Wallet transfer Jetton to others, if there is remaining TON, it will send a `JettonExcesses` to the sender of the Jetton.

```typescript
message(0xd53276db) JettonExcesses {
    query_id: Int as uint64;        // arbitrary request number
}
```

#### `JettonInternalTransfer`:

The transfer of Jetton Wallet to other Jetton Wallet or Jetton Master.

For example:

1. Transfer between Jetton Wallet and other Jetton Wallet: Jetton Wallet sends a `JettonInternalTransfer` to Jetton Wallet, and Jetton Wallet will transfer Jetton to the Jetton Wallet owned by `destination`, and bring back the remaining TON to `response_destination`.

2. Transfer between Jetton Master and Jetton Wallet: When Jetton Master Mint Jetton to Jetton Wallet, it will send a `JettonInternalTransfer` to Jetton Wallet.

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

After Jetton Wallet burn Jetton, it will send a `JettonBurnNotification` to the Jetton Master.

```typescript
message(0x7bdd97de) JettonBurnNotification {
    query_id: Int as uint64;          // arbitrary request number
    amount: Int as coins;             // amount of jettons to burn
    sender: Address;                  // address of the sender of the jettons
    response_destination: Address;    // address where to send a response with confirmation of a successful burn and the rest of the incoming message coins.
}
```

### Must Override Functions

Jetton Wallet defines the following **MUST** override functions:

#### `calculate_jetton_wallet_init(owner_address: Address)`:

Calculate Jetton Wallet's StateInit by Jetton Wallet's **owner address**.

```typescript
// @dev  calculate_jetton_wallet_init will get init code of a jetton wallet by provided it's owner address
// @note one MUST override this function and return state init of the inherited jetton wallet implementation
abstract inline fun calculate_jetton_wallet_init(owner_address: Address): StateInit;
```

### Optional Override Functions

Jetton Wallet defines the following **Optional** override functions:

#### `_internal_transfer_validate(ctx: Context, msg: JettonInternalTransfer)`:

Check whether the internal transfer message is legal, for example, check whether the sender is Jetton Master or Jetton Wallet.

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

Estimate the remaining TON after the transfer, which will deduct the storage fee, forward fee and gas consumption.

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

After transfer, notify the owner of the Jetton Wallet.

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

After transfer, send the remaining TON back.

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

Check whether the burn request is legal, for example, check whether the sender is Jetton Wallet's Owner.

```typescript
// @dev  _burn_validate will conduct custom checking when receiving JettonBurn message
virtual inline fun _burn_validate(ctx: Context, msg: JettonBurn) {
    require(ctx.sender == self.owner, "JettonWallet: Only owner can burn tokens");
}
```

#### `_burn_tokens(ctx: Context, msg: JettonBurn)`:

Burn Jetton and notify Jetton Master.

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

Check whether the transfer request is legal, for example, check whether the sender is Jetton Wallet's Owner.

```typescript
// @dev  _transfer_validate will conduct custom checking when receiving JettonTransfer message
virtual inline fun _transfer_validate(ctx: Context, msg: JettonTransfer) {
    require(ctx.sender == self.owner, "Only owner can call this function");

}
```

#### `_transfer_estimate_remain_value(ctx: Context, msg: JettonTransfer)`:

Estimate the remaining TON after the transfer, which will deduct the storage fee, forward fee and gas consumption.

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

Transfer Jetton, if the destination doesn't have Jetton Wallet, it will create a Jetton Wallet for the destination.

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

To use our Jetton Wallet Trait, you need to implement a Jetton Wallet and a [Jetton Master](JettonMaster) contract, and implement `calculate_jetton_wallet_init(owner_address: Address)` and other must override functions and init function, for example:

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

If you want to implement your own Jetton Wallet, you can Override Jetton Wallet's Optional Override Functions. For example, if you want anyone to be able to burn Jetton in your Jetton Wallet, you can implement `_burn_validate`:

```typescript
override inline fun _burn_validate(ctx: Context, msg: JettonBurn) {
    require(ctx.sender != newAddress(0, 0), "Null address can not burn tokens");
}
```
