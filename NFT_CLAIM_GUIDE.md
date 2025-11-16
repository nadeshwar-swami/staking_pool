# NFT Claim Guide for Stakers

## Why Don't I See My NFT Immediately After Staking?

This is **by design** to handle Algorand's asset opt-in requirement. Here's what happens:

### The Staking Flow

1. **Stake ALGO** → You send ALGO + call the staking app
2. **NFT Created** → The app mints a unique NFT representing your stake
3. **NFT Held by App** → The NFT stays in the app's account (not transferred yet)
4. **Owner Recorded** → The app stores that YOU are the intended owner

### Why This Design?

On Algorand, accounts must **opt-in to an asset** before receiving it. Since:
- The NFT's asset ID is only known AFTER creation
- You can't opt-in to an asset ID that doesn't exist yet
- Immediate transfer would fail

The solution: **2-step claim process** after staking.

---

## How to Receive Your NFT (2 Steps)

After successfully staking, you'll see an NFT claim box with the created Asset ID. Follow these steps:

### Step 1: Opt-in to the NFT
- Click the **"1️⃣ Opt-in to NFT"** button
- This sends a 0-amount asset transfer to yourself
- Pera Wallet will ask you to sign
- Wait for confirmation
- ✅ Success message: "Step 1 complete: Opt-in successful!"

### Step 2: Claim the NFT
- Click the **"2️⃣ Claim NFT"** button
- This calls the smart contract's `claim_nft` function
- The contract verifies you're the owner and opted-in
- The NFT is transferred from app → your wallet
- 🎉 Success message: "NFT has been transferred to your wallet"

### Important Notes

- ⚠️ **You MUST complete BOTH steps** to receive the NFT
- The Asset ID is saved in your browser (localStorage) so you can claim later if needed
- If you navigate away, return to the Stake page and the claim box will reappear
- Alternative: Use the **Claim page** (`/claim`) and enter the Asset ID manually

---

## Troubleshooting

### "I staked but don't see the claim box"

Check:
1. Was the stake transaction confirmed? Check your wallet history
2. Refresh the page - localStorage will restore pending claims
3. Go to the Claim page and enter the Asset ID manually

### "Opt-in failed"

- Ensure you have enough ALGO for transaction fees (~0.001 ALGO)
- Check your account has minimum balance for one more asset (+0.1 ALGO)

### "Claim failed: account not opted-in"

- You must complete Step 1 (Opt-in) before Step 2 (Claim)
- Wait for Step 1 confirmation before clicking Claim

### "Claim failed: wrong owner"

- The NFT was created for a different wallet address
- Ensure you're connected with the same wallet that performed the stake

### "I lost my Asset ID"

If you know the stake transaction ID:
1. Look it up on [TestNet Explorer](https://testnet.explorer.perawallet.app/)
2. Find the inner transaction that created the asset
3. Note the Asset ID
4. Use the Claim page to opt-in and claim manually

Or query the app's global state (advanced):
```bash
# Using algosdk or algod API
GET /v2/applications/{appId}
# Look for keys like "NFT_OWNER_<assetId>"
```

---

## For Developers

### Smart Contract Flow

**On Stake:**
```python
# Create NFT via inner transaction
InnerTxn.created_asset_id() → created_id
# Store owner mapping (NOT transfer)
App.globalPut("NFT_OWNER_<created_id>", Txn.sender())
```

**On claim_nft:**
```python
# Verify caller owns the NFT
Assert(App.globalGet("NFT_OWNER_<assetId>") == Txn.sender())
# Verify caller opted-in
Assert(AssetHolding.balance(Txn.sender(), assetId).hasValue())
# Transfer NFT
InnerTxn: AssetTransfer(asset=assetId, receiver=Txn.sender(), amount=1)
# Clean up
App.globalDel("NFT_OWNER_<assetId>")
```

### Frontend Implementation

Key files:
- `components/staking-form.tsx` - Main stake + inline claim UI
- `components/claim-form.tsx` - Standalone claim page for manual entry
- `app_state.json` - Current deployed app_id

The UI:
- Detects created asset ID from transaction confirmation
- Stores pending claims in localStorage
- Provides opt-in helper (0-amount asset transfer to self)
- Calls `claim_nft` with foreignAssets=[assetId]

---

## Admin Recovery (if needed)

If a user cannot complete the claim (lost wallet, etc.), an admin can deliver the NFT:

```python
# Contract function: admin_deliver
# Admin provides: asset in Txn.assets[0], recipient in Txn.accounts[1]
# Recipient must be opted-in first
```

This requires the deployer/admin account and should only be used for recovery.

---

## Summary

**Normal User Flow:**
1. Stake ALGO ✅
2. See Asset ID in UI 📦
3. Click "Opt-in" → sign → confirm ✅
4. Click "Claim" → sign → confirm 🎉
5. NFT now in your wallet! 

**Time required:** ~30 seconds for each step (transaction confirmation time)

**Cost:** ~0.002 ALGO total (transaction fees for opt-in + claim)

---

For support or issues, check the transaction on TestNet Explorer or contact the development team.
