**Contract Overview**:
- **App ID:** 749750731 (latest deployed app created in this session). Confirm in `app_state.json`.
- **Reward ASA:** 749750730 (`NaanFi`, unit `Naan`). The deployer retains ASA manager keys; app is opted in and funded.

**Purpose**:
This Algorand smart contract implements a staking pool that mints a 1-unit NFT per stake. The NFT represents the staked position; whoever holds the NFT can redeem (burn) it after the lock period to receive the original ALGO stake plus a reward paid in the `NaanFi` ASA.

Design highlights:
- NFTs are minted by the app via inner `AssetConfig` transactions (1-unit ASA, app is manager/clawback).
- Per-NFT metadata (start timestamp, lock index, staked microAlgos) is stored in a box keyed by `"NFT:" || Itob(asset_id)` (AVM8 boxes) when available; earlier drafts used global-state keys but the deployed app uses the box approach.
- The app is the manager/clawback for minted NFTs so it can burn/destroy them on redeem.
- Rewards are paid from an ASA (`NaanFi`) created by the deployer; the app is opted into that ASA and funded with an initial amount.

Entrypoints (NoOp app calls):
- `stake` (grouped txns: Payment to app + ApplicationCall)
  - Expects a grouped transaction: Gtxn[0] = Payment from staker to app account (staked microAlgos), Gtxn[1] = Application call with args `['stake', <lock_index_or_secs>]`.
  - Creates a 1-unit NFT (inner AssetConfig), records metadata in a box (key = `NFT:<assetId>`), increments NFT sequence, logs created asset id and sequence via `Log(Itob(assetId))` and `Log(Itob(seq))` so frontends can detect the minted ASA.
  - Does NOT immediately transfer the NFT to the user; user must opt-in and then call `claim_nft` to receive it (this avoids opt-in race conditions).

- `claim_nft`
  - Args: `["claim_nft", <asset_id>]` and include `asset_id` in `foreignAssets` for indexing.
  - Transfers the NFT from the app account to the caller (app must be the asset manager/clawback and the caller must have opted-in to the asset).
  - Clears stored `NFT_OWNER_` mapping.

- `opt_in_asset`
  - Args: none, but include the ASA id to opt-in in `Txn.assets[0]`/`foreignAssets`.
  - App instructs an inner `AssetTransfer` of amount 0 to its own address to opt-in to the reward ASA.
  - Used by deploy scripts to ensure the app is opted into the reward ASA before funding.

- `redeem`
  - Args: `['redeem', <asset_id>]` with `asset_id` in `foreignAssets`.
  - Requires the caller to hold 1 unit of the NFT (checked via `AssetHolding.balance`).
  - Reads the box `NFT:<assetId>` to obtain `start_time`, `lock_index`, and `staked_amount`.
  - Verifies maturity: `Global.latest_timestamp() >= start_time + lock_seconds` (lock_seconds derived from lock_index values).
  - Pays back the staked ALGO via an inner payment txn to the caller and pays the calculated reward in `NaanFi` ASA via inner asset transfer.
  - Burns/destroys the NFT via an inner `AssetConfig` setting `ConfigAssetTotal` to 0 and zeroing manager/reserve/freeze/clawback.
  - Deletes the box for the NFT.

Lock and reward rules (deployed contract constants):
- Lock index 0: 2 minutes (120s): fixed reward of 0.1 Naan per ALGO.
- Lock index 1: 30 days: 8% APR.
- Lock index 2: 60 days: 10% APR.
- Lock index 3: 90 days: 12% APR.

Reward calculation details:
- Short 2-minute lock uses a fixed per-ALGO rate (0.1 Naan per ALGO) represented appropriately for ASA decimals in the contract.
- For APR-based locks, the contract computes pro-rata reward: floor(staked_microalgo * apr_bps / 10000 * lock_seconds / YEAR_SECONDS).

State layout:
- Global state keys (some legacy / reserved):
  - `reward_asset` (uint): reward ASA id (set on create or via `set_params`).
  - `NFT_SEQ` (uint): sequential counter for minted NFTs.
  - Additional legacy global keys may exist in older deployments; newer box-based deployments avoid per-NFT globals.
- Boxes:
  - Key: `NFT:<8-byte asset-id big-endian>`
  - Value: concatenation of `Itob(start_time)` (8 bytes) || `Itob(lock_index)` (8 bytes) || `Itob(staked_amount)` (8 bytes)

Admin operations:
- `set_params` (admin only): set `reward_asset` and `RR` (reward rate placeholder) — check `src/staking_app.py` for exact arg positions.
- `DeleteApplication`, `UpdateApplication` protected by admin (creator) check.

Frontend expectations and UX:
- After a successful `stake` group, the contract logs the created NFT asset id via two logs (asset id then seq). The frontend should inspect the transaction confirmation and inner transactions to locate the `created-asset-index` or the logs to find the minted asset id.
- The frontend should store the minted asset id in localStorage (e.g., `pendingNFTClaim`) and guide the user to the Claim page to opt-in to the NFT ASA and call `claim_nft`.
- Claim flow requires the user to opt-in to the NFT ASA before the app can transfer it.

Deployment notes (scripts present in `scripts/`):
- `deploy_with_asa.py`: primary deploy helper used to (a) create `NaanFi` ASA if not provided, (b) compile `src/staking_app.py`, (c) create the application with the reward ASA passed as the first app arg, (d) fund the application account with ALGO, (e) call `opt_in_asset` so the app opts into the reward ASA, and (f) fund the app with initial NaanFi units.
- `fund_and_optin_app.py`: helper that reads `app_state.json` and funds/opts-in/funds ASA units into the app (useful when the app needs topping up after deploy).
- `cleanup_apps.py`: helper to safely delete apps (requires creator mnemonic).

Security & operational notes:
- The deployer retains manager/freeze/reserve/clawback keys for the `NaanFi` ASA. The app is only given reserve/manager roles as configured during create (the deploy scripts set app as manager/clawback where needed). Keep manager keys secure — losing them is dangerous.
- The contract uses inner transactions heavily; the application account must maintain sufficient ALGO to meet min-balance and inner-txn fees. Deploy helper funds the app with ALGO and ASA units accordingly.
- Audit recommendation: review the PyTEAL (in `src/staking_app.py` and `scripts/real_staking_contract.py`) to confirm edge cases (reentrancy, asset opt-in race, overflow/underflow, and exact reward rounding) before mainnet deployment.

Reference files:
- `src/staking_app.py` — current TEAL/PyTEAL source used by the deploy script (compiled to TEAL v6 in this repo for compatibility). Review this as the canonical contract source for the frontend and deploy scripts.
- `scripts/real_staking_contract.py` — AVM8/PyTEAL draft that demonstrates the box-based approach and inner transactions; useful as a future migration target to take full advantage of boxes.
- `frontend/app_state.json` — frontend config for `app_id` and `asset_id`.

Contact / next steps:
- If you want, I can produce a simplified diagram showing the transaction groups (stake group, claim group, redeem group).
- I can also add an on-chain verification script that queries an `app_id` and prints its ASA balance, opted-in status, and some box contents for quick checks.
