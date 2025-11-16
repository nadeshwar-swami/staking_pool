"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MarketplaceHeader } from "@/components/marketplace-header"
import { NftListing } from "@/components/nft-listing"
import * as algosdk from 'algosdk'
import appState from "../../app_state.json"
import { useWallet } from "@/components/wallet-context"

export interface NFTItem {
  id: string
  tokenId: number
  stakedAmount: string
  rewards: string
  price: string
  daysLeft: number
  apr: string
  listed: boolean
  seller: string // seller wallet address
}

const STORAGE_KEY = 'marketplace_nft_listings'
const ALGOD_SERVER = "https://testnet-api.algonode.cloud"
const ALGOD_TOKEN = ""

// Helper function to convert various types to Uint8Array
function toUint8Array(data: any): Uint8Array {
  // If it's already a Uint8Array, return it
  if (data instanceof Uint8Array) {
    return data;
  }
  // If it's a string, assume it's base64
  if (typeof data === 'string') {
    const cleaned = data.replace(/\s+/g, '');
    const binaryString = atob(cleaned);
    const arr = new Uint8Array(binaryString.length);
    for (let j = 0; j < binaryString.length; j++) {
      arr[j] = binaryString.charCodeAt(j);
    }
    return arr;
  }
  // If it's an array-like object, convert it
  if (data && typeof data === 'object' && 'length' in data) {
    return new Uint8Array(Array.from(data));
  }
  console.error('Unknown data type:', typeof data, data);
  return new Uint8Array(0);
}

// Helper function to convert Uint8Array to hex string
function uint8ArrayToHex(arr: Uint8Array): string {
  return Array.from(arr)
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
}

// Helper function to fetch NFT staking data from blockchain
async function fetchNFTStakingData(assetId: number) {
  try {
    console.log('Fetching NFT data for asset ID:', assetId)
    const algodClient = new (algosdk as any).Algodv2(ALGOD_TOKEN, ALGOD_SERVER, "")
    const appId = (appState as any).app_id
    console.log('App ID:', appId)
    
    // Get app global state
    const appInfo: any = await algodClient.getApplicationByID(appId).do()
    const globalState = appInfo.params?.globalState || appInfo.params?.['global-state'] || appInfo['global-state'] || []
    console.log('Global state entries:', globalState.length)
    
    // Parse metadata for this NFT
    const metadata: any = {}
    
    for (const kv of globalState) {
      const keyBytes = toUint8Array(kv.key)
      const keyString = new TextDecoder().decode(keyBytes)
      
      let assetIdBytes: Uint8Array | null = null
      let prefix = ''
      
      if (keyString.startsWith('NFT_S_')) {
        assetIdBytes = keyBytes.slice(6)
        prefix = 'NFT_S_'
      } else if (keyString.startsWith('NFT_P_')) {
        assetIdBytes = keyBytes.slice(6)
        prefix = 'NFT_P_'
      } else if (keyString.startsWith('NFT_ST_')) {
        assetIdBytes = keyBytes.slice(7)
        prefix = 'NFT_ST_'
      } else if (keyString.startsWith('NFT_R_')) {
        assetIdBytes = keyBytes.slice(6)
        prefix = 'NFT_R_'
      }
      
      if (assetIdBytes && assetIdBytes.length === 8) {
        const foundAssetId = Number(BigInt('0x' + uint8ArrayToHex(assetIdBytes)))
        
        if (foundAssetId === assetId) {
          const value = typeof kv.value.uint === 'bigint' ? Number(kv.value.uint) : kv.value.uint
          console.log(`Found ${prefix} for asset ${assetId}:`, value)
          
          if (prefix === 'NFT_S_') {
            metadata.stakedAmount = value
          } else if (prefix === 'NFT_P_') {
            metadata.lockPeriod = value
          } else if (prefix === 'NFT_ST_') {
            metadata.startTime = value
          } else if (prefix === 'NFT_R_') {
            metadata.estimatedReward = value
          }
        }
      }
    }
    
    console.log('Metadata found:', metadata)
    
    // Check if we have required data
    if (!metadata.stakedAmount || !metadata.lockPeriod || !metadata.startTime) {
      console.error('Missing required metadata for NFT', assetId, metadata)
      return null
    }
    
    // Calculate derived values
    if (metadata.startTime && metadata.lockPeriod) {
      const now = Math.floor(Date.now() / 1000)
      const endTime = metadata.startTime + metadata.lockPeriod
      const secondsLeft = Math.max(0, endTime - now)
      metadata.daysLeft = Math.ceil(secondsLeft / (24 * 60 * 60))
      
      // Calculate APR based on lock-in period
      const lockDays = metadata.lockPeriod / (24 * 60 * 60)
      if (lockDays <= 30) metadata.apr = 8
      else if (lockDays <= 60) metadata.apr = 10
      else metadata.apr = 12
    }
    
    return metadata
  } catch (error) {
    console.error('Error fetching NFT data:', error)
    throw error
  }
}

export default function MarketplacePage() {
  const [nfts, setNfts] = useState<NFTItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { walletAddress } = useWallet()

  // Load listings from localStorage on mount
  useEffect(() => {
    console.log('Loading listings from localStorage...')
    const storedListings = localStorage.getItem(STORAGE_KEY)
    console.log('Stored listings:', storedListings)
    
    if (storedListings) {
      try {
        const parsed = JSON.parse(storedListings)
        console.log('Parsed listings:', parsed)
        setNfts(parsed)
      } catch (error) {
        console.error('Failed to parse stored listings:', error)
      }
    }
    setIsLoading(false)
  }, [])

  // Save listings to localStorage whenever they change
  useEffect(() => {
    if (!isLoading) {
      console.log('Saving listings to localStorage:', nfts.length, 'items')
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nfts))
    }
  }, [nfts, isLoading])

  const handleSellNFT = async (nftAssetId: string, price: string) => {
    try {
      console.log('Starting to list NFT:', nftAssetId)
      
      // Validate NFT Asset ID
      const assetIdNum = parseInt(nftAssetId)
      if (isNaN(assetIdNum) || assetIdNum <= 0) {
        alert('Please enter a valid NFT Asset ID')
        return
      }
      
      // Check if this NFT is already listed
      const existingListing = nfts.find(nft => nft.tokenId === assetIdNum)
      if (existingListing) {
        alert('This NFT is already listed in the marketplace. Each NFT can only have one active listing.')
        return
      }
      
      // Fetch real staking data from blockchain
      const stakingData = await fetchNFTStakingData(assetIdNum)
      
      if (!stakingData) {
        alert('Unable to fetch NFT staking data. Please verify:\n\n1. The NFT Asset ID is correct\n2. This NFT was created by staking on this platform\n3. The NFT has not been unstaked yet\n\nCheck the browser console for more details.')
        return
      }
      
      if (!stakingData.stakedAmount) {
        alert('This NFT does not have staking data associated with it. Only NFTs created through the staking process can be listed.')
        return
      }
      
      // Create a new NFT listing with real blockchain data
      const newNFT: NFTItem = {
        id: Date.now().toString(),
        tokenId: assetIdNum,
        stakedAmount: `${(stakingData.stakedAmount / 1e6).toFixed(2)} ALGO`,
        rewards: `${((stakingData.estimatedReward || 0) / 1e6).toFixed(2)} NAAN`,
        price: `${price} ALGO`,
        daysLeft: stakingData.daysLeft || 0,
        apr: `${stakingData.apr || 0}%`,
        listed: true,
        seller: walletAddress || "Unknown"
      }

      console.log('Created NFT listing:', newNFT)
      setNfts([...nfts, newNFT])
    } catch (error: any) {
      console.error('Error creating listing:', error)
      alert(`Failed to create listing: ${error?.message || 'Unknown error'}. Please check the browser console for details.`)
    }
  }

  const handleBuyNFT = async (nftId: string) => {
    try {
      const nft = nfts.find(n => n.id === nftId)
      if (!nft) return

      // Show confirmation dialog
      const priceValue = parseFloat(nft.price.replace(' ALGO', ''))
      const confirmed = confirm(
        `Purchase NFT #${nft.tokenId}?\n\n` +
        `Price: ${nft.price}\n` +
        `Staked Amount: ${nft.stakedAmount}\n` +
        `Accrued Rewards: ${nft.rewards}\n` +
        `Days Left: ${nft.daysLeft}\n` +
        `APR: ${nft.apr}\n` +
        `Seller: ${nft.seller}\n\n` +
        `Note: This is a demo. In production, this would:\n` +
        `1. Connect your wallet\n` +
        `2. Transfer ${nft.price} to the seller\n` +
        `3. Transfer NFT #${nft.tokenId} to you\n` +
        `4. You can then unstake to claim the ALGO and rewards`
      )

      if (confirmed) {
        // Remove the NFT from listings when bought
        setNfts(nfts.filter(n => n.id !== nftId))
        
        // Show success message
        alert(
          `✅ Purchase successful!\n\n` +
          `You now own NFT #${nft.tokenId}\n` +
          `Staked: ${nft.stakedAmount}\n` +
          `Rewards: ${nft.rewards}\n\n` +
          `Go to the Unstake page to claim your ALGO and rewards when the lock-in period ends.`
        )
      }
    } catch (error: any) {
      console.error('Error buying NFT:', error)
      alert(`Failed to purchase NFT: ${error?.message || 'Unknown error'}`)
    }
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="flex-1 py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <MarketplaceHeader onSellNFT={handleSellNFT} />
          <NftListing nfts={nfts} onBuyNFT={handleBuyNFT} />
        </div>
      </section>

      <Footer />
    </main>
  )
}
