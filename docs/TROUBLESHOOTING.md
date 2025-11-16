# 🔧 Troubleshooting Guide

Comprehensive guide to diagnose and fix common issues with the NaanFI Staking Platform.

## Table of Contents
- [Installation Issues](#installation-issues)
- [Wallet Connection Issues](#wallet-connection-issues)
- [Transaction Errors](#transaction-errors)
- [Smart Contract Errors](#smart-contract-errors)
- [Frontend Issues](#frontend-issues)
- [Network Issues](#network-issues)
- [Debugging Tools](#debugging-tools)

---

## Installation Issues

### Python Dependencies Not Installing

**Error:**
```
ERROR: Could not find a version that satisfies the requirement pyteal
```

**Solutions:**

1. **Check Python Version**
   ```bash
   python --version
   # Should be 3.10 or higher
   ```

2. **Upgrade pip**
   ```bash
   python -m pip install --upgrade pip
   ```

3. **Install from requirements.txt**
   ```bash
   pip install -r requirements.txt
   ```

4. **Try with specific version**
   ```bash
   pip install pyteal==0.19.0
   pip install py-algorand-sdk==2.2.0
   ```

---

### NPM Install Fails

**Error:**
```
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
```

**Solutions:**

1. **Use Legacy Peer Deps**
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Clear Cache**
   ```bash
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Use pnpm Instead**
   ```bash
   npm install -g pnpm
   pnpm install
   ```

4. **Check Node Version**
   ```bash
   node --version
   # Should be v18 or higher
   ```

---

### TypeScript Compilation Errors

**Error:**
```
Type error: Cannot find module '@/components/ui/button'
```

**Solutions:**

1. **Verify tsconfig.json paths**
   ```json
   {
     "compilerOptions": {
       "paths": {
         "@/*": ["./*"]
       }
     }
   }
   ```

2. **Restart TypeScript Server in VS Code**
   - Press `Ctrl+Shift+P`
   - Type "TypeScript: Restart TS Server"
   - Press Enter

3. **Reinstall Dependencies**
   ```bash
   rm -rf node_modules
   npm install
   ```

---

## Wallet Connection Issues

### Pera Wallet Extension Not Detected

**Symptoms:**
- "Connect Wallet" button does nothing
- Console error: `connector is null`

**Solutions:**

1. **Install Pera Wallet Extension**
   - Visit https://perawallet.app/
   - Click "Browser Extension"
   - Install for your browser (Chrome, Firefox, Edge)

2. **Check Extension is Enabled**
   - Open browser extensions page
   - Ensure Pera Wallet is toggled ON
   - Try disabling/re-enabling it

3. **Grant Site Permissions**
   - Right-click Pera Wallet extension icon
   - Go to "Manage Extension"
   - Under "Site Access", select "On all sites"

4. **Refresh Page**
   ```
   Press Ctrl+R or F5
   ```

---

### "WalletConnect Session Expired"

**Solutions:**

1. **Disconnect and Reconnect**
   - Click "Disconnect" button in navbar
   - Click "Connect Wallet" again
   - Approve connection in Pera Wallet

2. **Clear Browser Storage**
   ```javascript
   // In browser console (F12)
   localStorage.clear()
   sessionStorage.clear()
   location.reload()
   ```

3. **Check Pera Wallet App**
   - Open Pera Wallet mobile app
   - Go to Settings → WalletConnect
   - Disconnect any old sessions
   - Try connecting again

---

### Wrong Account Connected

**Solution:**

1. **Switch Account in Pera Wallet**
   - Click Pera Wallet extension icon
   - Click account dropdown at top
   - Select the correct account
   - Refresh the page

2. **Disconnect and Reconnect**
   - Click "Disconnect" in navbar
   - Switch account in Pera Wallet
   - Click "Connect Wallet" again

---

## Transaction Errors

### "Transaction Rejected by User"

**Cause:** You clicked "Reject" in Pera Wallet.

**Solution:**
- Try the action again
- This time click "Approve" in the wallet prompt
- This is normal behavior - no damage done

---

### "Insufficient ALGO Balance"

**Error:**
```
TransactionPool.Remember: transaction ... overspend
```

**Cause:** Not enough ALGO to cover stake amount + transaction fees.

**Solutions:**

1. **Check Your Balance**
   - Open Pera Wallet
   - Note your available ALGO (not total, but available)

2. **Account for Minimum Balance**
   - Algorand requires 0.1 ALGO minimum per account
   - Plus 0.1 ALGO for each asset opted-in
   - Keep at least 0.5 ALGO for fees and minimums

3. **Reduce Stake Amount**
   - If staking 10 ALGO but balance is 10.2 ALGO
   - Try staking 9.5 ALGO instead
   - Always leave buffer for fees

4. **Get More TestNet ALGO**
   - Visit https://bank.testnet.algorand.network/
   - Enter your address
   - Request test ALGO (free)

---

### "Transaction Fee Too Low"

**Error:**
```
fee 1000 below minimum 2000
```

**Cause:** Network congestion increased minimum fee.

**Solution:**
- The app should handle this automatically
- If error persists, check console logs
- Report as a bug - fee calculation may need adjustment

---

### "Invalid Group Transaction"

**Error:**
```
group element [...] not found
```

**Cause:** Staking requires grouped transactions (Payment + App Call).

**Solutions:**

1. **Don't Modify Transactions in Wallet**
   - Approve both transactions as-is
   - Don't change fees or amounts

2. **Check Network Connection**
   - Ensure stable internet
   - Try again if connection dropped

3. **Refresh and Retry**
   - Refresh the page
   - Reconnect wallet
   - Try staking again

---

## Smart Contract Errors

### "Assert Failed pc=628"

**Error:**
```
logic eval error: assert failed pc=628
```

**Meaning:** Lock period hasn't expired yet.

**Cause:** You tried to redeem before maturity.

**Solutions:**

1. **Check Days Remaining**
   - Go to Unstake page
   - Look at your position card
   - Note "Days Left" field

2. **Wait for Maturity**
   - The lock period is enforced by the smart contract
   - Cannot be bypassed
   - Come back after the maturity date

3. **Verify with Blockchain Data**
   ```javascript
   // In browser console
   const startTime = 1699824000; // Your start time
   const lockPeriod = 2592000;   // 30 days in seconds
   const endTime = startTime + lockPeriod;
   const now = Math.floor(Date.now() / 1000);
   const daysLeft = Math.ceil((endTime - now) / 86400);
   console.log(`Days left: ${daysLeft}`);
   ```

---

### "Asset Holding Must Have Value"

**Error:**
```
AssetHolding.balance(...) hasValue is false
```

**Meaning:** You don't own the NFT you're trying to redeem.

**Possible Causes:**
1. You haven't claimed the NFT yet (still in contract)
2. You transferred the NFT to another wallet
3. You already redeemed this NFT
4. Wrong Asset ID entered

**Solutions:**

1. **Complete NFT Claim Process**
   - Go to Claim NFT page
   - Follow the 2-step process (opt-in + claim)
   - Then the NFT will be in your wallet

2. **Check NFT Ownership**
   - Open Pera Wallet
   - Go to Assets tab
   - Search for the Asset ID
   - If not found, you don't own it

3. **Verify on AlgoExplorer**
   - Visit https://testnet.algoexplorer.io/
   - Search for the Asset ID
   - Click "Holders" tab
   - Confirm your address owns 1 unit

4. **Check Transaction History**
   - Search your address on AlgoExplorer
   - Look for Asset Transfer transactions
   - See if you transferred or redeemed the NFT

---

### "Global State Key Not Found"

**Symptoms:**
- Position shows as not found
- Empty state on Unstake page
- "No active staking position" error

**Possible Causes:**
1. Position already redeemed (keys deleted)
2. Wrong app_id in app_state.json
3. Wrong Asset ID provided
4. Network sync issues

**Solutions:**

1. **Verify app_state.json**
   ```json
   {
     "app_id": 749737169,
     "asset_id": 749736840
   }
   ```

2. **Check App Global State**
   - Visit https://testnet.algoexplorer.io/application/749737169
   - Click "State" tab
   - Look for keys starting with `NFT_S_`, `NFT_P_`, etc.
   - Verify your Asset ID is listed

3. **Check Console Logs**
   - Press F12 to open browser console
   - Look for "Asset IDs with metadata" log
   - Verify your Asset ID appears in the list

4. **Verify You Have the NFT**
   ```javascript
   // In browser console
   const assetId = 749745123; // Your NFT Asset ID
   fetch(`https://testnet-api.algonode.cloud/v2/accounts/YOUR_ADDRESS`)
     .then(r => r.json())
     .then(data => {
       const hasAsset = data.assets.some(a => a['asset-id'] === assetId);
       console.log('Has NFT:', hasAsset);
     });
   ```

---

### "Logic Signature Verification Failed"

**Cause:** Trying to use wrong app version or outdated contract.

**Solutions:**

1. **Check Deployed App ID**
   - Ensure `app_state.json` has correct ID
   - Current deployment: `749737169`

2. **Redeploy Contract** (if necessary)
   ```bash
   cd scripts
   python deploy_with_asa.py
   ```

3. **Clear Browser Cache**
   - Old contract address may be cached
   - Hard refresh: `Ctrl+Shift+R`

---

## Frontend Issues

### "No Staking Positions" Despite Having Staked

**Debugging Steps:**

1. **Check Browser Console (F12)**
   - Look for "User assets:" log
   - Look for "Asset IDs with metadata:" log
   - Compare the two lists - your Asset ID should be in both

2. **Verify NFT Ownership**
   ```
   User assets: [749745123, 749745456]
   Asset IDs with metadata: [749745123]
   ```
   - If your Asset ID is in both lists: Good ✅
   - If only in metadata: You don't own the NFT (claim it first)
   - If only in assets: NFT has no staking data (wrong asset?)

3. **Check All 4 Metadata Keys**
   - The code looks for: `NFT_S_`, `NFT_P_`, `NFT_ST_`, `NFT_R_`
   - All 4 must exist for the position to display
   - Check AlgoExplorer app state for these keys

4. **Refresh the Data**
   - Click the "Refresh" button on Unstake page
   - Wait 2-3 seconds for fetch to complete
   - Check console logs again

---

### Auto-Fill Button Not Working

**Symptoms:**
- Click "Use Asset ID to Redeem"
- Asset ID field remains empty

**Solutions:**

1. **Check Input Field ID**
   - Inspect the input element
   - Ensure it has `type="number"` attribute

2. **Try Manual Entry**
   - Copy the Asset ID from the position card
   - Manually paste into the redeem form
   - Click "Redeem"

3. **Console Error Check**
   - Press F12
   - Click the button
   - Look for any JavaScript errors
   - Report if you see errors

---

### Page Loads Slowly or Freezes

**Causes:**
- Fetching large global state
- Many concurrent API calls
- Network latency

**Solutions:**

1. **Check Network Tab (F12)**
   - See which API calls are slow
   - Algorand TestNet API can be slow sometimes

2. **Wait for Loading Indicator**
   - Don't click buttons during loading
   - Wait for spinner to disappear

3. **Reduce Concurrent Calls**
   - If you opened multiple positions
   - Each requires separate lookups
   - This is expected behavior

4. **Use Production API** (if available)
   - Consider using paid Algorand API service
   - AlgoNode.cloud free tier may rate-limit

---

## Network Issues

### "Failed to Fetch" Errors

**Error:**
```
TypeError: Failed to fetch
```

**Causes:**
- No internet connection
- Algorand API down
- CORS issues
- Firewall blocking requests

**Solutions:**

1. **Check Internet Connection**
   ```bash
   ping google.com
   ```

2. **Test Algorand API Directly**
   ```bash
   curl https://testnet-api.algonode.cloud/health
   # Should return: {"status": "OK"}
   ```

3. **Try Alternative API Endpoint**
   - In browser console:
   ```javascript
   fetch('https://testnet-api.algonode.cloud/v2/status')
     .then(r => r.json())
     .then(console.log)
   ```

4. **Check Firewall/Antivirus**
   - Temporarily disable to test
   - Add exception for localhost:3000

5. **Use VPN** (if in restricted region)
   - Some countries block crypto-related APIs
   - Connect to VPN and try again

---

### Transactions Stuck "Pending"

**Symptoms:**
- Transaction submitted
- Loading spinner never stops
- No error message

**Solutions:**

1. **Check Transaction on AlgoExplorer**
   - Copy transaction ID from console logs
   - Search on https://testnet.algoexplorer.io/
   - Check status: Confirmed, Pending, or Not Found

2. **Wait Longer**
   - TestNet can be slow during high usage
   - Wait up to 2 minutes
   - Algorand usually confirms in 4-5 seconds

3. **Check Node Status**
   ```bash
   curl https://testnet-api.algonode.cloud/v2/status
   ```

4. **Retry Transaction**
   - Refresh page after 2 minutes
   - Check if transaction succeeded
   - If not, try again with higher fee

---

## Debugging Tools

### Browser Console Logging

**Enable Detailed Logs:**

```javascript
// In browser console (F12)
localStorage.setItem('debug', 'true');
location.reload();
```

**Key Logs to Look For:**

- `=== Starting fetchPositions ===` - Position fetch started
- `Owned NFT Asset IDs:` - Your NFT list
- `Asset IDs with metadata:` - Contract's position list
- `Checking asset X:` - Individual asset verification
- `✓ Added position for asset X` - Success
- `✗ Skipped asset X` - Failed validation

---

### AlgoExplorer Investigation

**Check Your Account:**
```
https://testnet.algoexplorer.io/address/YOUR_ADDRESS
```

**Check Application State:**
```
https://testnet.algoexplorer.io/application/749737169
```

**Check Asset Details:**
```
https://testnet.algoexplorer.io/asset/YOUR_ASSET_ID
```

**Check Transaction:**
```
https://testnet.algoexplorer.io/tx/YOUR_TX_ID
```

---

### Manual API Testing

**Get Account Info:**
```bash
curl https://testnet-api.algonode.cloud/v2/accounts/YOUR_ADDRESS
```

**Get App Global State:**
```bash
curl https://testnet-api.algonode.cloud/v2/applications/749737169
```

**Get Transaction Info:**
```bash
curl https://testnet-api.algonode.cloud/v2/transactions/YOUR_TX_ID
```

---

### Common Console Commands

**Clear All Local Storage:**
```javascript
localStorage.clear();
sessionStorage.clear();
location.reload();
```

**Check Wallet Connection:**
```javascript
console.log('Connected:', window.walletAddress);
```

**Force Re-fetch Positions:**
```javascript
window.location.href = '/claim?refresh=true';
```

**Check Current Timestamp:**
```javascript
console.log('Current Unix Time:', Math.floor(Date.now() / 1000));
```

---

## Still Having Issues?

### Before Reporting a Bug:

1. ✅ Check this troubleshooting guide
2. ✅ Check browser console for errors (F12)
3. ✅ Verify transactions on AlgoExplorer
4. ✅ Try with a fresh wallet/account
5. ✅ Test with minimum stake amount (1 ALGO)

### When Reporting Issues:

Include the following information:

- **Error Message**: Exact text of any error
- **Console Logs**: Screenshot of browser console (F12)
- **Transaction ID**: If transaction was submitted
- **Wallet Address**: Your TestNet address
- **Asset ID**: The NFT asset ID involved
- **Steps to Reproduce**: What you did before the error
- **Browser**: Chrome/Firefox/Edge + version
- **Operating System**: Windows/Mac/Linux

### Where to Get Help:

- **GitHub Issues**: https://github.com/yourusername/naanfi-staking/issues
- **Check Existing Issues**: Someone may have had the same problem
- **Discord/Telegram**: (Add your community links)

---

## Quick Reference: Error Codes

| Error Code/Message | Meaning | Solution |
|-------------------|---------|----------|
| `assert failed pc=628` | Lock period not ended | Wait for maturity |
| `overspend` | Insufficient balance | Add more ALGO or reduce amount |
| `No signed transactions` | Transaction cancelled | Approve in wallet |
| `AssetHolding must have value` | Don't own NFT | Claim NFT first |
| `group element not found` | Group transaction failed | Retry with stable connection |
| `below minimum balance` | Need more ALGO for fees | Get more ALGO from faucet |
| `Transaction rejected` | User cancelled | Normal - try again |
| `Failed to fetch` | Network/API issue | Check internet & API status |

---

**Last Updated**: 2025-01-16  
**Contract Version**: v1.0 (App ID: 749737169)
