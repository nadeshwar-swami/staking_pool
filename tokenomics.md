Staking Pool Tokenomics (TestNet prototype)

- Staked asset: ALGO (native currency)
- Reward asset: ASA (created on TestNet by deploy script)
- Reward rate: X reward ASA per second per ALGO staked (configurable). For the prototype we'll use a scaled integer rate: rewards_per_sec_per_microalgo = 1e-7 ASA units per microalgo.
- Accounting: contract maintains global "reward_per_share" (scaled by 1e9) and user "reward_debt" to calculate pending rewards on stake/withdraw/claim.
- Emission: rewards are minted upfront into the contract's account (or funded) and distributed on claims.
- Edge cases handled: zero total stake, rounding with scale factor, reentrancy avoided (Algorand model ensures atomic operations per TxGroup).

This is a prototype for TestNet only. Mainnet deployment needs audits and careful gas/fee considerations.
