"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import { useWallet } from "@/components/wallet-context"
import * as algosdk from "algosdk"
import appState from "../app_state.json"

const ALGOD_SERVER = "https://testnet-api.algonode.cloud"
const ALGOD_TOKEN = ""

export function ClaimNftForm() {
  const [createdAssetId, setCreatedAssetId] = useState<number | null>(null)
  const [manualAssetId, setManualAssetId] = useState("")
  const [statusMessage, setStatusMessage] = useState<string | null>(null)
  const [statusType, setStatusType] = useState<'success' | 'error' | 'info' | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)

  const { isConnected, connect, signTransactions, walletAddress } = useWallet()
  const algodClient = new (algosdk as any).Algodv2(ALGOD_TOKEN, ALGOD_SERVER, "")

  useEffect(() => {
    try {
      const pending = localStorage.getItem('pendingNFTClaim')
      if (pending && /^\d+$/.test(pending)) {
        setCreatedAssetId(Number(pending))
        setStatusMessage(`Detected pending NFT claim for Asset ID ${pending}.`)
        setStatusType('info')
      }
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

  const ensureConnected = async () => {
    if (!isConnected) {
      const addr = await connect()
      if (!addr) throw new Error('Connect wallet to continue')
    }
  }

  const handleOptIn = async () => {
    setStatusMessage(null)
    setStatusType(null)
    if (!createdAssetId) {
      setStatusMessage('No Asset ID set. Enter it below and set it.')
      setStatusType('error')
      return
    }
    await ensureConnected()
    setIsProcessing(true)
    try {
      if (!signTransactions) throw new Error('Wallet cannot sign transactions')
      
      // Get wallet address - ensure it's a valid string
      let sender = walletAddress as string | null
      if (!sender) {
        const addr = await connect()
        if (!addr) throw new Error('Failed to connect wallet')
        sender = addr
      }
      
      const rawParams: any = await algodClient.getTransactionParams().do()
      
      // Sanitize params: convert BigInt to numbers
      const sanitized: any = {}
      for (const k of Object.keys(rawParams)) {
        const v: any = (rawParams as any)[k]
        if (typeof v === 'bigint') sanitized[k] = Number(v)
        else sanitized[k] = v
      }
      if (sanitized.firstValid !== undefined) sanitized.firstRound = Number(sanitized.firstValid)
      if (sanitized.lastValid !== undefined) sanitized.lastRound = Number(sanitized.lastValid)
      if (sanitized.firstRound !== undefined) sanitized.firstRound = Number(sanitized.firstRound)
      if (sanitized.lastRound !== undefined) sanitized.lastRound = Number(sanitized.lastRound)
      if (sanitized.fee !== undefined) sanitized.fee = Number(sanitized.fee)

      const params = sanitized

      // Build suggested params with genesisHash as base64
      const toBase64 = (x: any) => {
        if (!x) return x
        if (typeof x === 'string') return x
        if (x instanceof Uint8Array) {
          let binary = ''
          for (let i = 0; i < x.length; i++) binary += String.fromCharCode(x[i])
          return btoa(binary)
        }
        if (typeof x === 'object') {
          const keys = Object.keys(x).map(Number).sort((a, b) => a - b)
          if (keys.length) {
            const arr = new Uint8Array(keys.length)
            for (let i = 0; i < keys.length; i++) arr[i] = x[i]
            let binary = ''
            for (let i = 0; i < arr.length; i++) binary += String.fromCharCode(arr[i])
            return btoa(binary)
          }
        }
        return x
      }

      const MIN_FEE = 1000
      const incomingFee = Number(params.fee || 0)
      const chosenFee = incomingFee >= MIN_FEE ? incomingFee : MIN_FEE
      const suggestedParamsForTxn = {
        flatFee: true,
        fee: chosenFee,
        firstRound: Number(params.firstRound || params.firstValid),
        lastRound: Number(params.lastRound || params.lastValid),
        firstValid: Number(params.firstValid || params.firstRound),
        lastValid: Number(params.lastValid || params.lastRound),
        genesisID: params.genesisID,
        genesisHash: toBase64(params.genesisHash)
      }

      let optTxn: any = null
      try {
        optTxn = (algosdk as any).makeAssetTransferTxnWithSuggestedParamsFromObject({
          from: sender,
          sender: sender,
          to: sender,
          receiver: sender,
          amount: 0,
          assetIndex: Number(createdAssetId),
          suggestedParams: suggestedParamsForTxn
        })
      } catch (buildErr) {
        // Fallback: manual Transaction constructor
        const TxConstructor: any = (algosdk as any).Transaction || (algosdk as any).transaction?.Transaction
        if (!TxConstructor) throw new Error('Transaction constructor not found')
        
        const txObj: any = {
          type: 'axfer',
          sender: sender,
          suggestedParams: {
            flatFee: true,
            fee: chosenFee,
            minFee: MIN_FEE,
            firstValid: Number(suggestedParamsForTxn.firstValid),
            lastValid: Number(suggestedParamsForTxn.lastValid),
            genesisID: suggestedParamsForTxn.genesisID,
            genesisHash: base64ToUint8Array(suggestedParamsForTxn.genesisHash)
          },
          assetTransferParams: {
            receiver: sender,
            amount: 0,
            assetIndex: Number(createdAssetId)
          }
        }
        
        try {
          optTxn = new TxConstructor(txObj)
        } catch (txErr) {
          // Try with decoded address bytes
          const decodedAddr = (algosdk as any).decodeAddress(sender)
          const txObjBytes: any = {
            type: 'axfer',
            sender: decodedAddr,
            suggestedParams: {
              flatFee: true,
              fee: chosenFee,
              minFee: MIN_FEE,
              firstValid: Number(suggestedParamsForTxn.firstValid),
              lastValid: Number(suggestedParamsForTxn.lastValid),
              genesisID: suggestedParamsForTxn.genesisID,
              genesisHash: base64ToUint8Array(suggestedParamsForTxn.genesisHash)
            },
            assetTransferParams: {
              receiver: decodedAddr,
              amount: 0,
              assetIndex: Number(createdAssetId)
            }
          }
          optTxn = new TxConstructor(txObjBytes)
        }
      }

      const enc = (algosdk as any).encodeUnsignedTransaction?.bind(algosdk) || (algosdk as any).encoding?.encodeUnsignedTransaction?.bind(algosdk)
      if (!enc) throw new Error('encodeUnsignedTransaction not available')
      const unsignedB64 = uint8ArrayToBase64(enc(optTxn))
      
      // Try signing with high-level helper
      let signed: any = null
      try {
        signed = await signTransactions([[unsignedB64]])
      } catch (signErr) {
        signed = null
      }

      // If high-level helper returned nothing, try WalletConnect low-level RPC (mobile path)
      if (!signed && typeof window !== 'undefined' && (window as any).__peraConnector) {
        try {
          const connector = (window as any).__peraConnector
          const formattedTxns = [{
            txn: unsignedB64,
            message: 'Please sign NFT opt-in transaction'
          }]
          const req = {
            id: Date.now(),
            jsonrpc: '2.0',
            method: 'algo_signTxn',
            params: [formattedTxns]
          }
          const res = await connector.sendCustomRequest(req)
          signed = res
        } catch (connErr) {
          // ignore and proceed to check signed result
        }
      }

      if (!signed) throw new Error('Signing failed or was cancelled')

      // Normalize signed result to array of Uint8Array
      let blobs: Uint8Array[] = []
      if (Array.isArray(signed)) {
        try {
          if (signed.length && typeof (signed as any[])[0] === 'string') {
            blobs = (signed as any[]).map((s: any) => base64ToUint8Array(String(s)))
          } else if (signed.length && (signed as any[])[0] instanceof Uint8Array) {
            blobs = signed as Uint8Array[]
          } else if (signed.length && (signed as any[])[0] && (signed as any[])[0].blob) {
            blobs = (signed as any[]).map((s: any) => base64ToUint8Array(s.blob))
          } else {
            // try to flatten nested groups
            const flat: string[] = []
            for (const g of signed as any[]) {
              if (Array.isArray(g)) {
                for (const s of g) {
                  if (typeof s === 'string') flat.push(s)
                  else if (s && s.blob) flat.push(s.blob)
                }
              } else if (typeof g === 'string') {
                flat.push(g)
              } else if (g && g.blob) {
                flat.push(g.blob)
              }
            }
            if (flat.length) blobs = flat.map((s) => base64ToUint8Array(s))
          }
        } catch (e) {
          // fall through to other handlers
        }
      } else if (signed && (signed as any).signedTransactions) {
        const arr = (signed as any).signedTransactions as string[]
        blobs = arr.map((s) => base64ToUint8Array(s))
      }

      if (!blobs.length) throw new Error('No signed opt-in returned')
      const res = await algodClient.sendRawTransaction(blobs).do()
      const txid = (res as any).txid || (res as any).txId || (res as any).txID
      await waitForConfirmation(txid, 30)
      setStatusMessage(`✅ Opt-in successful! Now click 'Claim NFT' to receive your NFT.`)
      setStatusType('success')
    } catch (e: any) {
      setStatusMessage(`Opt-in failed: ${e?.message || String(e)}`)
      setStatusType('error')
    } finally {
      setIsProcessing(false)
    }
  }

  const handleClaim = async () => {
    setStatusMessage(null)
    setStatusType(null)
    if (!createdAssetId) {
      setStatusMessage('No Asset ID set. Enter it below and set it.')
      setStatusType('error')
      return
    }
    await ensureConnected()
    setIsProcessing(true)
    try {
      if (!signTransactions) throw new Error('Wallet cannot sign transactions')
      
      // Get wallet address - ensure it's a valid string
      let sender = walletAddress as string | null
      if (!sender) {
        const addr = await connect()
        if (!addr) throw new Error('Failed to connect wallet')
        sender = addr
      }
      
      const appId = (appState as any).app_id
      const rawParams: any = await algodClient.getTransactionParams().do()
      
      // Sanitize params
      const sanitized: any = {}
      for (const k of Object.keys(rawParams)) {
        const v: any = (rawParams as any)[k]
        if (typeof v === 'bigint') sanitized[k] = Number(v)
        else sanitized[k] = v
      }
      if (sanitized.firstValid !== undefined) sanitized.firstRound = Number(sanitized.firstValid)
      if (sanitized.lastValid !== undefined) sanitized.lastRound = Number(sanitized.lastValid)
      if (sanitized.firstRound !== undefined) sanitized.firstRound = Number(sanitized.firstRound)
      if (sanitized.lastRound !== undefined) sanitized.lastRound = Number(sanitized.lastRound)
      if (sanitized.fee !== undefined) sanitized.fee = Number(sanitized.fee)

      const params = sanitized

      const toBase64 = (x: any) => {
        if (!x) return x
        if (typeof x === 'string') return x
        if (x instanceof Uint8Array) {
          let binary = ''
          for (let i = 0; i < x.length; i++) binary += String.fromCharCode(x[i])
          return btoa(binary)
        }
        if (typeof x === 'object') {
          const keys = Object.keys(x).map(Number).sort((a, b) => a - b)
          if (keys.length) {
            const arr = new Uint8Array(keys.length)
            for (let i = 0; i < keys.length; i++) arr[i] = x[i]
            let binary = ''
            for (let i = 0; i < arr.length; i++) binary += String.fromCharCode(arr[i])
            return btoa(binary)
          }
        }
        return x
      }

      const MIN_FEE = 1000
      const incomingFee = Number(params.fee || 0)
      const chosenFee = incomingFee >= MIN_FEE ? incomingFee : MIN_FEE
      const suggestedParamsForTxn = {
        flatFee: true,
        fee: chosenFee,
        firstRound: Number(params.firstRound || params.firstValid),
        lastRound: Number(params.lastRound || params.lastValid),
        firstValid: Number(params.firstValid || params.firstRound),
        lastValid: Number(params.lastValid || params.lastRound),
        genesisID: params.genesisID,
        genesisHash: toBase64(params.genesisHash)
      }

      const claimArg = new TextEncoder().encode('claim_nft')
      let appTxn: any = null
      try {
        appTxn = (algosdk as any).makeApplicationNoOpTxnFromObject({
          from: sender,
          sender: sender,
          suggestedParams: suggestedParamsForTxn,
          appIndex: Number(appId),
          appArgs: [claimArg],
          foreignAssets: [Number(createdAssetId)]
        })
      } catch (err) {
        // Fallback: manual Transaction constructor
        const TxConstructor: any = (algosdk as any).Transaction || (algosdk as any).transaction?.Transaction
        if (!TxConstructor) throw new Error('Transaction constructor not found')
        
        const txObj: any = {
          type: 'appl',
          sender: sender,
          suggestedParams: {
            flatFee: true,
            fee: chosenFee,
            minFee: MIN_FEE,
            firstValid: Number(suggestedParamsForTxn.firstValid),
            lastValid: Number(suggestedParamsForTxn.lastValid),
            genesisID: suggestedParamsForTxn.genesisID,
            genesisHash: base64ToUint8Array(suggestedParamsForTxn.genesisHash)
          },
          appCallParams: {
            appIndex: Number(appId),
            onComplete: 0,
            appArgs: [claimArg],
            foreignAssets: [Number(createdAssetId)]
          }
        }
        appTxn = new TxConstructor(txObj)
      }

      const enc = (algosdk as any).encodeUnsignedTransaction?.bind(algosdk)
      if (!enc) throw new Error('encodeUnsignedTransaction not available')
      const unsignedB64 = uint8ArrayToBase64(enc(appTxn))
      
      // Try signing with high-level helper
      let signed: any = null
      try {
        signed = await signTransactions([[unsignedB64]])
      } catch (signErr) {
        signed = null
      }

      // If high-level helper returned nothing, try WalletConnect low-level RPC (mobile path)
      if (!signed && typeof window !== 'undefined' && (window as any).__peraConnector) {
        try {
          const connector = (window as any).__peraConnector
          const formattedTxns = [{
            txn: unsignedB64,
            message: 'Please sign NFT claim transaction'
          }]
          const req = {
            id: Date.now(),
            jsonrpc: '2.0',
            method: 'algo_signTxn',
            params: [formattedTxns]
          }
          const res = await connector.sendCustomRequest(req)
          signed = res
        } catch (connErr) {
          // ignore and proceed to check signed result
        }
      }

      if (!signed) throw new Error('Signing failed or was cancelled')

      // Normalize signed result to array of Uint8Array
      let blobs: Uint8Array[] = []
      if (Array.isArray(signed)) {
        try {
          if (signed.length && typeof (signed as any[])[0] === 'string') {
            blobs = (signed as any[]).map((s: any) => base64ToUint8Array(String(s)))
          } else if (signed.length && (signed as any[])[0] instanceof Uint8Array) {
            blobs = signed as Uint8Array[]
          } else if (signed.length && (signed as any[])[0] && (signed as any[])[0].blob) {
            blobs = (signed as any[]).map((s: any) => base64ToUint8Array(s.blob))
          } else {
            // try to flatten nested groups
            const flat: string[] = []
            for (const g of signed as any[]) {
              if (Array.isArray(g)) {
                for (const s of g) {
                  if (typeof s === 'string') flat.push(s)
                  else if (s && s.blob) flat.push(s.blob)
                }
              } else if (typeof g === 'string') {
                flat.push(g)
              } else if (g && g.blob) {
                flat.push(g.blob)
              }
            }
            if (flat.length) blobs = flat.map((s) => base64ToUint8Array(s))
          }
        } catch (e) {
          // fall through to other handlers
        }
      } else if (signed && (signed as any).signedTransactions) {
        const arr = (signed as any).signedTransactions as string[]
        blobs = arr.map((s) => base64ToUint8Array(s))
      }

      if (!blobs.length) throw new Error('No signed claim returned')
      const res = await algodClient.sendRawTransaction(blobs).do()
      const txid = (res as any).txid || (res as any).txId || (res as any).txID
      await waitForConfirmation(txid, 30)
      setStatusMessage(`🎉 Success! NFT Asset ID ${createdAssetId} has been transferred to your wallet (tx: ${txid})`)
      setStatusType('success')
      try { localStorage.removeItem('pendingNFTClaim') } catch (e) {}
      setCreatedAssetId(null)
      setManualAssetId("")
    } catch (e: any) {
      setStatusMessage(`Claim failed: ${e?.message || String(e)}`)
      setStatusType('error')
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <Card className="p-8 bg-card/50 backdrop-blur-sm border border-primary/10">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">NFT Claim Process</h2>
          <p className="text-muted-foreground">Enter your NFT Asset ID, opt-in to the asset, then claim it to your wallet.</p>
        </div>

        {!isConnected && (
          <Alert className="border border-yellow-500/20 bg-yellow-500/5">
            <AlertCircle className="h-4 w-4 text-yellow-600" />
            <AlertDescription className="ml-2 text-yellow-600">
              Please connect your wallet to continue
            </AlertDescription>
          </Alert>
        )}

        {statusMessage && (
          <Alert className={`${statusType === 'error' ? 'border border-red-500/20 bg-red-500/5' : statusType === 'success' ? 'border border-green-500/20 bg-green-500/5' : 'border border-blue-500/20 bg-blue-500/5'}`}>
            <AlertDescription className="ml-2">
              {statusMessage}
            </AlertDescription>
          </Alert>
        )}

        <div className="space-y-4">
          {!createdAssetId && (
            <div className="space-y-3">
              <Label htmlFor="manual-asset" className="text-base font-semibold">NFT Asset ID</Label>
              <div className="flex gap-2">
                <Input
                  id="manual-asset"
                  type="number"
                  placeholder="e.g. 123456"
                  value={manualAssetId}
                  onChange={(e) => setManualAssetId(e.target.value)}
                  className="flex-1 h-12"
                  disabled={!isConnected}
                />
                <Button
                  type="button"
                  onClick={() => {
                    if (manualAssetId && /^\d+$/.test(manualAssetId)) {
                      setCreatedAssetId(Number(manualAssetId))
                      try { localStorage.setItem('pendingNFTClaim', manualAssetId) } catch (e) {}
                      setStatusMessage(`Asset ID ${manualAssetId} set. You can now opt-in and claim.`)
                      setStatusType('info')
                    }
                  }}
                  disabled={!isConnected || !manualAssetId}
                  className="h-12"
                >
                  Set
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                After staking, your NFT Asset ID appears here automatically. You can also enter it manually.
              </p>
            </div>
          )}

          {createdAssetId && (
            <div className="p-4 border-2 border-primary/30 rounded-lg bg-primary/5 space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">NFT Asset ID:</p>
                <p className="font-mono font-semibold text-2xl text-primary">{createdAssetId}</p>
              </div>
              
              <div className="space-y-2">
                <Button 
                  type="button" 
                  className="w-full" 
                  size="lg" 
                  onClick={handleOptIn} 
                  disabled={isProcessing || !isConnected}
                >
                  {isProcessing ? 'Processing...' : '1️⃣ Opt-in to NFT'}
                </Button>
                <Button 
                  type="button" 
                  className="w-full" 
                  size="lg" 
                  onClick={handleClaim} 
                  disabled={isProcessing || !isConnected}
                  variant="outline"
                >
                  {isProcessing ? 'Processing...' : '2️⃣ Claim NFT'}
                </Button>
              </div>

              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="w-full text-xs"
                onClick={() => {
                  setCreatedAssetId(null)
                  setManualAssetId("")
                  try { localStorage.removeItem('pendingNFTClaim') } catch (e) {}
                  setStatusMessage(null)
                }}
              >
                Clear and enter different Asset ID
              </Button>
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}
