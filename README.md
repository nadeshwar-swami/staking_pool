# Algorand TestNet Staking Pool (prototype)

This project provides a minimal staking pool prototype implemented in PyTEAL for Algorand TestNet. It includes:

- A PyTEAL stateful smart contract (`src/staking_app.py`) to track staked ALGO and distribute reward ASA.
- Scripts to deploy the app and create a reward ASA (`scripts/deploy.py`).
- A starter interact script with placeholders (`scripts/interact.py`).
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

Notes

This is a prototype for testing only. Do not use in production without an audit. The interact script needs completion to handle grouped transactions for staking.
