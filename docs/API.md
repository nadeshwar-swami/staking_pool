# 📚 API Documentation

Complete API reference for the NaanFI Staking Platform smart contract and frontend integration.

## Table of Contents
- [Smart Contract API](#smart-contract-api)
- [Frontend Integration API](#frontend-integration-api)
- [Algorand Node API](#algorand-node-api)
- [Error Codes](#error-codes)

---

## Smart Contract API

### Contract Address
- **TestNet App ID**: `749737169`
- **Reward Asset ID**: `749736840`

### Global State Keys

| Key | Type | Description | Example |
|-----|------|-------------|---------|
| `TS` | uint64 | Total staked amount (microALGOs) | `50000000000` |
| `RPS` | uint64 | Reward per share (scaled) | `0` |
| `LU` | uint64 | Last update timestamp | `1699824000` |
| `RA` | uint64 | Reward asset ID | `749736840` |
| `NS` | uint64 | NFT sequence counter | `5` |
| `RR` | uint64 | Reward rate (per second) | `0` |
| `NFT_OWNER_<id>` | bytes | Owner address before claim | `<32-byte address>` |
| `NFT_S_<id>` | uint64 | Staked amount for NFT | `10000000` |
| `NFT_P_<id>` | uint64 | Lock period (seconds) | `2592000` |
| `NFT_ST_<id>` | uint64 | Start timestamp | `1699824000` |
| `NFT_R_<id>` | uint64 | Reward estimate | `410958` |

**Note**: `<id>` is the 8-byte big-endian representation of the NFT asset ID via `Itob(assetId)`

---

## Methods

### 1. stake

Stakes ALGO and mints a position NFT.

**Type**: `ApplicationCall` (NoOp)

**Group Transaction Required**: Yes (2 transactions)

**Transaction Structure**:
```typescript
// Transaction 0: Payment
{
  type: TxnType.Payment,
  from: user_address,
  to: app_address,
  amount: stake_amount_microalgos,
  // ... suggested params
}

// Transaction 1: Application Call
{
  type: TxnType.ApplicationCall,
  from: user_address,
  appIndex: 749737169,
  onComplete: OnComplete.NoOp,
  appArgs: [
    new Uint8Array(Buffer.from("stake")),
    algosdk.encodeUint64(lock_period_seconds)
  ],
  // ... suggested params
}
```

**Arguments**:
- `appArgs[0]`: `"stake"` (string)
- `appArgs[1]`: Lock period in seconds (uint64)
  - 30 days: `2592000`
  - 60 days: `5184000`
  - 90 days: `7776000`

**Returns**:
- Creates NFT with Asset ID available in inner transaction logs
- Success: Transaction confirmed
- Failure: Throws error with reason

**Side Effects**:
- Increments `GLOBAL_TOTAL_STAKED`
- Creates NFT via inner transaction
- Stores metadata in global state (5 keys)
- Increments `GLOBAL_NFT_SEQ`

**Example** (TypeScript):
```typescript
import * as algosdk from 'algosdk'

async function stake(
  algodClient: algosdk.Algodv2,
  userAddress: string,
  amountAlgos: number,
  lockDays: 30 | 60 | 90
) {
  const appId = 749737169
  const appAddress = algosdk.getApplicationAddress(appId)
  const params = await algodClient.getTransactionParams().do()
  
  const lockSeconds = lockDays * 24 * 60 * 60
  const amountMicroAlgos = amountAlgos * 1_000_000
  
  // Transaction 0: Payment
  const payTxn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
    from: userAddress,
    to: appAddress,
    amount: amountMicroAlgos,
    suggestedParams: params
  })
  
  // Transaction 1: App Call
  const appTxn = algosdk.makeApplicationNoOpTxnFromObject({
    from: userAddress,
    appIndex: appId,
    appArgs: [
      new Uint8Array(Buffer.from('stake')),
      algosdk.encodeUint64(lockSeconds)
    ],
    suggestedParams: params
  })
  
  // Group transactions
  algosdk.assignGroupID([payTxn, appTxn])
  
  return [payTxn, appTxn]
}
```

---

### 2. claim_nft

Transfers the minted NFT from app to user after opt-in.

**Type**: `ApplicationCall` (NoOp)

**Prerequisites**:
- User must have opted into the NFT asset first
- User must be the original staker (stored in `NFT_OWNER_<id>`)

**Transaction Structure**:
```typescript
{
  type: TxnType.ApplicationCall,
  from: user_address,
  appIndex: 749737169,
  onComplete: OnComplete.NoOp,
  appArgs: [
    new Uint8Array(Buffer.from("claim_nft"))
  ],
  foreignAssets: [nft_asset_id],
  // ... suggested params
}
```

**Arguments**:
- `appArgs[0]`: `"claim_nft"` (string)
- `foreignAssets[0]`: NFT asset ID (uint64)

**Validation**:
- Checks `AssetHolding.balance(sender, nft_asset_id)` exists (user opted in)
- Checks `NFT_OWNER_<id>` equals sender address

**Returns**:
- Success: NFT transferred to user
- Failure: Throws error with reason

**Side Effects**:
- Transfers 1 unit of NFT from app to user via inner transaction
- Deletes `NFT_OWNER_<id>` key from global state

**Example** (TypeScript):
```typescript
async function claimNFT(
  algodClient: algosdk.Algodv2,
  userAddress: string,
  nftAssetId: number
) {
  const params = await algodClient.getTransactionParams().do()
  
  const txn = algosdk.makeApplicationNoOpTxnFromObject({
    from: userAddress,
    appIndex: 749737169,
    appArgs: [new Uint8Array(Buffer.from('claim_nft'))],
    foreignAssets: [nftAssetId],
    suggestedParams: params
  })
  
  return txn
}
```

---

### 3. redeem

Burns the NFT and returns staked ALGO + rewards to holder.

**Type**: `ApplicationCall` (NoOp)

**Prerequisites**:
- User must own the NFT (hold 1 unit in wallet)
- Lock period must have expired: `now >= start_time + lock_period`

**Transaction Structure**:
```typescript
{
  type: TxnType.ApplicationCall,
  from: user_address,
  appIndex: 749737169,
  onComplete: OnComplete.NoOp,
  appArgs: [
    new Uint8Array(Buffer.from("redeem"))
  ],
  foreignAssets: [nft_asset_id],
  // ... suggested params
}
```

**Arguments**:
- `appArgs[0]`: `"redeem"` (string)
- `foreignAssets[0]`: NFT asset ID (uint64)

**Validation Sequence**:
```python
1. Assert(AssetHolding.balance(sender, nft_id) >= 1)
2. Assert(metadata_exists(nft_id))
3. Assert(current_time >= start_time + lock_period)  # pc=628
```

**Returns**:
- Success: ALGO + reward sent to user, NFT clawed back
- Failure: Throws error at specific program counter

**Side Effects**:
- Inner Payment: `staked_amount + reward_estimate` → user
- Inner AssetTransfer (clawback): NFT → app
- Deletes 4 global state keys: `NFT_S_`, `NFT_P_`, `NFT_ST_`, `NFT_R_`

**Example** (TypeScript):
```typescript
async function redeem(
  algodClient: algosdk.Algodv2,
  userAddress: string,
  nftAssetId: number
) {
  const params = await algodClient.getTransactionParams().do()
  
  const txn = algosdk.makeApplicationNoOpTxnFromObject({
    from: userAddress,
    appIndex: 749737169,
    appArgs: [new Uint8Array(Buffer.from('redeem'))],
    foreignAssets: [nftAssetId],
    suggestedParams: params
  })
  
  return txn
}
```

---

### 4. opt_in_asset

Allows the app account to opt into an asset (admin only or for setup).

**Type**: `ApplicationCall` (NoOp)

**Transaction Structure**:
```typescript
{
  type: TxnType.ApplicationCall,
  from: admin_address,
  appIndex: 749737169,
  onComplete: OnComplete.NoOp,
  appArgs: [
    new Uint8Array(Buffer.from("opt_in_asset"))
  ],
  foreignAssets: [asset_id_to_opt_in],
  // ... suggested params
}
```

---

## Frontend Integration API

### Wallet Context

**File**: `components/wallet-context.tsx`

**Exports**:
```typescript
const WalletProvider: React.FC<{ children: React.ReactNode }>

function useWallet(): {
  isConnected: boolean
  walletAddress: string | null
  connect: () => Promise<string | null>
  disconnect: () => void
  signTransactions: (txns: Uint8Array[][]) => Promise<any>
}
```

**Usage**:
```typescript
import { useWallet } from '@/components/wallet-context'

function MyComponent() {
  const { isConnected, walletAddress, connect, signTransactions } = useWallet()
  
  const handleStake = async () => {
    if (!isConnected) {
      await connect()
    }
    
    const unsignedTxns = await buildStakeTransactions()
    const signedTxns = await signTransactions([unsignedTxns])
    await submitTransactions(signedTxns)
  }
}
```

---

### Transaction Utilities

**File**: `lib/algorandEncode.ts`

**Functions**:

```typescript
// Convert Uint8Array to base64
function uint8ArrayToBase64(u8: Uint8Array): string

// Convert base64 to Uint8Array
function base64ToUint8Array(b64: string): Uint8Array

// Encode unsigned transaction for wallet signing
function encodeUnsignedTransaction(txn: Transaction): Uint8Array

// Normalize wallet signature responses
function normalizeSignedTransactions(signed: any): Uint8Array[]
```

**Example**:
```typescript
import { encodeUnsignedTransaction, normalizeSignedTransactions } from '@/lib/algorandEncode'

const txn = algosdk.makePaymentTxn(...)
const encoded = encodeUnsignedTransaction(txn)
const base64 = uint8ArrayToBase64(encoded)

const signed = await wallet.signTransaction([base64])
const normalized = normalizeSignedTransactions(signed)
```

---

## Algorand Node API

### Base URLs

**TestNet**:
- Algod: `https://testnet-api.algonode.cloud`
- Indexer: `https://testnet-idx.algonode.cloud`

### Common Endpoints

#### Get Transaction Params

```
GET /v2/transactions/params
```

**Response**:
```json
{
  "consensus-version": "https://github.com/algorandfoundation/specs/tree/...",
  "fee": 1000,
  "genesis-hash": "SGO1GKSzyE7IEPItTxCByw9x8FmnrCDexi9/cOUJOiI=",
  "genesis-id": "testnet-v1.0",
  "last-round": 35000000,
  "min-fee": 1000
}
```

#### Get Account Information

```
GET /v2/accounts/{address}
```

**Response** (simplified):
```json
{
  "address": "ABC...XYZ",
  "amount": 10000000,
  "assets": [
    {
      "asset-id": 749745123,
      "amount": 1,
      "is-frozen": false
    }
  ],
  "apps-local-state": [...],
  "created-apps": [...]
}
```

#### Get Application State

```
GET /v2/applications/{app-id}
```

**Response** (simplified):
```json
{
  "id": 749737169,
  "params": {
    "creator": "CREATOR_ADDRESS",
    "approval-program": "base64...",
    "clear-state-program": "base64...",
    "global-state": [
      {
        "key": "VFM=",  // base64("TS")
        "value": {
          "type": 2,
          "uint": 50000000000
        }
      },
      {
        "key": "TkZUX1NfAAAAAC1hcQ==",  // base64("NFT_S_" + Itob(assetId))
        "value": {
          "type": 2,
          "uint": 10000000
        }
      }
    ],
    "global-state-schema": {
      "num-uint": 48,
      "num-byte-slice": 16
    }
  }
}
```

#### Submit Transaction

```
POST /v2/transactions
Content-Type: application/x-binary
```

**Body**: Raw signed transaction bytes

**Response**:
```json
{
  "txId": "TRANSACTION_ID_HERE"
}
```

#### Check Transaction Status

```
GET /v2/transactions/pending/{txid}
```

**Response** (when confirmed):
```json
{
  "confirmed-round": 35000123,
  "pool-error": "",
  "txn": {...}
}
```

---

## Error Codes

### Smart Contract Errors

| Error | Program Counter | Meaning | Solution |
|-------|----------------|---------|----------|
| `assert failed pc=628` | 628 | Lock period not ended | Wait for maturity |
| `logic eval error` | Various | Assertion failed | Check contract requirements |
| `overspend` | N/A | Insufficient balance | Add more ALGO |
| `invalid Group` | N/A | Group transaction malformed | Ensure proper grouping |

### Transaction Pool Errors

| Error | Meaning | Solution |
|-------|---------|----------|
| `TransactionPool.Remember: transaction ...` | Network-level error | See specific message |
| `fee ... below minimum` | Fee too low | Increase fee |
| `overspend` | Insufficient funds | Reduce amount or add funds |
| `logic eval error` | Contract rejected | Check contract logs |

### Asset Errors

| Error | Meaning | Solution |
|-------|---------|----------|
| `asset ... not found` | Asset doesn't exist | Check asset ID |
| `asset ... frozen` | Asset is frozen | Cannot transfer |
| `must opt-in` | User hasn't opted in | Complete opt-in first |

### Network Errors

| Error | Meaning | Solution |
|-------|---------|----------|
| `Failed to fetch` | Network/CORS issue | Check connection & API |
| `Timeout` | Request took too long | Retry or check network |
| `503 Service Unavailable` | Node down | Try different node |

---

## Data Structures

### StakingPosition (Frontend)

```typescript
interface StakingPosition {
  assetId: number                // NFT asset ID
  stakedAmount: number           // In ALGO (not microALGOs)
  lockPeriod: number             // In days (not seconds)
  startTime: number              // Unix timestamp (seconds)
  estimatedReward: number        // In ALGO
  isReady: boolean               // true if matured
  daysLeft: number               // Days until maturity
}
```

### Transaction Group (Staking)

```typescript
interface StakeTransactionGroup {
  payment: Transaction           // Payment to app
  appCall: Transaction           // App call with "stake"
  groupId: Uint8Array           // Shared group ID
}
```

---

## Rate Limits

**AlgoNode.cloud Free Tier**:
- ~10 requests/second
- Subject to change
- Use exponential backoff for retries

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| v1.0 | 2025-01-16 | Initial deployment (App ID 749737169) |

---

**Last Updated**: 2025-01-16  
**Contract**: App ID 749737169 (TestNet)
