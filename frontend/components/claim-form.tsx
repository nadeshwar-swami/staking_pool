"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle } from 'lucide-react'
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useWallet } from "@/components/wallet-context"
import * as algosdk from 'algosdk'
import appState from "../../app_state.json"

const ALGOD_SERVER = "https://testnet-api.algonode.cloud"
const ALGOD_TOKEN = ""


export function ClaimForm() {
  const [assetId, setAssetId] = useState<string>("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [statusMessage, setStatusMessage] = useState<string | null>(null)
  const [statusType, setStatusType] = useState<'success' | 'error' | 'info' | null>(null)
  const { signTransactions, connect, walletAddress, isConnected } = useWallet()

  const algodClient = new (algosdk as any).Algodv2(ALGOD_TOKEN, ALGOD_SERVER, "")

  useEffect(() => {
    // preload last used asset id so user can claim later
    try {
      const last = localStorage.getItem('lastClaimAsset')
      if (last) setAssetId(last)
    } catch (e) {}
  }, [])

  const uint8ArrayToBase64 = (u8: Uint8Array) => {
    let binary = ""
    for (let i = 0; i < u8.length; i++) binary += String.fromCharCode(u8[i])
    return btoa(binary)
  }

  const base64ToUint8Array = (b64: string) => {
    if (!b64) return new Uint8Array(0)
    const cleaned = String(b64).replace(/\s+/g, '')
    const binary = atob(cleaned)
    const len = binary.length
    const u8 = new Uint8Array(len)
    for (let i = 0; i < len; i++) u8[i] = binary.charCodeAt(i)
    return u8
  }

  async function waitForConfirmation(txId: string, timeout = 20) {
    const start = Date.now()
    while (true) {
      try {
        const info = await algodClient.pendingTransactionInformation(txId).do()
        const cr = (info as any)['confirmed-round'] ?? (info as any).confirmedRound
        if (cr && cr > 0) return info
      } catch (e) {}
      if ((Date.now() - start) / 1000 > timeout) throw new Error('Timed out waiting for confirmation')
      await new Promise((r) => setTimeout(r, 1000))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatusMessage(null)
    setStatusType(null)
    if (!assetId) return
    if (!/^[0-9]+$/.test(assetId)) {
      setStatusMessage('Enter a valid numeric asset id')
      setStatusType('error')
      return
    }

    if (!isConnected) {
      const addr = await connect()
      if (!addr) {
        setStatusMessage('Connect wallet to claim')
        setStatusType('error')
        return
      }
    }

    setIsProcessing(true)
    try {
      // First, check if the position has matured
      const appId = (appState as any).app_id
      const appInfo: any = await algodClient.getApplicationByID(appId).do()
      const globalState = appInfo.params['global-state'] || []
      
      let startTime = 0
      let lockPeriod = 0
      let found = false
      
      for (const kv of globalState) {
        const keyBuffer = Buffer.from(kv.key, 'base64')
        const key = keyBuffer.toString('utf8')
        
        if (key.startsWith('NFT_ST_')) {
          const assetIdBytes = keyBuffer.slice(7)
          const metaAssetId = Number(BigInt('0x' + assetIdBytes.toString('hex')))
          if (metaAssetId === Number(assetId)) {
            startTime = kv.value.uint
            found = true
          }
        } else if (key.startsWith('NFT_P_')) {
          const assetIdBytes = keyBuffer.slice(6)
          const metaAssetId = Number(BigInt('0x' + assetIdBytes.toString('hex')))
          if (metaAssetId === Number(assetId)) {
            lockPeriod = kv.value.uint
          }
        }
      }
      
      if (!found || !lockPeriod) {
        setStatusMessage('This NFT does not have an active staking position. Make sure you entered the correct asset ID.')
        setStatusType('error')
        setIsProcessing(false)
        return
      }
      
      const now = Math.floor(Date.now() / 1000)
      const endTime = startTime + lockPeriod
      
      if (now < endTime) {
        const daysLeft = Math.ceil((endTime - now) / 86400)
        setStatusMessage(`⏳ Your staking position is still locked. You can redeem in ${daysLeft} day(s). Lock period ends on ${new Date(endTime * 1000).toLocaleString()}.`)
        setStatusType('error')
        setIsProcessing(false)
        return
      }
      if (!signTransactions) throw new Error('Wallet cannot sign transactions')
      const addr = walletAddress as string
      const rawParams: any = await algodClient.getTransactionParams().do()
      const params: any = { ...rawParams }
      if (typeof params.fee === 'bigint') params.fee = Number(params.fee)

      const redeemArg = new TextEncoder().encode('redeem')
      let appTxn: any = null
      try {
        appTxn = (algosdk as any).makeApplicationNoOpTxnFromObject({
          from: addr,
          suggestedParams: { ...params, flatFee: true, fee: Math.max(Number(params.fee || 1000), 1000) },
          appIndex: Number(appId),
          appArgs: [redeemArg],
          foreignAssets: [Number(assetId)]
        })
      } catch (err) {
        const TxConstructor: any = (algosdk as any).Transaction || (algosdk as any).transaction?.Transaction
        if (!TxConstructor) throw new Error('Transaction constructor not found')
        const txObj: any = {
          type: 'appl',
          sender: addr,
          suggestedParams: { flatFee: true, fee: Math.max(Number(params.fee || 1000), 1000), firstValid: Number(params.firstValid), lastValid: Number(params.lastValid), genesisID: params.genesisID, genesisHash: params.genesisHash },
          appCallParams: {
            appIndex: Number(appId),
            onComplete: 0,
            appArgs: [redeemArg],
            foreignAssets: [Number(assetId)]
          }
        }
        appTxn = new TxConstructor(txObj)
      }

      const encodeFn = (algosdk as any).encodeUnsignedTransaction?.bind(algosdk)
      if (!encodeFn) throw new Error('encodeUnsignedTransaction not available')
      const unsignedB64 = uint8ArrayToBase64(encodeFn(appTxn))

      const signed = await signTransactions([[unsignedB64]])
      
      // Comprehensive signature parsing for various wallet response formats
      let signedBlobs: Uint8Array[] = []
      
      if (!signed) {
        throw new Error('No signed transactions returned')
      }
      
      console.log('Signed result type:', typeof signed, Array.isArray(signed))
      
      if (Array.isArray(signed)) {
        // Handle array responses
        for (const item of signed as any[]) {
          if (item instanceof Uint8Array) {
            signedBlobs.push(item)
          } else if (typeof item === 'string') {
            signedBlobs.push(base64ToUint8Array(item))
          } else if (item && item.blob) {
            signedBlobs.push(base64ToUint8Array(item.blob))
          } else if (Array.isArray(item)) {
            // Handle nested arrays (WalletConnect format)
            for (const nested of item as any[]) {
              if (nested instanceof Uint8Array) {
                signedBlobs.push(nested)
              } else if (typeof nested === 'string') {
                signedBlobs.push(base64ToUint8Array(nested))
              } else if (nested && nested.blob) {
                signedBlobs.push(base64ToUint8Array(nested.blob))
              }
            }
          }
        }
      } else if ((signed as any).signedTransactions) {
        // Handle {signedTransactions: [...]} format
        const txns = (signed as any).signedTransactions
        if (Array.isArray(txns)) {
          for (const txn of txns) {
            if (txn instanceof Uint8Array) {
              signedBlobs.push(txn)
            } else if (typeof txn === 'string') {
              signedBlobs.push(base64ToUint8Array(txn))
            } else if (txn && txn.blob) {
              signedBlobs.push(base64ToUint8Array(txn.blob))
            }
          }
        }
      } else if ((signed as any) instanceof Uint8Array) {
        signedBlobs.push(signed as any)
      }
      
      if (!signedBlobs.length) {
        console.error('Failed to parse signed transactions:', signed)
        throw new Error('No signed transactions returned after parsing')
      }
      
      console.log('Parsed', signedBlobs.length, 'signed transaction(s)')

      const sendResult = await algodClient.sendRawTransaction(signedBlobs).do()
      const txId = (sendResult as any).txid || (sendResult as any).txId || (sendResult as any).txID
      await waitForConfirmation(txId, 30)
      setStatusMessage(`🎉 Successfully redeemed! Your staked ALGO + rewards have been returned to your wallet. NFT ${assetId} has been burned. (tx: ${txId})`)
      setStatusType('success')
      try { localStorage.removeItem('lastClaimAsset') } catch (e) {}
      setAssetId('')
    } catch (e: any) {
      let errorMsg = e?.message || String(e)
      
      // Parse specific contract errors
      if (errorMsg.includes('assert failed pc=628') || errorMsg.includes('logic eval error')) {
        errorMsg = '⏳ Your staking position is still locked. The lock period has not ended yet. Please wait until maturity to redeem.'
      } else if (errorMsg.includes('asset_sender must be AssetHolding.')) {
        errorMsg = '❌ You do not own this NFT. Make sure you entered the correct asset ID and that the NFT is in your wallet.'
      }
      
      setStatusMessage(`Claim failed: ${errorMsg}`)
      setStatusType('error')
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <Card className="p-8 bg-card/50 backdrop-blur-sm border border-primary/10">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-6">Redeem Your Stake NFT</h2>
          <p className="text-muted-foreground mb-6">
            Enter your NFT asset ID to redeem your staked ALGO + rewards
          </p>
        </div>

        {/* Asset ID Input */}
        <div className="space-y-3">
          <Label htmlFor="assetId" className="text-base font-semibold">
            NFT Asset ID
          </Label>
          <Input
            id="assetId"
            type="number"
            placeholder="Enter your NFT asset ID"
            value={assetId}
            onChange={(e) => setAssetId(e.target.value)}
            className="h-12 text-lg"
          />
          <p className="text-sm text-muted-foreground">
            This is your unique Stake NFT identifier
          </p>
        </div>

        {/* Alert */}
        <Alert className="border border-primary/20 bg-primary/5">
          <AlertCircle className="h-4 w-4 text-primary" />
          <AlertDescription className="ml-2">
            You can only claim rewards after your lock period has ended
          </AlertDescription>
        </Alert>

        {/* Submit Button */}
        <Button
          type="submit"
          size="lg"
          className="w-full bg-primary hover:bg-primary/90 text-lg font-semibold py-6"
          disabled={!assetId || isProcessing}
        >
          {isProcessing ? 'Processing...' : 'Redeem'}
        </Button>

        {/* Status message */}
        {statusMessage && (
          <Alert className={`mt-4 ${statusType === 'error' ? 'border border-red-500/20 bg-red-500/5' : statusType === 'success' ? 'border border-green-500/20 bg-green-500/5' : 'border border-blue-500/20 bg-blue-500/5'}`}>
            <AlertDescription className="ml-2">
              {statusMessage}
            </AlertDescription>
          </Alert>
        )}
        <p className="text-sm text-muted-foreground mt-2">
          <strong>Note:</strong> This redeems your staked ALGO after the lock period ends. The NFT proves ownership and will be burned when you redeem.
        </p>
      </form>
    </Card>
  )
}
