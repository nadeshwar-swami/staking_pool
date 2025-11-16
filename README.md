# 🚀 NaanFI - Algorand Staking DApp with NFT Positions

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Algorand](https://img.shields.io/badge/Blockchain-Algorand-black)](https://www.algorand.com/)
[![TestNet](https://img.shields.io/badge/Network-TestNet-blue)](https://testnet.algoexplorer.io/)

A decentralized ALGO staking platform on Algorand TestNet where stake positions are represented as tradeable NFTs. Stake ALGO with flexible lock periods, receive an NFT representing your position, and redeem staked funds + rewards after maturity by presenting the NFT.

> **⚠️ IMPORTANT**: This is a **TestNet demonstration project** for educational purposes. Do NOT use with real funds on MainNet without professional security audit.

## ✨ Key Features

### 🔒 **Smart Contract Staking**
- **Flexible Lock Periods**: Choose 30, 60, or 90 days
- **Tiered APR Rewards**: 5%, 7%, or 10% based on lock duration
- **Atomic Operations**: Stake and receive NFT in single transaction
- **On-Chain Verification**: All logic enforced by PyTeal smart contract

### 🎨 **NFT-Based Positions**
- Each staking position is minted as a unique NFT (ASA)
- NFT metadata stored in smart contract global state
- NFT holder can redeem the staked ALGO + rewards
- Transfer NFT = Transfer ownership of staking position

### 💼 **Two-Phase Claim Process**
1. **Opt-in**: User opts into the NFT asset
2. **Claim NFT**: Transfer NFT from contract to user's wallet
3. **Redeem**: After maturity, burn NFT to get ALGO + rewards

### 📊 **Real-Time Dashboard**
- View all your active staking positions
- See maturity status and remaining lock time
- Calculate estimated rewards
- One-click redemption for matured positions

## 🎯 Features

### Core Staking
- **Atomic Stake + Mint**: Stake ALGO and receive an NFT in a single transaction
- **Flexible Lock Periods**: 30, 60, or 90 days with tiered APR (5%, 7%, 10%)
- **NFT-Based Redemption**: Whoever holds the NFT can redeem the staked ALGO + rewards after maturity
- **Non-Custodial**: All operations happen on-chain via smart contract

### NFT Marketplace
- **List NFTs for Sale**: Stake position owners can list their NFTs
- **Browse Listings**: View available stake NFTs with metadata (staked amount, rewards, price)
- **Trade Positions**: Buy/sell stake positions before maturity
- **Ownership Transfer**: NFT conveys redemption rights automatically

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

### Required Software
- **Node.js** v18 or higher ([Download](https://nodejs.org/))
- **Python** 3.10 or higher ([Download](https://www.python.org/downloads/))
- **Git** ([Download](https://git-scm.com/downloads))
- **Pera Wallet** browser extension ([Install](https://perawallet.app/))

### Algorand TestNet Account
1. Install Pera Wallet mobile app or browser extension
2. Create a new account or import existing
3. Get free TestNet ALGO from the [faucet](https://bank.testnet.algorand.network/)
4. Send at least 10 ALGO to your account for testing

## 🚀 Quick Start Guide

### Step 1: Clone the Repository

```bash
git clone https://github.com/nadeshwar-swami/staking_pool.git
cd staking_pool
```

### Step 2: Install Backend Dependencies

```bash
# Install Python packages
pip install -r requirements.txt

# Verify installation
python -c "import pyteal; print('PyTeal installed successfully')"
```

**Troubleshooting**: If you get `pip: command not found`, use `python -m pip install -r requirements.txt`

### Step 3: Install Frontend Dependencies

Using npm:
```bash
cd frontend
npm install
```

Or using pnpm (faster):
```bash
cd frontend
pnpm install
```

**Troubleshooting**: If `npm install` fails, try:
- Delete `node_modules` and `package-lock.json`
- Run `npm cache clean --force`
- Try again with `npm install --legacy-peer-deps`

### Step 4: Configure Environment (For Contract Deployment Only)

**Note**: Skip this if you're using the already-deployed contract.

Copy the example env file and edit it:

```env
cp .env.example .env  # On Windows PowerShell use: Copy-Item .\.env.example .\.env -Force
ALGOD_ADDRESS=https://testnet-api.algonode.cloud
ALGOD_TOKEN=
SENDER_MNEMONIC="your 25-word mnemonic phrase here from pera wallet"
```

⚠️ **Security Warning**: Never commit `.env` to version control. It's already in `.gitignore`.

### Step 5: Deploy Smart Contract (Optional)

**Skip this step** if you want to use the existing deployed contract:
- App ID: `749737169`
- Reward Asset ID: `749736840`

To deploy your own contract:

```bash
# Navigate to scripts folder
cd scripts

# Deploy the contract
python deploy_with_asa.py <asset_id>
```

**What happens during deployment:**
1. Compiles PyTeal code to TEAL
2. Deploys application to Algorand TestNet
3. Creates reward token (ASA)
4. Funds app account with ALGO
5. Saves app_id and asset_id to `app_state.json`

**Expected Output:**
```
✓ Approval program compiled (X bytes)
✓ Clear program compiled (Y bytes)
✓ Application deployed: App ID 749737169
✓ Reward asset created: Asset ID 749736840
✓ Configuration saved to app_state.json
```

**⚠️ Important**: If you deploy your own contract, you **must** update the `app_state.json` file in the root directory with your new `app_id` and `asset_id`. The frontend reads this file to interact with the smart contract.

```json
{
  "app_id": YOUR_APP_ID,
  "asset_id": YOUR_ASSET_ID
}
```

### Step 6: Run the Frontend

```bash
cd frontend
npm run dev

# Or with Turbopack (faster)
npm run dev -- --turbopack
```

**Expected Output:**
```
▲ Next.js 16.0.0
- Local:        http://localhost:3000
- Ready in 2.1s
```

### Step 7: Connect Your Wallet

1. Open http://localhost:3000 in your browser
2. Click **Connect Wallet** in the top-right corner
3. Select **Pera Wallet** from the options
4. Approve the connection in your Pera Wallet extension
5. You should see your address displayed

## 📖 Documentation

Comprehensive documentation is available in the `docs/` folder:

- **[USER_GUIDE.md](docs/USER_GUIDE.md)** - Complete step-by-step guide for users
- **[TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md)** - Solutions for common issues
- **[ARCHITECTURE.md](docs/ARCHITECTURE.md)** - Technical architecture for developers
- **[API.md](docs/API.md)** - Smart contract and API reference
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - How to contribute to the project

## 🏗️ Architecture

### Smart Contract (PyTEAL)

**File**: `src/staking_app.py`

#### Key Functions

**`stake`** (NoOp)
- Accepts grouped transaction: Payment (ALGO) + App Call
- Creates NFT (ASA) via inner transaction with:
  - Total supply: 1 (unique NFT)
  - Manager/Clawback: App address (for redemption control)
- Transfers NFT to staker
- Stores mapping in global state:
  - `NFT_S_<assetId>`: Staked amount (microALGO)
  - `NFT_P_<assetId>`: Lock period (seconds)
  - `NFT_ST_<assetId>`: Start timestamp
  - `NFT_R_<assetId>`: Estimated reward (microALGO)

**`redeem`** (NoOp)
- Verifies caller holds the NFT (AssetHolding check)
- Validates maturity: `now >= start + period`
- Pays staked amount + reward via inner Payment
- Clawbacks NFT from holder to app
- Deletes global state mappings

## **Latest Smart Contract Version & Deploy**

- **Stable (TEAL v6)**: the current production-ready flow uses the PyTEAL contract at `src/staking_app.py` and the deploy helper `scripts/deploy_with_asa.py`.
  - Requirements: Python dependencies from `requirements.txt`, an Algod RPC (see `.env.example`) and a deployer mnemonic in `SENDER_MNEMONIC`.
  - Quick deploy (TestNet):

    ```powershell
    # copy env template and edit .env with your mnemonic
    Copy-Item .\.env.example .\.env -Force

    # install python deps
    pip install -r requirements.txt

    # deploy (omit arg to auto-create the reward ASA 'NaanFi')
    python .\scripts\deploy_with_asa.py [REWARD_ASSET_ID]
    ```

  - Notes:
    - If you omit `REWARD_ASSET_ID`, `deploy_with_asa.py` will create a `NaanFi` ASA and wire it to the new app.
    - The script writes `app_state.json` (root) containing `app_id` and `asset_id` — the frontend reads this file by default.
    - If the app needs a final top-up or the ASA opt-in failed due to a low app balance, run:

    ```powershell
    python .\scripts\fund_and_optin_app.py
    ```

- **Experimental (AVM8 / Boxes)**: a box-based design that stores per-NFT metadata in Algorand Boxes is available as an experimental draft in `scripts/real_staking_contract.py`.
  - This design requires TEAL v8 support (PyTEAL + algod that can compile TEAL v8). Use `scripts/deploy_box_app.py` to attempt deployment:

    ```powershell
    # Ensure your env (.env or environment) contains ALGOD_ADDRESS, ALGOD_TOKEN (optional) and SENDER_MNEMONIC
    python .\scripts\deploy_box_app.py
    ```

  - Caveats:
    - `real_staking_contract.py` and box-based deployment are **experimental** — only use for testing on TestNet.
    - If the script falls back or aborts with a TEAL compile error, upgrade PyTEAL and ensure your Algod node supports TEAL v8.
    - Do **not** deploy the AVM8 contract to MainNet without a professional audit.

Common env variables (see `.env.example`): `ALGOD_ADDRESS`, `ALGOD_TOKEN`, `SENDER_MNEMONIC`.

Common troubleshooting tips:
- If you see an opt-in failure referencing the app account balance, fund the app with a small ALGO amount (scripts handle this automatically during deploy but `fund_and_optin_app.py` can retry top-ups).
- For transient algod network errors, re-run the deploy command — public algod endpoints occasionally return timeouts.


### Frontend (React + TypeScript)

**Pages**:
- **Home** (`/`): Landing page with features
- **Stake** (`/stake`): Stake ALGO, receive NFT
- **Unstake** (`/unstake`): Direct unstake (legacy flow)
- **Claim** (`/claim`): Redeem via NFT Asset ID
- **Marketplace** (`/marketplace`): List and buy stake NFTs

## 🔄 User Flows

### Flow 1: Stake & Receive NFT

1. Connect Pera Wallet
2. Navigate to **Stake** page
3. Enter amount and select period (30/60/90 days)
4. Click **Stake ALGO**
5. Pera Wallet prompts to sign grouped transaction
6. App mints NFT via inner transaction
7. NFT transferred to your wallet
8. Alert shows created Asset ID

### Flow 2: Sell Stake NFT

1. Navigate to **Marketplace**
2. Enter NFT Asset ID and desired price (ALGO)
3. Click **Create Listing**
4. Listing appears in marketplace grid

### Flow 3: Redeem Stake + Rewards

1. Navigate to **Claim** page
2. Enter NFT Asset ID in "Redeem by NFT Asset ID" section
3. Click **Redeem**
4. App validates ownership and maturity
5. App sends staked ALGO + reward to you
6. App clawbacks NFT (removes from circulation)

## 📊 APR Tiers

| Lock Period | APR  | Example: 100 ALGO |
|-------------|------|-------------------|
| 30 days     | 5%   | +0.41 ALGO        |
| 60 days     | 7%   | +1.15 ALGO        |
| 90 days     | 10%  | +2.47 ALGO        |

## 🔐 Security & Limitations

⚠️ **IMPORTANT DISCLAIMERS**:

### This is a TestNet Demo
- **NOT audited** for production use
- **NO warranty** for MainNet deployment
- **Educational purposes** only
- Use with **test funds** only

### Known Limitations
1. **Limited Capacity**: Global state can hold ~10-12 concurrent positions
2. **No Asset Destruction**: Redeemed NFTs clawed back (not destroyed)
3. **Simple APR**: Fixed tiers, no dynamic adjustments
4. **No Upgrade Path**: Immutable contract after deployment

### Production Recommendations
- ✅ Professional security audit
- ✅ Implement Box storage for unlimited positions
- ✅ Add emergency pause mechanism
- ✅ Implement true asset destruction
- ✅ Comprehensive test suite
- ✅ Rate limiting and anti-spam measures

See [ARCHITECTURE.md](docs/ARCHITECTURE.md#security-considerations) for detailed security analysis.

## 📁 Project Structure

```
staking_pool/
├── src/
│   ├── staking_app.py          # PyTEAL smart contract source
│   ├── approval.teal           # Compiled approval program
│   └── clear.teal              # Compiled clear state program
│
├── scripts/
│   ├── deploy_with_asa.py      # Deploy contract + create reward asset
│   ├── deploy.py               # Basic deployment script
│   ├── interact.py             # Test interactions
│   └── app_state.json          # Deployed contract IDs
│
├── frontend/  # Frontend (Next.js)
│   ├── app/
│   │   ├── page.tsx            # Landing page
│   │   ├── stake/page.tsx      # Stake ALGO
│   │   ├── claim-nft/page.tsx  # Claim NFT (2-step)
│   │   ├── claim/page.tsx      # Unstake/redeem
│   │   └── faq/page.tsx        # FAQ
│   │
│   ├── components/
│   │   ├── wallet-context.tsx         # Global wallet state
│   │   ├── staking-form.tsx           # Stake form
│   │   ├── claim-nft-form.tsx         # NFT claim form
│   │   ├── claim-form.tsx             # Redeem form
│   │   ├── user-staking-positions.tsx # Position list
│   │   └── ui/                        # shadcn/ui components
│   │
│   ├── lib/
│   │   └── algorandEncode.ts   # Transaction utilities
│   │
│   └── package.json
│
├── docs/
│   ├── USER_GUIDE.md           # Complete user guide
│   ├── TROUBLESHOOTING.md      # Error solutions
│   ├── ARCHITECTURE.md         # Technical architecture
│   └── API.md                  # API reference
│
├── app_state.json              # Current deployment IDs
├── requirements.txt            # Python dependencies
├── package.json                # Root package.json
├── CONTRIBUTING.md             # Contribution guidelines
├── LICENSE                     # MIT License
└── README.md                   # This file
```

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for:
- Code of conduct
- Development workflow
- Coding standards
- How to submit PRs
- Reporting bugs

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Additional Terms**: This software is provided "as is" for TestNet use only. See LICENSE for full terms.

## 🙏 Acknowledgments

- [Algorand Foundation](https://algorand.foundation/) for the blockchain platform
- [PyTeal](https://github.com/algorand/pyteal) for smart contract development
- [Pera Wallet](https://perawallet.app/) for wallet integration
- [shadcn/ui](https://ui.shadcn.com/) for UI components

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/naanfi-staking/issues)
- **Documentation**: See `docs/` folder
- **Questions**: Check [USER_GUIDE.md](docs/USER_GUIDE.md) and [TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md)

## 🗺️ Roadmap

- [ ] Add automated test suite
- [ ] Implement Box storage for unlimited positions
- [ ] Add marketplace escrow functionality
- [ ] Create mobile-responsive improvements
- [ ] Add analytics dashboard
- [ ] Multi-language support
- [ ] MainNet deployment guide (after audit)

---

**Made with ❤️ for the Algorand community**

**⚠️ Remember**: This is TestNet only. Always test thoroughly before any MainNet deployment.
