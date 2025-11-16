# 🚀 Quick Start Cheat Sheet

One-page reference for getting started with NaanFI.

## Installation (5 minutes)

```bash
# 1. Install Python dependencies
pip install -r requirements.txt

# 2. Install frontend dependencies
cd frontend
npm install

# 3. Run the app
npm run dev
# Open http://localhost:3000
```

## Using the Platform

### 1️⃣ Stake ALGO (2 minutes)
1. Connect Pera Wallet
2. Go to **Stake** page
3. Enter amount (e.g., `10` ALGO)
4. Choose lock period (30/60/90 days)
5. Click **Stake ALGO**
6. Approve in wallet
7. **Save the NFT Asset ID shown!**

### Environment (optional, for deployments)

If you plan to deploy contracts or run backend scripts, copy the example env to `.env` at the project root and fill the values:

```powershell
Copy-Item -Path ".\.env.example" -Destination ".\.env" -Force
# Then edit .env to set ALGOD_ADDRESS, ALGOD_TOKEN (if needed), and SENDER_MNEMONIC
```

### 2️⃣ Claim Your NFT (1 minute)
1. Go to **Claim NFT** page
2. Enter your NFT Asset ID
3. Click **1. Opt-in to NFT** → Approve
4. Click **2. Claim NFT** → Approve
5. NFT now in your wallet!

### 3️⃣ Redeem (Unstake) (1 minute)
1. Go to **Unstake** page
2. Wait for position to show "Ready to Redeem ✅"
3. Click **Use Asset ID to Redeem**
4. Click **Redeem** → Approve
5. Receive your ALGO + rewards!

## Contract Details

- **App ID**: `749737169`
- **Network**: Algorand TestNet
- **Reward Asset**: `749736840`

## APR Tiers

| Lock Period | APR |
|-------------|-----|
| 30 days     | 5%  |
| 60 days     | 7%  |
| 90 days     | 10% |

## Common Commands

```bash
# Start dev server
npm run dev

# Deploy new contract
cd scripts
python deploy_with_asa.py

# Check TypeScript errors
npm run type-check

# Build for production
npm run build
```

## Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| Wallet won't connect | Ensure Pera Wallet extension installed |
| "Insufficient balance" | Get test ALGO from faucet |
| "Position locked" error | Wait for lock period to end |
| Can't see positions | Complete NFT claim process first |
| Transaction fails | Check console (F12) for details |

## Important Files

- `app_state.json` - Contract addresses
- `src/staking_app.py` - Smart contract code
- `components/wallet-context.tsx` - Wallet integration
- `docs/TROUBLESHOOTING.md` - Detailed error solutions

## Get TestNet ALGO

https://bank.testnet.algorand.network/

## Documentation

- [USER_GUIDE.md](docs/USER_GUIDE.md) - Complete guide
- [TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md) - Fix errors
- [ARCHITECTURE.md](docs/ARCHITECTURE.md) - How it works
- [API.md](docs/API.md) - API reference

## Need Help?

1. Check browser console (F12)
2. Read [TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md)
3. Search transaction on [AlgoExplorer](https://testnet.algoexplorer.io/)
4. Open GitHub issue

---

**⚠️ TestNet Only - Not for production use!**
