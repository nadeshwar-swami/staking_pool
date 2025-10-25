import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PeraWalletConnect } from '@perawallet/connect';
import algosdk from 'algosdk';
import { AppState, StakeError } from '../types';

// App state with the contract IDs
const appState: AppState = {
  app_id: 748346211,
  asset_id: 748346215
};

// Initialize Pera Wallet instance
const peraWallet = new PeraWalletConnect({
  shouldShowSignTxnToast: false,
  chainId: 416002 // TestNet chain ID
});

// Algod client for TestNet
const algod = new algosdk.Algodv2('', 'https://testnet-api.algonode.cloud', '');

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

  const connectWallet = async () => {
    try {
      setIsConnecting(true);
      const accounts = await peraWallet.connect();
      if (accounts.length > 0) {
        setAccountAddress(accounts[0]);
      }
    } catch (error: any) {
      console.error("Connection error:", error);
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
          const appLocalState = accountInfo.appsLocalState?.find(
            (app: any) => app.id === appState.app_id
          );
          if (appLocalState?.keyValue) {
            const keyValuePairs = appLocalState.keyValue;
            for (const pair of keyValuePairs) {
              const key = new TextDecoder().decode(pair.key);
              if (key === 'S') {
                const stakedAmount = (Number(pair.value.uint) / 1e6).toFixed(4);
                setStakedBalance(stakedAmount);
                console.log('Initial staked balance:', stakedAmount);
                break;
              }
            }
          }
        } catch (err) {
          console.error('Error fetching initial staking info:', err);
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

  // Fetch staking info when account is connected
  useEffect(() => {
    const fetchStakingInfo = async () => {
      if (accountAddress) {
        try {
          // Get user's local state for the app
          const accountInfo = await algod.accountInformation(accountAddress).do();
          const appLocalState = accountInfo.appsLocalState?.find(
            (app: any) => app.id === appState.app_id
          );

          if (appLocalState?.keyValue) {
            const keyValuePairs = appLocalState.keyValue;
            let stakedAmount = "0";
            let startTime = 0;
            let stakePeriod = 0;

            for (const pair of keyValuePairs) {
              const key = new TextDecoder().decode(pair.key);
              if (key === 'S') { // Staked amount
                stakedAmount = (Number(pair.value.uint) / 1e6).toFixed(4);
                console.log('Found staked amount:', stakedAmount);
              } else if (key === 'ST') { // Stake start time
                startTime = Number(pair.value.uint);
                console.log('Found start time:', startTime);
              } else if (key === 'SP') { // Stake period
                stakePeriod = Number(pair.value.uint);
                console.log('Found stake period:', stakePeriod);
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
          }
        } catch (err) {
          console.error("Error fetching staking info:", err);
          setStakedBalance("0");
          setUnlockTime(null);
        }
      }
    };

    fetchStakingInfo();
    const interval = setInterval(fetchStakingInfo, 10000); // Refresh every 10 seconds
    
    return () => clearInterval(interval);
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

    try {
      setIsUnstaking(true);
      setError(null);

      // Get suggested params for transactions
      const params = await algod.getTransactionParams().do();
      
      // Create withdraw transaction
      const withdrawTxn = algosdk.makeApplicationCallTxnFromObject({
        sender: accountAddress,
        appIndex: appState.app_id,
        onComplete: algosdk.OnApplicationComplete.NoOpOC,
        appArgs: [
          new Uint8Array(Buffer.from("withdraw")),
          new Uint8Array(new BigUint64Array([BigInt(Math.floor(Number(amount) * 1e6))]).buffer)
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
      console.error("Unstaking error:", err);
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
