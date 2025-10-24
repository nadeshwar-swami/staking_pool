import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PeraWalletConnect } from '@perawallet/connect';
import algosdk from 'algosdk';
import { AppState, StakeError } from '../types';

// Read from app_state.json
const appState: AppState = {
  app_id: 748346211,
  asset_id: 748346215
};

// Initialize the PeraWallet connector
const peraWallet = new PeraWalletConnect();

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f5f5;
  color: #000;
`;

const MainContent = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 40px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 0 8px;
  max-width: 576px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 4px;
  text-align: center;
`;

const Description = styled.div`
  line-height: 24px;
  margin-bottom: 20px;
  text-align: center;
  
  a {
    text-decoration: none;
    color: #0066cc;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Card = styled.div`
  background-color: white;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  padding: 12px 24px;
  height: fit-content;
`;

const TabContainer = styled.div`
  display: flex;
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 2px;
  height: 36px;
  position: relative;
`;

const Tab = styled.button<{ active?: boolean }>`
  background-color: transparent;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
  white-space: nowrap;
  padding: 0 12px;
  flex: 1;
  z-index: 10;
  border: none;
  cursor: pointer;
  color: ${props => props.active ? '#000' : '#666'};
`;

const TabSlider = styled.div<{ position: number }>`
  position: absolute;
  top: 2px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  z-index: 1;
  transition: left 250ms ease-in-out, width 250ms ease-in-out;
  height: calc(100% - 4px);
  left: ${props => 2 + props.position * 50}%;
  width: calc(50% - 4px);
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 8px 16px;
  height: 48px;
  width: 100%;
  background-color: white;
  
  &:focus-within {
    border-color: #0066cc;
  }
`;

const Select = styled.select`
  padding: 12px 16px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 12px;
  width: 100%;
  height: 48px;
  background-color: white;
  cursor: pointer;
  outline: none;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
  background-repeat: no-repeat;
  background-position: right 16px top 50%;
  background-size: 12px auto;
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const TokenButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

const TokenIcon = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

const TokenInput = styled.input`
  text-align: right;
  flex: 1;
  min-width: 0;
  border: none;
  outline: none;
  font-size: 18px;
  background: none;
  padding: 0;
  margin: 0;
  
  &::placeholder {
    color: #999;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  /* Remove spinners for number input */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type=number] {
    -moz-appearance: textfield;
  }
`;

const APRBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background-color: #f5f5f5;
  border-radius: 12px;
`;

const ActionButton = styled.button`
  width: 100%;
  height: 48px;
  font-size: 16px;
  background-color: rgb(24, 24, 24);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  opacity: ${props => props.disabled ? 0.7 : 1};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.disabled ? 'rgb(24, 24, 24)' : '#333'};
  }
`;

const StakingPeriods = [
  { value: "30", label: "30 days - 5% APR" },
  { value: "60", label: "60 days - 7% APR" },
  { value: "90", label: "90 days - 10% APR" }
];

const Stake: React.FC = () => {
  const [accountAddress, setAccountAddress] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [amount, setAmount] = useState("");
  const [accountBalance, setAccountBalance] = useState<string>("0.00");
  const [stakedAmount, setStakedAmount] = useState<string>("0.00");
  const [isStaking, setIsStaking] = useState(false);
  const [error, setError] = useState<StakeError | null>(null);
  const [selectedPeriod, setSelectedPeriod] = useState("30");
  const [timeRemaining, setTimeRemaining] = useState<string | null>(null);
  
  const getAPR = (period: string) => {
    switch (period) {
      case "30": return "5%";
      case "60": return "7%";
      case "90": return "10%";
      default: return "5%";
    }
  };

  const fetchStakedAmount = async (address: string) => {
    try {
      const algodClient = new algosdk.Algodv2('', 'https://testnet-api.algonode.cloud', '');
      const accountInfo = await algodClient.accountInformation(address).do();
      
      const localState = accountInfo.appsLocalState?.find(
        (app: any) => Number(app.id) === appState.app_id
      );

      if (localState?.keyValue) {
        const keyValueMap: { [key: string]: any } = {};
        for (const kv of localState.keyValue) {
          const key = Buffer.from(kv.key, 'base64').toString();
          keyValueMap[key] = kv.value.uint;
        }

        // S: staked amount, ST: stake start time, SP: stake period
        if (keyValueMap["S"]) {
          const stakedMicroAlgos = keyValueMap["S"];
          const stakedAlgos = (stakedMicroAlgos / 1e6).toFixed(2);
          setStakedAmount(stakedAlgos);

          if (keyValueMap["ST"] && keyValueMap["SP"]) {
            const startTime = keyValueMap["ST"];
            const period = keyValueMap["SP"];
            const endTime = startTime + period;
            const now = Math.floor(Date.now() / 1000);
            const remaining = endTime - now;

            if (remaining > 0) {
              const days = Math.floor(remaining / (24 * 60 * 60));
              const hours = Math.floor((remaining % (24 * 60 * 60)) / (60 * 60));
              setTimeRemaining(`${days}d ${hours}h remaining`);
            } else {
              setTimeRemaining('Ready to withdraw');
            }
          } else {
            setTimeRemaining(null);
          }
          return;
        }
      }
      setStakedAmount("0.00");
      setTimeRemaining(null);
    } catch (error) {
      console.error('Error fetching staked amount:', error);
      setStakedAmount("0.00");
      setTimeRemaining(null);
    }
  };

  const handleOptIn = async () => {
    if (!accountAddress) return;
    
    try {
      const algodClient = new algosdk.Algodv2('', 'https://testnet-api.algonode.cloud', '');
      const suggestedParams = await algodClient.getTransactionParams().do();

      const optInTxn = algosdk.makeApplicationOptInTxnFromObject({
        sender: accountAddress,
        appIndex: appState.app_id,
        suggestedParams
      });

      const txnToSign = [{txn: optInTxn}];
      const signedTxn = await peraWallet.signTransaction([txnToSign]);
      
      try {
        const txnResponse = await algodClient.sendRawTransaction(signedTxn).do();
        await algosdk.waitForConfirmation(algodClient, txnResponse.txid, 4);
        return true;
      } catch (sendError: any) {
        if (sendError.message?.includes('has already opted in')) {
          return true;
        }
        throw sendError;
      }
    } catch (error: any) {
      console.error('Opt-in error:', error);
      if (error?.data?.type === 'CONNECT_MODAL_CLOSED') {
        setError({ type: 'user_rejected', message: 'Opt-in was rejected by user' });
      } else if (!error.message?.includes('has already opted in')) {
        setError({ type: 'transaction_failed', message: 'Failed to opt in to staking application' });
      }
      return error.message?.includes('has already opted in');
    }
  };

  const checkOptedIn = async (address: string): Promise<boolean> => {
    try {
      const algodClient = new algosdk.Algodv2('', 'https://testnet-api.algonode.cloud', '');
      const accountInfo = await algodClient.accountInformation(address).do();
      const apps = accountInfo.appsLocalState || [];
      return apps.some((app: any) => app.id === appState.app_id);
    } catch (error) {
      console.error('Error checking opt-in status:', error);
      return false;
    }
  };

  const handleStakeNow = async () => {
    if (!accountAddress) {
      setError({ type: 'user_rejected', message: 'Please connect your wallet first' });
      return;
    }
    
    if (!amount || parseFloat(amount) <= 0) {
      setError({ type: 'user_rejected', message: 'Please enter a valid amount to stake' });
      return;
    }
    
    setIsStaking(true);
    setError(null);
    
    try {
      const algodClient = new algosdk.Algodv2('', 'https://testnet-api.algonode.cloud', '');
      
      const isOptedIn = await checkOptedIn(accountAddress);
      if (!isOptedIn) {
        const optInSuccess = await handleOptIn();
        if (!optInSuccess) {
          setIsStaking(false);
          return;
        }
      }

      const suggestedParams = await algodClient.getTransactionParams().do();
      const amountInMicroAlgos = Math.floor(parseFloat(amount) * 1e6);

      const accountInfo = await algodClient.accountInformation(accountAddress).do();
      if (accountInfo.amount < amountInMicroAlgos + 1000) {
        throw { type: 'insufficient_balance', message: 'Insufficient balance for stake and fees' };
      }

      // Create payment transaction
      const appAddress = algosdk.getApplicationAddress(appState.app_id);
      const payTxn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
        sender: accountAddress,
        receiver: appAddress,
        amount: amountInMicroAlgos,
        suggestedParams
      });

      // Convert selected period to seconds and create app args
      const stake = new Uint8Array(Buffer.from('stake'));
      const periodInSeconds = parseInt(selectedPeriod) * 24 * 60 * 60; // Convert days to seconds
      const period = new Uint8Array(new BigUint64Array([BigInt(periodInSeconds)]).buffer);
      const appCallTxn = algosdk.makeApplicationNoOpTxnFromObject({
        sender: accountAddress,
        appIndex: appState.app_id,
        appArgs: [stake, period],
        suggestedParams
      });

      // Group transactions
      const txnGroup = [payTxn, appCallTxn];
      algosdk.assignGroupID(txnGroup);

      try {
        const txnsToSign = [{ txn: payTxn }, { txn: appCallTxn }];
        const signedTxns = await peraWallet.signTransaction([txnsToSign]);

        const txnResponse = await algodClient.sendRawTransaction(signedTxns).do();
        await algosdk.waitForConfirmation(algodClient, txnResponse.txid, 4);

        await Promise.all([
          (async () => {
            const newAccountInfo = await algodClient.accountInformation(accountAddress).do();
            const newBalance = (Number(newAccountInfo.amount) / 1e6).toFixed(2);
            setAccountBalance(newBalance);
          })(),
          fetchStakedAmount(accountAddress)
        ]);
        setAmount("");
      } catch (signError: any) {
        if (signError?.data?.type === 'CONNECT_MODAL_CLOSED') {
          throw { type: 'user_rejected', message: 'Transaction was rejected by user' };
        }
        throw signError;
      }
    } catch (error: any) {
      console.error('Staking error:', error);
      setError({
        type: error.type || 'transaction_failed',
        message: error.message || 'Failed to stake ALGO. Please try again.'
      });
    } finally {
      setIsStaking(false);
    }
  };

  const handleUnstake = async () => {
    if (!accountAddress) {
      setError({ type: 'user_rejected', message: 'Please connect your wallet first' });
      return;
    }
    
    if (!amount || parseFloat(amount) <= 0) {
      setError({ type: 'user_rejected', message: 'Please enter a valid amount to unstake' });
      return;
    }

    if (parseFloat(amount) > parseFloat(stakedAmount)) {
      setError({ type: 'user_rejected', message: 'Cannot unstake more than your staked amount' });
      return;
    }
    
    setIsStaking(true);
    setError(null);
    
    try {
      const algodClient = new algosdk.Algodv2('', 'https://testnet-api.algonode.cloud', '');
      const suggestedParams = await algodClient.getTransactionParams().do();
      const amountInMicroAlgos = Math.floor(parseFloat(amount) * 1e6);

      const withdrawTxn = algosdk.makeApplicationNoOpTxnFromObject({
        sender: accountAddress,
        appIndex: appState.app_id,
        appArgs: [
          new Uint8Array(Buffer.from('withdraw')),
          algosdk.encodeUint64(amountInMicroAlgos)
        ],
        suggestedParams
      });

      const txnToSign = [{txn: withdrawTxn}];
      const signedTxn = await peraWallet.signTransaction([txnToSign]);
      const txnResponse = await algodClient.sendRawTransaction(signedTxn).do();
      await algosdk.waitForConfirmation(algodClient, txnResponse.txid, 4);

      await Promise.all([
        (async () => {
          const newAccountInfo = await algodClient.accountInformation(accountAddress).do();
          const newBalance = (Number(newAccountInfo.amount) / 1e6).toFixed(2);
          setAccountBalance(newBalance);
        })(),
        fetchStakedAmount(accountAddress)
      ]);
      
      setAmount("");
      setError(null);
    } catch (error: any) {
      console.error('Unstaking error:', error);
      if (error?.data?.type === 'CONNECT_MODAL_CLOSED') {
        setError({ type: 'user_rejected', message: 'Transaction was rejected by user' });
      } else {
        setError({ type: 'transaction_failed', message: 'Failed to unstake ALGO. Please try again.' });
      }
    } finally {
      setIsStaking(false);
    }
  };

  const fetchBalance = async () => {
    if (accountAddress) {
      try {
        const algodClient = new algosdk.Algodv2('', 'https://testnet-api.algonode.cloud', '');
        const accountInfo = await algodClient.accountInformation(accountAddress).do();
        const algoBalance = (Number(accountInfo.amount) / 1e6).toFixed(2);
        setAccountBalance(algoBalance);
      } catch (error) {
        console.error('Error fetching balance:', error);
        setAccountBalance("0.00");
      }
    }
  };

  // Fetch balance and staked amount when account changes
  useEffect(() => {
    if (accountAddress) {
      fetchBalance();
      fetchStakedAmount(accountAddress);
      
      // Set up periodic refresh
      const intervalId = setInterval(() => {
        fetchBalance();
        fetchStakedAmount(accountAddress);
      }, 10000); // Refresh every 10 seconds

      return () => clearInterval(intervalId);
    } else {
      setAccountBalance("0.00");
      setStakedAmount("0.00");
      setTimeRemaining(null);
    }
  }, [accountAddress]);

  // Fetch staked amount when tab changes
  useEffect(() => {
    if (accountAddress) {
      if (activeTab === 0) {
        fetchBalance();
      } else {
        fetchStakedAmount(accountAddress);
      }
    }
  }, [activeTab, accountAddress]);

  return (
    <MainContent>
      <ContentWrapper>
        <Title>Stake ALGO</Title>
        <Description>
          Stake ALGO and receive rewards while staking.{' '}
          <a href="#" target="_blank" rel="noopener noreferrer">How it works ↗</a>
        </Description>

        <Card>
          <TabContainer>
            <Tab active={activeTab === 0} onClick={() => setActiveTab(0)}>Stake ALGO</Tab>
            <Tab active={activeTab === 1} onClick={() => setActiveTab(1)}>Unstake</Tab>
            <TabSlider position={activeTab} />
          </TabContainer>

          <InputSection>
            <InputContainer>
              <TokenButton>
                <TokenIcon src="/algo-logo.svg" alt="ALGO" />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <span>ALGO</span>
                  {accountAddress && (
                    <span style={{ fontSize: '12px', color: '#666' }}>
                      {activeTab === 0 
                      ? `Balance: ${accountBalance}`
                      : `Staked: ${stakedAmount}${timeRemaining ? ` (${timeRemaining})` : ''}`
                    } ALGO
                    </span>
                  )}
                </div>
              </TokenButton>
              <TokenInput
                type="text"
                inputMode="decimal"
                placeholder="0.0"
                value={amount}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === "" || /^\d*\.?\d*$/.test(value)) {
                    setAmount(value);
                    setError(null);
                  }
                }}
                disabled={!accountAddress || isStaking}
              />
            </InputContainer>

            {activeTab === 0 && (
              <div style={{ marginTop: '12px' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '6px',
                  fontSize: '14px',
                  color: '#666'
                }}>
                  Select Staking Period
                </label>
                <Select
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  disabled={!accountAddress || isStaking}
                >
                  {StakingPeriods.map((period) => (
                    <option key={period.value} value={period.value}>
                      {period.label}
                    </option>
                  ))}
                </Select>
              </div>
            )}
          </InputSection>          <APRBox>
            <span style={{ fontWeight: 600 }}>Expected APR</span>
            <span style={{ 
              fontWeight: 600,
              color: '#0066cc',
              backgroundColor: 'rgba(0, 102, 204, 0.1)',
              padding: '2px 8px',
              borderRadius: '9999px'
            }}>
              {activeTab === 0 ? getAPR(selectedPeriod) : "Staked"}
            </span>
          </APRBox>

          {error && (
            <div style={{ 
              padding: '12px', 
              backgroundColor: '#ffebee', 
              color: '#c62828', 
              borderRadius: '8px',
              marginBottom: '12px'
            }}>
              {error.message}
            </div>
          )}

          <ActionButton 
            onClick={activeTab === 0 ? handleStakeNow : handleUnstake}
            disabled={isStaking || !accountAddress}
          >
            {isStaking ? (activeTab === 0 ? "Staking..." : "Unstaking...") : 
             (activeTab === 0 ? "Stake Now" : "Unstake Now")}
          </ActionButton>
        </Card>
      </ContentWrapper>
    </MainContent>
  );
};

export default Stake;