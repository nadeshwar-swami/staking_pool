import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { PeraWalletConnect } from '@perawallet/connect';
import algosdk from 'algosdk';
import { AppState, StakeError } from '../types';

const appState: AppState = {
  app_id: 748346211,
  asset_id: 748346215
};

const peraWallet = new PeraWalletConnect();

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
`;

const Card = styled.div`
  background-color: white;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  padding: 24px;
  height: fit-content;
`;

const StakeItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  border: 1px solid #eee;
  border-radius: 12px;
`;

const StakeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StakeInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StakeAmount = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const StakeDate = styled.div`
  font-size: 14px;
  color: #666;
`;

const RewardInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #0066cc;
  background-color: rgba(0, 102, 204, 0.1);
  padding: 4px 12px;
  border-radius: 9999px;
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

interface StakePosition {
  amount: string;
  startDate: number;
  endDate: number;
  reward: string;
  isClaimable: boolean;
  period: number;
}

const Claim: React.FC = () => {
  const [accountAddress, setAccountAddress] = useState<string | null>(null);
  const [stakePositions, setStakePositions] = useState<StakePosition[]>([]);
  const [isClaiming, setIsClaiming] = useState(false);
  const [error, setError] = useState<StakeError | null>(null);

  const fetchStakePositions = async (address: string) => {
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
        if (keyValueMap["S"] && keyValueMap["ST"] && keyValueMap["SP"]) {
          const stakeAmount = keyValueMap["S"] / 1e6; // Convert from microALGO to ALGO
          const startTime = keyValueMap["ST"]; // Unix timestamp
          const period = keyValueMap["SP"]; // Period in seconds
          const endTime = startTime + period;
          const now = Math.floor(Date.now() / 1000);
          const isClaimable = now >= endTime;

          // Calculate expected rewards based on APR
          const apr = period === 30 * 24 * 60 * 60 ? 0.05 : // 5% for 30 days
                     period === 60 * 24 * 60 * 60 ? 0.07 : // 7% for 60 days
                     0.10; // 10% for 90 days
          const reward = (stakeAmount * apr * (period / (365 * 24 * 60 * 60))).toFixed(2);

          const position: StakePosition = {
            amount: stakeAmount.toFixed(2),
            startDate: startTime,
            endDate: endTime,
            reward: reward,
            isClaimable,
            period
          };

          setStakePositions([position]);
        } else {
          setStakePositions([]);
        }
      }
    } catch (error) {
      console.error('Error fetching stake positions:', error);
      setError({ type: 'fetch_error', message: 'Failed to fetch stake positions' });
    }
  };

  const handleClaim = async (position: StakePosition) => {
    if (!accountAddress) {
      setError({ type: 'user_rejected', message: 'Please connect your wallet first' });
      return;
    }

    setIsClaiming(true);
    setError(null);
    
    try {
      const algodClient = new algosdk.Algodv2('', 'https://testnet-api.algonode.cloud', '');
      const suggestedParams = await algodClient.getTransactionParams().do();

      // Create app call transaction for claim
      const claim = new Uint8Array(Buffer.from('claim'));
      const appCallTxn = algosdk.makeApplicationNoOpTxnFromObject({
        sender: accountAddress,
        appIndex: appState.app_id,
        appArgs: [claim],
        suggestedParams
      });

      const txnToSign = [{txn: appCallTxn}];
      const signedTxn = await peraWallet.signTransaction([txnToSign]);
      const txnResponse = await algodClient.sendRawTransaction(signedTxn).do();
      await algosdk.waitForConfirmation(algodClient, txnResponse.txid, 4);

      // Refresh stake positions
      await fetchStakePositions(accountAddress);
      setError(null);
    } catch (error: any) {
      console.error('Claim error:', error);
      if (error?.data?.type === 'CONNECT_MODAL_CLOSED') {
        setError({ type: 'user_rejected', message: 'Transaction was rejected by user' });
      } else {
        setError({ type: 'transaction_failed', message: 'Failed to claim rewards. Please try again.' });
      }
    } finally {
      setIsClaiming(false);
    }
  };

  // Fetch stake positions when account changes
  useEffect(() => {
    if (accountAddress) {
      fetchStakePositions(accountAddress);
    }
  }, [accountAddress]);

  // Format Unix timestamp to readable string
  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <MainContent>
      <ContentWrapper>
        <Title>Claim Rewards</Title>
        <Description>
          View your staking positions and claim rewards when they become available.
        </Description>

        <Card>
          {stakePositions.length === 0 ? (
            <div style={{ textAlign: 'center', color: '#666' }}>
              No staking positions found. Start staking to earn rewards.
            </div>
          ) : (
            stakePositions.map((position, index) => (
              <StakeItem key={index}>
                <StakeHeader>
                  <StakeInfo>
                    <StakeAmount>{position.amount} ALGO</StakeAmount>
                    <StakeDate>
                      {formatDate(position.startDate)} - {formatDate(position.endDate)}
                    </StakeDate>
                  </StakeInfo>
                  <RewardInfo>
                    <span>+{position.reward} ALGO</span>
                  </RewardInfo>
                </StakeHeader>
                
                <ActionButton 
                  onClick={() => handleClaim(position)}
                  disabled={!position.isClaimable || isClaiming}
                >
                  {isClaiming ? "Claiming..." : 
                   position.isClaimable ? "Claim Rewards" : "Not Yet Claimable"}
                </ActionButton>
              </StakeItem>
            ))
          )}

          {error && (
            <div style={{ 
              padding: '12px', 
              backgroundColor: '#ffebee', 
              color: '#c62828', 
              borderRadius: '8px'
            }}>
              {error.message}
            </div>
          )}
        </Card>
      </ContentWrapper>
    </MainContent>
  );
};

export default Claim;