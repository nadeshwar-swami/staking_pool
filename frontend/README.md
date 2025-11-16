# Frontend (Next.js) – NaanFI Staking UI

This directory contains the production staking frontend for interacting with the Algorand TestNet staking smart contract.

## Features
- Pera Wallet connection (stake, opt-in, claim, redeem flows)
- ALGO balance display
- Lock-in period selection (30 / 60 / 90 days) with dynamic reward estimate
- Two-step NFT claim process (Opt-in → Claim)
- Manual fallback for NFT Asset ID entry when auto-detect fails
- Redeem page to unlock staked ALGO + rewards using the NFT

## Tech Stack
- Next.js / React / TypeScript
- Tailwind + shadcn/ui components
- `algosdk` (dynamic import + fallback UMD)

## Prerequisites
- Node.js v18+
- Pera Wallet (extension or mobile with WalletConnect)
- Deployed smart contract (`app_state.json` in project root must contain `app_id`)

## Install & Run
```powershell
cd frontend
npm install
npm run dev
```
App runs at `http://localhost:3000` (or Next.js assigned port).

## Environment
Frontend does not require a custom `.env`. For backend/scripts deployment, copy the root example env:

```powershell
Copy-Item -Path ".\.env.example" -Destination ".\.env" -Force
# Edit .env and set ALGOD_ADDRESS/ALGOD_TOKEN (if required) and SENDER_MNEMONIC
```

## Core Pages
- `app/stake/page.tsx`: Stake ALGO + view NFT claim box
- `app/claim/page.tsx`: Redeem via NFT (calls `redeem` contract method)

## Staking Flow
1. Connect wallet
2. Enter amount ≥ 1 ALGO and select lock-in period
3. Click “Stake ALGO” and sign grouped transaction
4. If NFT auto-detected: claim box appears
5. If not: follow explorer link (now using Lora) and enter Asset ID manually
6. Opt-in to NFT (transaction: asset transfer of 0 to self)
7. Claim NFT (app call with `claim_nft`)
8. NFT appears in wallet; later use it to redeem

## Redeem Flow
1. Navigate to Claim
2. Enter NFT Asset ID (must be in wallet)
3. Sign `redeem` app call
4. Contract returns staked ALGO + rewards and burns NFT

## NFT Claim Persistence
If auto-detect succeeded or manual entry provided, Asset ID stored in `localStorage` (`pendingNFTClaim`) so the claim box reappears after reload.

## Explorer Links
Transaction explorer: `https://lora.algokit.io/testnet/transaction/<txid>`

## Updating App / Asset IDs
After redeployment update root `app_state.json`. Frontend reads from `../../app_state.json`.

## Troubleshooting
| Issue | Cause | Fix |
|-------|-------|-----|
| Opt-in button error (address null) | Wallet not connected | Reconnect Pera, retry |
| NFT not detected | Inner txn parsing variance | Use manual Asset ID entry |
| Claim fails | Not opted-in | Complete opt-in first |
| Redeem rejected | Lock not matured | Wait until period end |

## Security
TestNet only. Do not use on MainNet without audit.

## License
Internal use – no explicit open-source license configured.

## Related
Smart contract documentation: `../src/README.md`
Root project overview: `../README.md`