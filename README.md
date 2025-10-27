# Algorand TestNet Staking Pool (prototype)

This project provides a minimal staking pool prototype implemented in PyTEAL for Algorand TestNet, with a React frontend for easy interaction. It includes:

- A PyTEAL stateful smart contract (`src/staking_app.py`) to track staked ALGO and distribute reward ASA.
- Scripts to deploy the app and create a reward ASA (`scripts/deploy.py`).
- A starter interact script with placeholders (`scripts/interact.py`).
- React frontend with Stake/Unstake functionality (`frontend/` directory).
- Tokenomics notes (`tokenomics.md`).

Quickstart

1. Install dependencies:

```bash
python -m pip install -r requirements.txt
```

2. Create a `.env` file and set your TestNet mnemonic and optional Algod endpoint.

3. Compile the PyTEAL contract:

```bash
python src/staking_app.py
```

4. Deploy and create the reward ASA:

```bash
python scripts/deploy.py
```

Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Update the app state in `src/app_state.json` with your deployed app and asset IDs.

4. Start the development server:
```bash
npm run dev
```

The frontend provides:
- Wallet connection via Pera Wallet
- Stake ALGO with configurable lock periods
- View staking status and unlock countdown
- Unstake when the lock period expires
- Real-time balance updates

Notes

This is a prototype for testing only. Do not use in production without an audit. Key features:
- Staking periods are configurable (30 days by default)
- Amounts are locked until the staking period expires
- The interact script needs completion to handle grouped transactions for staking
