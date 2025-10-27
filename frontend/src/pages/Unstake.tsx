import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PeraWalletConnect } from '@perawallet/connect';
import algosdk from 'algosdk';
import { AppState, StakeError } from '../types';

// Import app state from JSON
import appStateJson from '../app_state.json';

// App state with the contract IDs
const appState: AppState = appStateJson;

// Initialize Pera Wallet instance
const peraWallet = new PeraWalletConnect({
  shouldShowSignTxnToast: false,
  chainId: 416002 // TestNet chain ID
});

// Algod client for TestNet
const algod = new algosdk.Algodv2('', 'https://testnet-api.algonode.cloud', '');

// Debug function to check account state directly on TestNet (no console logging)
const debugCheckState = async (address: string, appId: number) => {
  const accountInfo = await algod.accountInformation(address).do();
  const localState = accountInfo.appsLocalState?.find((app: any) =>
    typeof app.id === 'bigint' ? app.id.toString() === appId.toString() : Number(app.id) === appId
  );
  return { accountInfo, localState };
};

// Helper function to decode application state keys (handles base64 strings returned by algod)
const decodeState = (keyInput: any): string => {
  try {
    // If algod returned the key as a base64 string
    if (typeof keyInput === 'string') {
      return Buffer.from(keyInput, 'base64').toString('utf8');
    }

    // If passed the whole pair object with a `key` property
    if (keyInput && typeof keyInput === 'object' && keyInput.key) {
      if (typeof keyInput.key === 'string') {
        return Buffer.from(keyInput.key, 'base64').toString('utf8');
      }
      if (keyInput.key instanceof Uint8Array) {
        return new TextDecoder().decode(keyInput.key);
      }
    }

    // If it's a Uint8Array
    if (keyInput instanceof Uint8Array) {
      return new TextDecoder().decode(keyInput);
    }

    // Fallback to string coercion
    return String(keyInput || '');
  } catch (e) {
    // ignore decode errors
    return '';
  }
};

// (removed duplicate declaration)



// Helper to locate the application's local state in various algod response shapes
const findAppLocalState = (accountInfo: any, appId: number) => {
  if (!accountInfo) return null;
  const candidateKeys = ['appsLocalState', 'apps-local-state', 'apps_local_state', 'apps-localstate'];
  for (const k of candidateKeys) {
    const arr = (accountInfo as any)[k];
    if (Array.isArray(arr)) {
      for (const entry of arr) {
        // try a few possible id property names
        const idCandidates = [entry.id, entry['id'], entry['app-id'], entry['application-id'], entry['appId']];
        for (const id of idCandidates) {
          if (typeof id !== 'undefined' && Number(id) === Number(appId)) return entry;
        }
      }
    }
  }
  return null;
};

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const MainContent = styled.div`
  max-width: 480px;
  margin: 32px auto;
  padding: 0 16px;
  width: 100%;
`;

const Card = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 24px;
  text-align: center;
  color: #333;
`;

const UnstakeInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 12px;
  background: white;
  margin-bottom: 24px;
  gap: 16px;
  transition: all 0.2s ease;

  &:focus-within {
    border-color: #0066cc;
    box-shadow: 0 0 0 2px rgba(0,102,204,0.1);
  }

  input:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

const TokenInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-right: 16px;
  border-right: 1px solid #eee;
  min-width: fit-content;
`;

const TokenIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const TokenDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const TokenSymbol = styled.span`
  font-weight: 600;
  color: #333;
`;

const TokenBalance = styled.span`
  font-size: 12px;
  color: #666;
`;

const UnstakeInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 18px;
  text-align: right;
  color: #333;
  background: transparent;
  min-width: 0;
  padding: 0 8px;
  margin-left: 8px;
  cursor: text;
  
  &::placeholder {
    color: #999;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
    background: transparent;
  }
  
  &:enabled {
    cursor: text;
    opacity: 1;
  }
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 12px;
  margin-bottom: 16px;
`;

const InfoLabel = styled.span`
  font-weight: 500;
  color: #333;
`;

const InfoValue = styled.span`
  font-weight: 600;
  color: #0066cc;
  background: rgba(0,102,204,0.1);
  padding: 4px 12px;
  border-radius: 999px;
`;

const UnstakeButton = styled.button<{ disabled?: boolean }>`
  width: 100%;
  height: 48px;
  background: #000;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.disabled ? '#000' : '#333'};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  padding: 12px;
  background: #ffebee;
  color: #c62828;
  border-radius: 8px;
  margin-bottom: 16px;
  font-size: 14px;
`;

export default function Unstake() {
  const [amount, setAmount] = useState("");
  const [error, setError] = useState<StakeError | null>(null);
  const [isUnstaking, setIsUnstaking] = useState(false);
  const [accountAddress, setAccountAddress] = useState<string | null>(null);
  const [stakedBalance, setStakedBalance] = useState("0");
  const [unlockTime, setUnlockTime] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isOptingIn, setIsOptingIn] = useState(false);
  const [hasOptedIn, setHasOptedIn] = useState(false);

  const optInToApp = async () => {
    if (!accountAddress) return;
    
      try {
      setIsOptingIn(true);
      setError(null);

      // First check if already opted in
      const accountInfo = await algod.accountInformation(accountAddress).do();
      const alreadyOptedIn = Boolean(findAppLocalState(accountInfo, appState.app_id));

      if (alreadyOptedIn) {
        setHasOptedIn(true);
        setError(null);
        return;
      }

      // Get suggested params for the transaction
      const params = await algod.getTransactionParams().do();
      
      // Create opt-in transaction
      const optInTxn = algosdk.makeApplicationOptInTxnFromObject({
        sender: accountAddress,
        suggestedParams: params,
        appIndex: appState.app_id,
        foreignAssets: [appState.asset_id],
        note: new Uint8Array(Buffer.from("opt-in to staking"))
      });

      // Get the transaction signed
      const txnToSign = [{
        txn: optInTxn,
        signers: [accountAddress]
      }];

      // Sign and send the transaction
      const signedTxn = await peraWallet.signTransaction([txnToSign]);
      const response = await algod.sendRawTransaction(signedTxn).do();
      
  await algosdk.waitForConfirmation(algod, response.txid, 4);
      
      setHasOptedIn(true);
      setError(null);
    } catch (err: any) {
  // opt-in error handled below
      // Some nodes return a 400 saying "already opted in" from the pool; treat that as success
      const msg = err?.message || (err?.response && err.response.text) || '';
      if (typeof msg === 'string' && msg.toLowerCase().includes('already opted in')) {
  // node reported already opted in; mark success
        setHasOptedIn(true);
        setError(null);
        return;
      }
      if (err?.data?.type === 'CONNECT_MODAL_CLOSED') {
        setError({
          type: "user_rejected",
          message: "Opt-in was rejected by user"
        });
      } else {
        setError({
          type: "transaction_failed",
          message: err?.message || "Failed to opt in to the application"
        });
      }
    } finally {
      setIsOptingIn(false);
    }
  };

  const connectWallet = async () => {
    try {
      setIsConnecting(true);
      const accounts = await peraWallet.connect();
      if (accounts.length > 0) {
        setAccountAddress(accounts[0]);
      }
    } catch (error: any) {
      // connection error: surface to UI
      setError({
        type: "transaction_failed",
        message: "Failed to connect wallet. Please try again."
      });
    } finally {
      setIsConnecting(false);
    }
  };

  useEffect(() => {
    // Reconnect to session if it exists
    peraWallet.reconnectSession().then(async (accounts) => {
      if (accounts.length) {
        setAccountAddress(accounts[0]);
        // Force an immediate fetch of staking info
        try {
          const accountInfo = await algod.accountInformation(accounts[0]).do();
          const appLocalState = findAppLocalState(accountInfo, appState.app_id);
          if (appLocalState) {
            // support both camelCase and dashed keys from algod responses
            const keyValuePairs = appLocalState.keyValue ?? (appLocalState as any)['key-value'] ?? [];
            for (const pair of keyValuePairs) {
                const key = decodeState(pair.key).trim();
                if (key === 'S') {
                  let rawAmount = 0;
                  if (pair.value && typeof pair.value.uint !== 'undefined') {
                    rawAmount = Number(pair.value.uint);
                  } else if (pair.value && pair.value.bytes) {
                    // pair.value.bytes can be a base64 string or a Uint8Array depending on SDK version/response shape
                    let buf: Buffer;
                    if (typeof pair.value.bytes === 'string') {
                      buf = Buffer.from(pair.value.bytes, 'base64');
                    } else if (pair.value.bytes instanceof Uint8Array) {
                      buf = Buffer.from(pair.value.bytes);
                    } else {
                      // fallback: coerce to Buffer
                      buf = Buffer.from(String(pair.value.bytes || ''), 'base64');
                    }
                    let n = 0n;
                    for (const b of buf) {
                      n = (n << 8n) + BigInt(b);
                    }
                    rawAmount = Number(n);
                  }
                  const stakedAmount = (rawAmount / 1e6).toFixed(6);
                  setStakedBalance(stakedAmount);
                  break;
                }
              }
          }
        } catch (err) {
          // initial staking info fetch failed; surface via UI state
        }
      }
    });

    // Handle disconnect event
    peraWallet.connector?.on("disconnect", () => {
      setAccountAddress(null);
      setStakedBalance("0");
      setUnlockTime(null);
    });

    return () => {
      // Cleanup
      if (peraWallet.connector) {
        peraWallet.connector.off("connect");
        peraWallet.connector.off("disconnect");
      }
    };
  }, []);

  // Fetch staking info when account is connected (run once on account change)
  useEffect(() => {
    const fetchStakingInfo = async () => {
      if (!accountAddress) {
        setStakedBalance("0");
        setUnlockTime(null);
        return;
      }

      try {
        // First get the account information to check if they've opted in
        const accountInfo = await algod.accountInformation(accountAddress).do();

        // Find the app local state regardless of response shape
        const appLocalState = findAppLocalState(accountInfo, appState.app_id);

        const hasOptedIn = Boolean(appLocalState);
        setHasOptedIn(hasOptedIn);

        if (!hasOptedIn) {
          setError({
            type: "transaction_failed",
            message: "Please opt into the application first"
          });
          setStakedBalance("0");
          setUnlockTime(null);
          return;
        }

        const localState = appLocalState;
        if (!localState) return;

        const keyValuePairs = localState.keyValue ?? (localState as any)['key-value'] ?? [];
        let stakedAmount = "0";
        let startTime = 0;
        let stakePeriod = 0;

        for (const pair of keyValuePairs) {
          try {
            const key = decodeState(pair.key).trim();
            if (key === 'S') {
              let rawAmount = 0;
              if (pair.value && typeof pair.value.uint !== 'undefined') {
                rawAmount = Number(pair.value.uint);
              } else if (pair.value && pair.value.bytes) {
                let buf: Buffer;
                if (typeof pair.value.bytes === 'string') {
                  buf = Buffer.from(pair.value.bytes, 'base64');
                } else if (pair.value.bytes instanceof Uint8Array) {
                  buf = Buffer.from(pair.value.bytes);
                } else {
                  buf = Buffer.from(String(pair.value.bytes || ''), 'base64');
                }
                let n = 0n;
                for (const b of buf) {
                  n = (n << 8n) + BigInt(b);
                }
                rawAmount = Number(n);
              }
              stakedAmount = (rawAmount / 1e6).toFixed(6);
            } else if (key === 'ST') {
              startTime = Number(pair.value.uint);
            } else if (key === 'SP') {
              stakePeriod = Number(pair.value.uint);
            }
          } catch (err) {
            // ignore pair parse error
          }
        }

        setStakedBalance(stakedAmount);

        if (startTime && stakePeriod) {
          const unlockTimestamp = startTime + stakePeriod;
          const now = Math.floor(Date.now() / 1000);
          if (now >= unlockTimestamp) {
            setUnlockTime('Unlocked');
          } else {
            const remaining = unlockTimestamp - now;
            const days = Math.floor(remaining / (24 * 60 * 60));
            const hours = Math.floor((remaining % (24 * 60 * 60)) / (60 * 60));
            setUnlockTime(`${days}d ${hours}h remaining`);
          }
        } else {
          setUnlockTime(null);
        }
      } catch (err) {
        // fetch failed: set safe defaults
        setStakedBalance("0");
        setUnlockTime(null);
      }
    };

    fetchStakingInfo();
    // No polling: run once when accountAddress changes
    return () => {};
  }, [accountAddress]);

  const handleUnstake = async () => {
    if (!amount) {
      setError({
        type: "transaction_failed",
        message: "Please enter an amount to unstake"
      });
      return;
    }

    if (!accountAddress) {
      setError({
        type: "transaction_failed",
        message: "Please connect your wallet to unstake"
      });
      return;
    }

    if (Number(amount) > Number(stakedBalance)) {
      setError({
        type: "transaction_failed",
        message: "Cannot unstake more than your staked balance"
      });
      return;
    }

    // Check if stake is unlocked
    if (unlockTime && unlockTime !== 'Unlocked') {
      setError({
        type: "transaction_failed",
        message: "Stake is still locked. " + unlockTime
      });
      return;
    }

    try {
      setIsUnstaking(true);
      setError(null);

  // Convert amount to microalgos with proper decimal handling
  const withdrawAmount = BigInt(Math.round(Number(amount) * 1e6));

      // Get suggested params for transactions
      const params = await algod.getTransactionParams().do();
      
      // Create withdraw transaction
      const withdrawTxn = algosdk.makeApplicationCallTxnFromObject({
        sender: accountAddress,
        appIndex: appState.app_id,
        onComplete: algosdk.OnApplicationComplete.NoOpOC,
        appArgs: [
          new Uint8Array(Buffer.from("withdraw")),
          algosdk.encodeUint64(withdrawAmount)
        ],
        foreignAssets: [appState.asset_id], // Include reward asset
        suggestedParams: params
      });

      // Sign and send transaction
      const txnToSign = [{
        txn: withdrawTxn,
        signers: [accountAddress]
      }];

      const signedTxn = await peraWallet.signTransaction([txnToSign]);
      const response = await algod.sendRawTransaction(signedTxn).do();
      await algosdk.waitForConfirmation(algod, response.txid, 4);

      // Clear the input
      setAmount("");
      setError(null);

    } catch (err: any) {
      if (err?.data?.type === 'CONNECT_MODAL_CLOSED') {
        setError({
          type: "user_rejected",
          message: "Transaction was rejected by user"
        });
      } else {
        setError({
          type: "transaction_failed",
          message: err?.message || "Failed to unstake ALGO"
        });
      }
    } finally {
      setIsUnstaking(false);
    }
  };

  return (
    <Container>
      <MainContent>
        <Title>Unstake ALGO</Title>
        <Card>
          <UnstakeInputContainer>
            <TokenInfo>
              <TokenIcon src="/algo-logo.svg" alt="ALGO" />
              <TokenDetails>
                <TokenSymbol>ALGO</TokenSymbol>
                <TokenBalance>
                {accountAddress 
                  ? `Staked: ${stakedBalance} ALGO`
                  : "Connect wallet to see balance"}
              </TokenBalance>
              </TokenDetails>
            </TokenInfo>
            <UnstakeInput
              type="text"
              inputMode="decimal"
              placeholder={accountAddress ? "0.0" : "Connect wallet first"}
              value={amount}
              disabled={isUnstaking}
              onChange={(e) => {
                const value = e.target.value;
                if (value === "" || /^\d*\.?\d*$/.test(value)) {
                  if (Number(value) <= Number(stakedBalance)) {
                    setAmount(value);
                    setError(null);
                  } else {
                    setError({
                      type: "transaction_failed",
                      message: "Cannot unstake more than your staked balance"
                    });
                  }
                }
              }}
              onKeyDown={(e) => {
                if (e.key === 'e' || e.key === '-' || e.key === '+') {
                  e.preventDefault();
                }
              }}
            />
          </UnstakeInputContainer>

          {unlockTime && (
            <InfoBox>
              <InfoLabel>Unlock Status</InfoLabel>
              <InfoValue>{unlockTime}</InfoValue>
            </InfoBox>
          )}

          <InfoBox>
            <InfoLabel>Staked Balance</InfoLabel>
            <InfoValue>{stakedBalance} ALGO</InfoValue>
          </InfoBox>

          {/* Debug button removed */}

          {error && (
            <ErrorMessage>{error.message}</ErrorMessage>
          )}

          {!accountAddress ? (
            <UnstakeButton
              onClick={connectWallet}
              disabled={isConnecting}
            >
              {isConnecting ? "Connecting..." : "Connect Wallet to Unstake"}
            </UnstakeButton>
          ) : !hasOptedIn ? (
            <UnstakeButton
              onClick={optInToApp}
              disabled={isOptingIn}
            >
              {isOptingIn ? "Opting in..." : "Opt in to Staking"}
            </UnstakeButton>
          ) : (
            <UnstakeButton 
              disabled={isUnstaking || !Number(amount)}
              onClick={handleUnstake}
            >
              {isUnstaking ? "Unstaking..." : "Unstake ALGO"}
            </UnstakeButton>
          )}
        </Card>
      </MainContent>
    </Container>
  );
}
