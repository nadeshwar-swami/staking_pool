# 📖 User Guide - NaanFI Staking Platform

Complete step-by-step guide for using the NaanFI staking platform.

## Table of Contents
- [Getting Started](#getting-started)
- [How to Stake ALGO](#how-to-stake-algo)
- [How to Claim Your NFT](#how-to-claim-your-nft)
- [How to Redeem (Unstake)](#how-to-redeem-unstake)
- [Understanding Your Dashboard](#understanding-your-dashboard)
- [Common Issues](#common-issues)

---

## Getting Started

### 1. Connect Your Wallet

1. Visit http://localhost:3000
2. Click **"Connect Wallet"** button in the top navigation
3. Your Pera Wallet extension will open
4. Click **"Connect"** to authorize the connection
5. Your wallet address will appear in the top-right corner

**Troubleshooting:**
- If wallet doesn't open: Ensure Pera Wallet extension is installed
- If connection fails: Refresh the page and try again
- If still issues: Try disconnecting from other dApps first

---

## How to Stake ALGO

### Step-by-Step Process

1. **Navigate to Stake Page**
   - Click **"Stake"** in the navigation menu
   - Or visit http://localhost:3000/stake

2. **Enter Stake Amount**
   - Type the amount of ALGO you want to stake (minimum 1 ALGO)
   - Example: `10` for 10 ALGO

3. **Select Lock Period**
   - Choose between three options:
     - **30 Days** → 5% APR
     - **60 Days** → 7% APR  
     - **90 Days** → 10% APR
   - The estimated reward will update automatically

4. **Review Your Stake**
   - Check the summary box showing:
     - Amount to stake
     - Lock period
     - Estimated reward
     - Maturity date

5. **Click "Stake ALGO"**
   - Your Pera Wallet will open with a transaction prompt
   - This is a **grouped transaction** (2 transactions):
     - Transaction 1: Payment of ALGO to the contract
     - Transaction 2: Application call to execute stake logic

6. **Approve in Wallet**
   - Review the transaction details
   - Click **"Approve"** in Pera Wallet
   - Wait 4-5 seconds for blockchain confirmation

7. **Get Your NFT Asset ID**
   - A success message will appear with your **NFT Asset ID**
   - **IMPORTANT**: Copy and save this Asset ID
   - Example: `NFT Asset ID: 749745123`
   - You'll need this ID to claim your NFT and redeem later

### What Just Happened?

Behind the scenes, the smart contract:
1. ✅ Received your ALGO payment
2. ✅ Created a unique NFT (Algorand Standard Asset)
3. ✅ Stored your staking metadata (amount, period, start time, reward)
4. ✅ The NFT is ready to be claimed by you

---

## How to Claim Your NFT

After staking, you need to claim your NFT in two steps:

### Step 1: Opt-in to the NFT

1. **Navigate to Claim NFT Page**
   - Click **"Claim NFT"** in navigation
   - Or visit http://localhost:3000/claim-nft

2. **Enter Your NFT Asset ID**
   - Paste the Asset ID you saved after staking
   - Example: `749745123`

3. **Click "1. Opt-in to NFT"**
   - Pera Wallet will prompt for a transaction
   - This is an **Asset Transfer** with amount 0
   - Fee: 0.001 ALGO

4. **Approve the Opt-in**
   - Click **"Approve"** in Pera Wallet
   - Wait for confirmation
   - Success message will appear

### Step 2: Claim the NFT

1. **Click "2. Claim NFT"**
   - This button activates after successful opt-in
   - Pera Wallet will prompt again

2. **Approve the Claim**
   - This transfers the NFT from contract to your wallet
   - Fee: 0.001 ALGO

3. **Verify in Wallet**
   - Open Pera Wallet
   - Go to **Assets** tab
   - You should see your NFT: `naanfi #X`

### Why Two Steps?

Algorand requires users to opt-in before receiving any asset (ASA). This prevents spam assets. Think of it as "accepting" the NFT before it can be sent to you.

---

## How to Redeem (Unstake)

After your lock period ends, redeem your staked ALGO + rewards:

### Step-by-Step Process

1. **Navigate to Unstake Page**
   - Click **"Unstake"** in navigation
   - Or visit http://localhost:3000/claim

2. **Check Your Positions**
   - The page automatically fetches your staking positions
   - You'll see cards showing:
     - NFT Asset ID
     - Staked amount
     - Estimated reward
     - Lock period
     - Status badge (Locked 🔒 or Ready to Redeem ✅)
     - Days remaining (if locked)

3. **Wait for Maturity** (if locked)
   - If badge shows **"Locked 🔒"**: Your position isn't ready yet
   - Check "Days Left" to see when you can redeem
   - Come back after the lock period ends

4. **Redeem Matured Position**
   - If badge shows **"Ready to Redeem ✅"**: You can redeem now!
   - Click **"Use Asset ID to Redeem"** button
   - This auto-fills the Asset ID in the redeem form

5. **Click "Redeem"**
   - Pera Wallet will prompt for transaction approval
   - This calls the smart contract's `redeem` function

6. **Approve Transaction**
   - Review the details in Pera Wallet
   - Click **"Approve"**
   - Wait for confirmation

7. **Receive Your Funds**
   - The contract will:
     - ✅ Verify you own the NFT
     - ✅ Check maturity (lock period ended)
     - ✅ Send staked ALGO + reward to your wallet
     - ✅ Burn (clawback) the NFT to remove it from circulation
   - Check your wallet balance - it should increase!

### Manual Redemption (Alternative)

If auto-fill doesn't work, you can manually enter the NFT Asset ID:

1. Scroll to the **"Redeem Your Stake NFT"** form
2. Enter your NFT Asset ID
3. Click **"Redeem"**
4. Follow the same approval process

---

## Understanding Your Dashboard

### Staking Positions Card

Each position card shows:

| Field | Description |
|-------|-------------|
| **NFT Asset ID** | Unique identifier for this staking position |
| **Status Badge** | "Locked 🔒" or "Ready to Redeem ✅" |
| **Staked** | Amount of ALGO you staked |
| **Estimated Reward** | Calculated reward based on APR |
| **Lock Period** | Duration you chose (30/60/90 days) |
| **Days Left** | Countdown to maturity (only shown if locked) |

### Status Badges

- 🔒 **Locked**: Position is still in lock period, cannot redeem yet
- ✅ **Ready to Redeem**: Lock period ended, you can redeem now

### Calculating Rewards

Rewards are calculated using simple interest:

```
Reward = (Staked Amount × APR × Lock Period) / (365 days)
```

**Example: 100 ALGO for 90 days at 10% APR**
```
Reward = (100 × 0.10 × 90) / 365 = 2.47 ALGO
Total at Maturity = 100 + 2.47 = 102.47 ALGO
```

---

## Common Issues

### "No Staking Positions" Shown

**Possible Causes:**
1. You haven't claimed your NFT yet after staking
2. The NFT is in a different wallet
3. You already redeemed and the position was deleted

**Solution:**
- Check if you completed the 2-step claim process
- Verify you're connected with the correct wallet
- Check transaction history on [AlgoExplorer TestNet](https://testnet.algoexplorer.io/)

---

### "Position is Still Locked" Error

**Cause:** You tried to redeem before the lock period ended.

**Solution:**
- Check the "Days Left" on your position card
- Wait until maturity date
- The contract enforces the lock period - this cannot be bypassed

---

### "Address Must Not Be Null" Error

**Cause:** Wallet disconnected during transaction construction.

**Solution:**
1. Check that wallet is still connected (address shown in navbar)
2. Refresh the page
3. Reconnect wallet
4. Try the transaction again

---

### "No Signed Transactions Returned" Error

**Cause:** Transaction was cancelled in wallet or signature parsing failed.

**Solution:**
1. Ensure you clicked "Approve" (not "Reject") in Pera Wallet
2. Check that Pera Wallet extension is up to date
3. Try disconnecting and reconnecting wallet
4. Clear browser cache and try again

---

### Opt-in Transaction Fails

**Cause:** Insufficient ALGO for transaction fee (0.001 ALGO) or already opted-in.

**Solution:**
- Ensure you have at least 0.1 ALGO for fees
- If you already opted-in, skip to Step 2 (Claim NFT)
- Check console logs for detailed error message

---

### "This NFT Does Not Have an Active Staking Position"

**Cause:** The Asset ID you entered doesn't match any staking position.

**Solution:**
1. Double-check the Asset ID (should be numbers only)
2. Verify this is the correct ID from your stake transaction
3. Check if you already redeemed this position
4. Search the Asset ID on [AlgoExplorer](https://testnet.algoexplorer.io/) to verify it exists

---

### Transaction Pending Forever

**Cause:** Network congestion or node issues.

**Solution:**
1. Wait 30-60 seconds (Algorand usually confirms in 4-5 seconds)
2. Check transaction status on [AlgoExplorer](https://testnet.algoexplorer.io/)
3. If stuck after 2 minutes, refresh page and try again
4. The transaction may have succeeded - check your wallet

---

### Can't See NFT in Pera Wallet

**Cause:** NFT not claimed yet, or wallet not showing all assets.

**Solution:**
1. Ensure you completed both opt-in and claim steps
2. Pull down to refresh in Pera Wallet mobile app
3. Check "Assets" tab (not "Tokens")
4. Search for asset by ID if not visible
5. The NFT name will be `naanfi #X` where X is a sequence number

---

## Need More Help?

- **Check Browser Console**: Press F12, look for error messages in red
- **View Transaction Details**: Copy transaction ID and search on [TestNet AlgoExplorer](https://testnet.algoexplorer.io/)
- **Test with Small Amount First**: Try staking 1-2 ALGO to test the flow
- **GitHub Issues**: Report bugs at [GitHub Issues](https://github.com/yourusername/naanfi-staking/issues)

---

## Best Practices

✅ **DO:**
- Save your NFT Asset IDs immediately after staking
- Keep a record of staking transactions
- Test with small amounts first
- Wait for transaction confirmations before next action
- Check position status before attempting redemption

❌ **DON'T:**
- Stake more than you can afford to lock
- Try to redeem before maturity (contract will reject)
- Share your wallet mnemonic with anyone
- Use MainNet with this unaudited code
- Close browser during pending transactions
