"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, AlertCircle, Loader2 } from 'lucide-react'
import { useWallet } from "@/components/wallet-context"
import * as algosdk from "algosdk"
import appState from "../../app_state.json"

const ALGOD_SERVER = "https://testnet-api.algonode.cloud"
const ALGOD_TOKEN = ""

interface StakingPosition {
  assetId: number
  stakedAmount: number
  lockPeriod: number
  startTime: number
  estimatedReward: number
  isReady: boolean
  daysLeft: number
}

export function UserStakingPositions() {
  const [positions, setPositions] = useState<StakingPosition[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { isConnected, walletAddress } = useWallet()
  const algodClient = new (algosdk as any).Algodv2(ALGOD_TOKEN, ALGOD_SERVER, "")

  useEffect(() => {
    if (isConnected && walletAddress) {
      fetchPositions()
    } else {
      setPositions([])
    }
  }, [isConnected, walletAddress])

  const fetchPositions = async () => {
    if (!walletAddress) return
    
    setLoading(true)
    setError(null)
    
    try {
      const appId = (appState as any).app_id
      
      console.log('=== Starting fetchPositions ===')
      console.log('Wallet:', walletAddress)
      console.log('App ID:', appId)
      
      // Step 1: Get all NFTs the user owns
      const accountInfo: any = await algodClient.accountInformation(walletAddress).do()
      const assets = accountInfo.assets || []
      const ownedAssetIds = assets.map((a: any) => a['asset-id'])
      console.log('Owned NFT Asset IDs:', ownedAssetIds)
      
      // Step 2: Get app global state to check for staking metadata
      const appInfo: any = await algodClient.getApplicationByID(appId).do()
      const globalState = appInfo.params['global-state'] || []
      console.log('Global state entries:', globalState.length)
      
      // Step 3: Build metadata map from global state
      const nftMetadata: Record<number, any> = {}
      
      for (const kv of globalState) {
        const keyBuffer = Buffer.from(kv.key, 'base64')
        const key = keyBuffer.toString('utf8')
        
        // Extract asset ID from binary-encoded keys
        let assetIdBytes: Buffer | null = null
        let prefix = ''
        
        if (key.startsWith('NFT_S_')) {
          assetIdBytes = keyBuffer.slice(6) // Skip 6-byte "NFT_S_" prefix
          prefix = 'NFT_S_'
        } else if (key.startsWith('NFT_P_')) {
          assetIdBytes = keyBuffer.slice(6) // Skip 6-byte "NFT_P_" prefix
          prefix = 'NFT_P_'
        } else if (key.startsWith('NFT_ST_')) {
          assetIdBytes = keyBuffer.slice(7) // Skip 7-byte "NFT_ST_" prefix
          prefix = 'NFT_ST_'
        } else if (key.startsWith('NFT_R_')) {
          assetIdBytes = keyBuffer.slice(6) // Skip 6-byte "NFT_R_" prefix
          prefix = 'NFT_R_'
        }
        
        if (assetIdBytes && assetIdBytes.length === 8) {
          // Convert 8-byte big-endian to asset ID
          const assetId = Number(BigInt('0x' + assetIdBytes.toString('hex')))
          
          if (!nftMetadata[assetId]) nftMetadata[assetId] = {}
          
          if (prefix === 'NFT_S_') {
            nftMetadata[assetId].stakedAmount = kv.value.uint
          } else if (prefix === 'NFT_P_') {
            nftMetadata[assetId].lockPeriod = kv.value.uint
          } else if (prefix === 'NFT_ST_') {
            nftMetadata[assetId].startTime = kv.value.uint
          } else if (prefix === 'NFT_R_') {
            nftMetadata[assetId].estimatedReward = kv.value.uint
          }
        }
      }
      
      const metadataAssetIds = Object.keys(nftMetadata).map(Number)
      console.log('Asset IDs with metadata:', metadataAssetIds)
      
      // Step 4: Match owned NFTs with staking metadata
      const userPositions: StakingPosition[] = []
      const now = Math.floor(Date.now() / 1000)
      
      for (const asset of assets) {
        const assetId = asset['asset-id']
        const amount = asset.amount
        
        console.log(`Checking asset ${assetId} (amount: ${amount}):`, nftMetadata[assetId])
        
        // Only include NFTs with complete staking metadata
        if (amount >= 1 && nftMetadata[assetId]) {
          const meta = nftMetadata[assetId]
          
          // Verify all required fields exist
          if (meta.stakedAmount && meta.lockPeriod && meta.startTime) {
            const endTime = meta.startTime + meta.lockPeriod
            const isReady = now >= endTime
            const secondsLeft = Math.max(0, endTime - now)
            const daysLeft = Math.ceil(secondsLeft / (24 * 60 * 60))
            
            userPositions.push({
              assetId,
              stakedAmount: meta.stakedAmount,
              lockPeriod: meta.lockPeriod,
              startTime: meta.startTime,
              estimatedReward: meta.estimatedReward || 0,
              isReady,
              daysLeft
            })
            console.log(`✓ Added position for asset ${assetId}`)
          } else {
            console.log(`✗ Skipped asset ${assetId} - incomplete metadata`)
          }
        }
      }
      
      console.log('Final positions:', userPositions)
      setPositions(userPositions)
    } catch (e: any) {
      console.error('Error fetching positions:', e)
      setError(e?.message || 'Failed to fetch staking positions')
    } finally {
      setLoading(false)
    }
  }

  const formatAlgo = (microAlgos: number) => {
    return (microAlgos / 1e6).toFixed(2)
  }

  const formatDuration = (seconds: number) => {
    const days = Math.floor(seconds / (24 * 60 * 60))
    return `${days} days`
  }

  if (!isConnected) {
    return (
      <Card className="p-6 bg-muted/30 border border-border">
        <div className="flex gap-3">
          <AlertCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            Connect your wallet to view your staking positions
          </p>
        </div>
      </Card>
    )
  }

  if (loading) {
    return (
      <Card className="p-6 bg-card/50 backdrop-blur-sm border border-primary/10">
        <div className="flex items-center justify-center gap-2 py-8">
          <Loader2 className="w-5 h-5 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">Loading positions...</p>
        </div>
      </Card>
    )
  }

  if (error) {
    return (
      <Card className="p-6 bg-red-500/5 border border-red-500/20">
        <div className="flex gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-red-600 mb-1">Error Loading Positions</p>
            <p className="text-xs text-muted-foreground">{error}</p>
            <Button size="sm" variant="outline" className="mt-3" onClick={fetchPositions}>
              Retry
            </Button>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">Your Staking Positions</h3>
        <Button size="sm" variant="ghost" onClick={fetchPositions}>
          Refresh
        </Button>
      </div>
      
      {positions.length === 0 ? (
        <Card className="p-6 bg-muted/30 border border-border">
          <div className="flex gap-3">
            <AlertCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold mb-1">No Staking Positions</p>
              <p className="text-xs text-muted-foreground">
                You don't have any active staking positions. Stake ALGO to get started.
              </p>
            </div>
          </div>
        </Card>
      ) : (
        <div className="space-y-3">
          {positions.map((position) => (
            <Card key={position.assetId} className="p-4 bg-card/50 backdrop-blur-sm border border-primary/10">
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-sm text-muted-foreground">NFT Asset ID</p>
                    <p className="font-mono font-semibold">{position.assetId}</p>
                  </div>
                  <Badge
                    variant={position.isReady ? "default" : "secondary"}
                    className={position.isReady ? "bg-green-600" : ""}
                  >
                    {position.isReady ? (
                      <CheckCircle className="w-3 h-3 mr-1" />
                    ) : (
                      <Clock className="w-3 h-3 mr-1" />
                    )}
                    {position.isReady ? "Ready to Redeem" : "Locked"}
                  </Badge>
                </div>

                <div className="space-y-1 text-sm">
                  <p>
                    <span className="text-muted-foreground">Staked:</span>{' '}
                    <span className="font-semibold">{formatAlgo(position.stakedAmount)} ALGO</span>
                  </p>
                  <p>
                    <span className="text-muted-foreground">Estimated Reward:</span>{' '}
                    <span className="font-semibold text-primary">{formatAlgo(position.estimatedReward)} ALGO</span>
                  </p>
                  <p>
                    <span className="text-muted-foreground">Lock Period:</span>{' '}
                    <span className="font-semibold">{formatDuration(position.lockPeriod)}</span>
                  </p>
                  {!position.isReady && (
                    <p>
                      <span className="text-muted-foreground">Days Left:</span>{' '}
                      <span className="font-semibold">{position.daysLeft}</span>
                    </p>
                  )}
                </div>

                {position.isReady && (
                  <Button 
                    size="sm" 
                    className="w-full bg-green-600 hover:bg-green-700 text-sm"
                    onClick={() => {
                      // Auto-fill the asset ID in the claim form
                      const assetInput = document.querySelector('input[type="number"]') as HTMLInputElement
                      if (assetInput) {
                        assetInput.value = String(position.assetId)
                        assetInput.dispatchEvent(new Event('input', { bubbles: true }))
                      }
                    }}
                  >
                    Use Asset ID to Redeem
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
