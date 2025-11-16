"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useWallet } from "@/components/wallet-context"
import * as algosdk from "algosdk"
import appState from "../../app_state.json"
import { Wallet, AlertCircle } from 'lucide-react'
import { Alert, AlertDescription } from "@/components/ui/alert"

type LockPeriod = "30" | "60" | "90"

export function StakingForm() {
  const [amount, setAmount] = useState("")
  const [lockPeriod, setLockPeriod] = useState<LockPeriod>("30")
  const [connectFailed, setConnectFailed] = useState(false)
  const [algoBalance, setAlgoBalance] = useState<string | null>(null)
  const [balanceLoading, setBalanceLoading] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [statusMessage, setStatusMessage] = useState<React.ReactNode | null>(null)
  const [statusType, setStatusType] = useState<'success' | 'error' | 'info' | null>(null)
  const { isConnected, connect } = useWallet()

  // Claim NFT flow has been moved to a dedicated page

  const apy: Record<LockPeriod, number> = {
    "30": 8,
    "60": 10,
    "90": 12
  }

  const estimatedReward = amount ? (parseFloat(amount) * apy[lockPeriod] / 100).toFixed(2) : "0"

  const { signTransactions, walletAddress } = useWallet()

  const ALGOD_SERVER = "https://testnet-api.algonode.cloud"
  const ALGOD_TOKEN = ""
  const algodClient = new algosdk.Algodv2(ALGOD_TOKEN, ALGOD_SERVER, "")

  useEffect(() => {
    // Fetch account balance whenever walletAddress changes
    if (!walletAddress) {
      setAlgoBalance(null)
      return
    }
    let cancelled = false
    ;(async () => {
      try {
        setBalanceLoading(true)
        const acctInfo: any = await algodClient.accountInformation(String(walletAddress)).do()
        // acctInfo.amount may be a BigInt or number
        const micro = typeof acctInfo?.amount === 'bigint' ? Number(acctInfo.amount) : Number(acctInfo?.amount || acctInfo?.microAlgos || 0)
        if (!cancelled) setAlgoBalance((micro / 1e6).toFixed(6))
      } catch (e) {
        if (!cancelled) setAlgoBalance(null)
      } finally {
        if (!cancelled) setBalanceLoading(false)
      }
    })()
    return () => { cancelled = true }
  }, [walletAddress])

  const uint8ArrayToBase64 = (u8: Uint8Array) => {
    let binary = ""
    for (let i = 0; i < u8.length; i++) binary += String.fromCharCode(u8[i])
    return btoa(binary)
  }

  const base64ToUint8Array = (b64: string) => {
    if (!b64) return new Uint8Array(0)
    // sanitize: remove whitespace/newlines that can appear in signed payloads
    const cleaned = String(b64).replace(/\s+/g, '')
    const binary = atob(cleaned)
    const len = binary.length
    const u8 = new Uint8Array(len)
    for (let i = 0; i < len; i++) u8[i] = binary.charCodeAt(i)
    return u8
  }

  // Encode uint64 as 8-byte big-endian byte array for app args
  const u64ToBytes = (n: number) => {
    // For our periods (<= 90 days) value fits in 32 bits safely
    const val = Math.floor(n) >>> 0
    const arr = new Uint8Array(8)
    arr[0] = 0
    arr[1] = 0
    arr[2] = 0
    arr[3] = 0
    arr[4] = (val >>> 24) & 0xff
    arr[5] = (val >>> 16) & 0xff
    arr[6] = (val >>> 8) & 0xff
    arr[7] = val & 0xff
    return arr
  }

  async function waitForConfirmation(txId: string, timeout = 10) {
    const start = Date.now()
    while (true) {
      try {
        const info = await algodClient.pendingTransactionInformation(txId).do()
        const cr = (info as any)['confirmed-round'] ?? (info as any).confirmedRound
        if (cr && cr > 0) return info
      } catch (e) {
        // ignore and retry
      }
      if ((Date.now() - start) / 1000 > timeout) throw new Error('Timed out waiting for confirmation')
      await new Promise((r) => setTimeout(r, 1000))
    }
  }

  // Helper: inspect confirmed/pending transaction info for inner txns and created asset id
  const findCreatedAssetId = (confirmed: any) => {
    try {
      // Look for inner-txns in the response
      const inner = confirmed['inner-txns'] || confirmed.innerTxns || confirmed['inner-transactions']
      if (inner && Array.isArray(inner)) {
        for (const it of inner) {
          // Check for asset-config inner transaction that creates an asset
          const assetIndex = it['asset-index'] || it['created-asset-index'] || it.assetIndex || it.createdAssetIndex
          if (assetIndex) return Number(assetIndex)
          
          // Also check nested in transaction details
          if (it.txn && it.txn.caid) return Number(it.txn.caid)
        }
      }
      
      // Also check at the transaction level for created-asset-index
      const topLevel = confirmed['created-asset-index'] || confirmed['asset-index'] || confirmed.createdAssetIndex || confirmed.assetIndex
      if (topLevel) return Number(topLevel)
    } catch (e) {
      console.error('Error parsing asset ID:', e)
    }
    return null
  }

  const handleStake = async () => {
    // reset any previous status
    setStatusMessage(null)
    setStatusType(null)

    if (!isConnected) {
      const addr = await connect()
      if (!addr) {
        setConnectFailed(true)
        return
      }
      setConnectFailed(false)
    }

    // At this point the wallet is connected. Perform staking flow on TestNet.

    if (!amount || parseFloat(amount) < 1) {
      setStatusMessage('Enter a valid amount (>= 1 ALGO)')
      setStatusType('info')
      return
    }

    if (!signTransactions) {
      setStatusMessage('Wallet cannot sign transactions. Ensure Pera is connected.')
      setStatusType('error')
      return
    }
    setIsProcessing(true)
    try {
      // Dynamically load app_id and asset_id from app_state.json
      const appId = appState.app_id
      // If you need asset_id, use: const assetId = appState.asset_id

      let sender = walletAddress as string | null
      if (!sender) {
        // try to reconnect/get address from wallet
        const addr = await connect()
        if (!addr) {
          setConnectFailed(true)
          throw new Error('Wallet address not available')
        }
        sender = addr
      }
      
      const microAlgos = Math.floor(parseFloat(amount) * 1e6)
      let payTxn: any = undefined
      let runtimeSdk: any = (algosdk as any)

      // Diagnostics: inspect algosdk exported keys and helper availability
        try {
        } catch (diagErr) {
        }

      const rawParams = await algodClient.getTransactionParams().do()

      // Sanitize params: convert BigInt values to numbers and ensure both key variants exist
      const sanitized: any = {}
      for (const k of Object.keys(rawParams)) {
        const v: any = (rawParams as any)[k]
        if (typeof v === 'bigint') sanitized[k] = Number(v)
        else sanitized[k] = v
      }
      // Also ensure both firstValid/lastValid and firstRound/lastRound are present as numbers
      if (sanitized.firstValid !== undefined) {
        sanitized.firstRound = Number(sanitized.firstValid)
      }
      if (sanitized.lastValid !== undefined) {
        sanitized.lastRound = Number(sanitized.lastValid)
      }
      if (sanitized.firstRound !== undefined) sanitized.firstRound = Number(sanitized.firstRound)
      if (sanitized.lastRound !== undefined) sanitized.lastRound = Number(sanitized.lastRound)
      if (sanitized.fee !== undefined) sanitized.fee = Number(sanitized.fee)

      const params = sanitized

      // payment to app escrow
      const rawAppAddr = algosdk.getApplicationAddress(appId)
      const appAddr = typeof rawAppAddr === 'string' ? rawAppAddr : rawAppAddr.toString()
      if (!algosdk.isValidAddress(sender)) {
        console.error('[STAKE] Invalid sender address:', sender)
        throw new Error('Invalid sender address: ' + sender)
      }
      if (!algosdk.isValidAddress(appAddr)) {
        console.error('[STAKE] Invalid app address:', appAddr)
        throw new Error('Invalid app address: ' + appAddr)
      }
      let suggestedParamsForTxn: any = undefined
      try {
        // extra diagnostics
        const decodedFrom = algosdk.decodeAddress(sender)
        const decodedTo = algosdk.decodeAddress(appAddr)

        // Build a minimal suggestedParams object with the expected keys
        const toBase64 = (x: any) => {
          if (!x) return x
          if (typeof x === 'string') return x
          if (x instanceof Uint8Array) {
            let binary = ''
            for (let i = 0; i < x.length; i++) binary += String.fromCharCode(x[i])
            return btoa(binary)
          }
          // handle plain object with numeric keys
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

        // Ensure genesisHash is a Uint8Array (algosdk expects bytes)
        const fromBase64ToUint8 = (b64: string | Uint8Array | any) => {
          if (!b64) return b64
          if (b64 instanceof Uint8Array) return b64
          if (typeof b64 === 'string') {
            const bin = atob(b64)
            const u8 = new Uint8Array(bin.length)
            for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i)
            return u8
          }
          // object with numeric keys
          if (typeof b64 === 'object') {
            const keys = Object.keys(b64).map(Number).sort((a, b) => a - b)
            const arr = new Uint8Array(keys.length)
            for (let i = 0; i < keys.length; i++) arr[i] = b64[i]
            return arr
          }
          return b64
        }

        const genesisHashBytes = fromBase64ToUint8(params.genesisHash)

        // Ensure every transaction uses at least the network minimum fee (1000 microAlgos)
        const MIN_FEE = 1000
        const incomingFee = Number(params.fee || 0)
        const chosenFee = incomingFee >= MIN_FEE ? incomingFee : MIN_FEE
        suggestedParamsForTxn = {
          // Use flatFee to ensure the fee field is treated as per-tx cost
          flatFee: true,
          fee: chosenFee,
          firstRound: Number(params.firstRound || params.firstValid),
          lastRound: Number(params.lastRound || params.lastValid),
          firstValid: Number(params.firstValid || params.firstRound),
          lastValid: Number(params.lastValid || params.lastRound),
          genesisID: params.genesisID,
          // use base64 string for genesisHash to satisfy various algosdk builds
          genesisHash: toBase64(genesisHashBytes)
        }
        

        // Ensure the sender is opted-in to the app before staking.
        try {
          const acctInfo: any = await algodClient.accountInformation(sender).do()
          const localStates = (acctInfo && (acctInfo["apps-local-state"] || acctInfo.appsLocalState)) || []
          const alreadyOptedIn = Array.isArray(localStates) && localStates.some((ls: any) => Number(ls?.id) === Number(appId))
          if (!alreadyOptedIn) {
            const TxConstructorForOpt: any = (algosdk as any).Transaction || (algosdk as any).transaction?.Transaction
            if (!TxConstructorForOpt) throw new Error('Transaction constructor not found on algosdk for opt-in')
            const optInTxObj: any = {
              type: 'appl',
              sender: sender,
              suggestedParams: {
                flatFee: true,
                fee: Number(suggestedParamsForTxn.fee || 1000),
                minFee: 1000,
                firstValid: Number(suggestedParamsForTxn.firstValid || suggestedParamsForTxn.firstRound),
                lastValid: Number(suggestedParamsForTxn.lastValid || suggestedParamsForTxn.lastRound),
                genesisID: suggestedParamsForTxn.genesisID,
                genesisHash: base64ToUint8Array(suggestedParamsForTxn.genesisHash)
              },
              appCallParams: {
                appIndex: appId,
                onComplete: 1
              }
            }
            const optInTxn = new TxConstructorForOpt(optInTxObj)
            // Encode unsigned and request a signature
            const encodeOpt = ((algosdk as any).encodeUnsignedTransaction || (algosdk as any).encoding?.encodeUnsignedTransaction)?.bind(algosdk)
            if (!encodeOpt) throw new Error('encodeUnsignedTransaction not available for opt-in')
            const unsignedOptB64 = uint8ArrayToBase64(encodeOpt(optInTxn))
            // Prefer the same wallet signing path
            let signedOpt: any = null
            try {
              signedOpt = await signTransactions([[unsignedOptB64]])
            } catch (optErr) {
              signedOpt = null
            }
            if (!signedOpt && typeof window !== 'undefined' && (window as any).__peraConnector) {
              try {
                const connector = (window as any).__peraConnector
                const req = {
                  id: Date.now(),
                  jsonrpc: '2.0',
                  method: 'algo_signTxn',
                  params: [[{ txn: unsignedOptB64, message: 'Please sign app opt-in' }]]
                }
                const res = await connector.sendCustomRequest(req)
                signedOpt = res
              } catch (rpcOptErr) {
                console.warn('[STAKE] low-level opt-in sign failed', rpcOptErr)
              }
            }
            if (!signedOpt) throw new Error('App opt-in signing failed or cancelled')
            // Normalize to blobs
            let optBlobs: Uint8Array[] = []
            if (Array.isArray(signedOpt)) {
              if (signedOpt.length && typeof signedOpt[0] === 'string') optBlobs = (signedOpt as string[]).map(base64ToUint8Array)
              else if (signedOpt.length && (signedOpt as any[])[0] instanceof Uint8Array) optBlobs = signedOpt as Uint8Array[]
              else if (signedOpt.length && (signedOpt as any[])[0] && (signedOpt as any[])[0].blob) optBlobs = (signedOpt as any[]).map((s: any) => base64ToUint8Array(s.blob))
              else {
                // nested
                const flat: string[] = []
                for (const g of signedOpt as any[]) {
                  if (Array.isArray(g)) {
                    for (const s of g) {
                      if (typeof s === 'string') flat.push(s)
                      else if (s && s.blob) flat.push(s.blob)
                    }
                  }
                }
                if (flat.length) optBlobs = flat.map(base64ToUint8Array)
              }
            } else if (signedOpt && (signedOpt as any).signedTransactions) {
              optBlobs = (signedOpt as any).signedTransactions.map((s: string) => base64ToUint8Array(s))
            }
            if (!optBlobs.length) throw new Error('No signed blob returned for opt-in')
            const sendOpt = await algodClient.sendRawTransaction(optBlobs).do()
          const optTxId = (sendOpt as any).txid || (sendOpt as any).txId || (sendOpt as any).txID
          const conf = await waitForConfirmation(optTxId, 30)
          } else {
          }
        } catch (optCheckErr) {
          
        }

        payTxn = null
        try {
            // Track the runtime SDK instance so encoding uses the same build
            let runtimeSdk: any = (algosdk as any)
            // Dynamic import adapter: load the actual runtime export shape
            const sdkModule: any = await import('algosdk')
            const sdk = sdkModule?.default ?? sdkModule
            runtimeSdk = sdk
            

          // Try helper-from-object with base64 genesisHash first
            try {
            payTxn = sdk.makePaymentTxnWithSuggestedParamsFromObject({
              // Provide both naming variants to be compatible with different algosdk builds
              from: sender,
              sender: sender,
              to: appAddr,
              receiver: appAddr,
              amount: microAlgos,
              suggestedParams: suggestedParamsForTxn
            })
            
            } catch (err1) {
            
            // Try with genesisHash as bytes
              try {
              const ghBytes = base64ToUint8Array(suggestedParamsForTxn.genesisHash)
              const suggestedParamsBytes = { ...suggestedParamsForTxn, genesisHash: ghBytes }
              payTxn = sdk.makePaymentTxnWithSuggestedParamsFromObject({
                // Provide both naming variants to be compatible with different algosdk builds
                from: sender,
                sender: sender,
                to: appAddr,
                receiver: appAddr,
                amount: microAlgos,
                suggestedParams: suggestedParamsBytes
              })
              
            } catch (err2) {
              
              // Fall back to manual Transaction constructor
              try {
                const TxConstructor = sdk.Transaction || sdk.transaction?.Transaction
                if (!TxConstructor) throw new Error('Transaction constructor not found on sdk')
                    const txObj: any = {
                  type: 'pay',
                  sender: sender,
                  suggestedParams: {
                    	    flatFee: true,
                    	    fee: Number(suggestedParamsForTxn.fee || 1000),
                    	    minFee: 1000,
                    firstValid: Number(suggestedParamsForTxn.firstValid || suggestedParamsForTxn.firstRound),
                    lastValid: Number(suggestedParamsForTxn.lastValid || suggestedParamsForTxn.lastRound),
                    genesisID: suggestedParamsForTxn.genesisID,
                    genesisHash: base64ToUint8Array(suggestedParamsForTxn.genesisHash)
                  },
                  paymentParams: {
                    receiver: appAddr,
                    amount: microAlgos
                  }
                }
                try {
                  try {
                  } catch (kErr) {
                    // ignore
                  }
                  // If the constructor exposes a from_obj_for_encoding helper, try it
                  if (typeof (TxConstructor as any).from_obj_for_encoding === 'function') {
                    try {
                      const enc = (TxConstructor as any).from_obj_for_encoding(txObj)
                      payTxn = new TxConstructor(enc)
                    } catch (fErr) {
                      throw fErr
                    }
                  } else {
                    // Try direct construction with string addresses
                    try {
                      payTxn = new TxConstructor(txObj)
                    } catch (txErr1) {
                      
                        const txObjBytes: any = {
                        type: 'pay',
                        sender: decodedFrom,
                        suggestedParams: {
                          flatFee: true,
                          fee: Number(suggestedParamsForTxn.fee || 1000),
                          minFee: 1000,
                          firstValid: Number(suggestedParamsForTxn.firstValid || suggestedParamsForTxn.firstRound),
                          lastValid: Number(suggestedParamsForTxn.lastValid || suggestedParamsForTxn.lastRound),
                          genesisID: suggestedParamsForTxn.genesisID,
                          genesisHash: base64ToUint8Array(suggestedParamsForTxn.genesisHash)
                        },
                        paymentParams: {
                          receiver: decodedTo,
                          amount: microAlgos
                        }
                      }
                      payTxn = new TxConstructor(txObjBytes)
                    }
                  }
                    // If we reached here without payTxn, try low-level encoding to produce unsigned bytes
                    if (!payTxn) {
                      try {
                        let unsignedBytes: Uint8Array | undefined
                        // Try top-level helper
                          if (typeof runtimeSdk.encodeUnsignedTransaction === 'function') {
                            unsignedBytes = runtimeSdk.encodeUnsignedTransaction(txObj)
                          } else if (runtimeSdk.encoding && typeof runtimeSdk.encoding.encodeUnsignedTransaction === 'function') {
                            unsignedBytes = runtimeSdk.encoding.encodeUnsignedTransaction(txObj)
                          } else if (TxConstructor && typeof (TxConstructor as any).from_obj_for_encoding === 'function') {
                            const encObj = (TxConstructor as any).from_obj_for_encoding(txObj)
                            if (encObj && typeof runtimeSdk.encodeUnsignedTransaction === 'function') unsignedBytes = runtimeSdk.encodeUnsignedTransaction(encObj)
                        }
                        if (unsignedBytes) {
                          const unsignedB64single = uint8ArrayToBase64(unsignedBytes)
                          // Pass directly to signing helper (single txn group will be handled later)
                          const signedLow = await signTransactions([[unsignedB64single]])
                          // normalize and send
                          let blobs: Uint8Array[] = []
                          if (Array.isArray(signedLow)) {
                            if (typeof signedLow[0] === 'string') blobs = (signedLow as unknown as string[]).map(base64ToUint8Array)
                          } else if (signedLow && (signedLow as any).signedTransactions) {
                            blobs = (signedLow as any).signedTransactions.map(base64ToUint8Array)
                          }
                          if (blobs.length) {
                                          const sendResult = await algodClient.sendRawTransaction(blobs).do()
                                          const txId = (sendResult as any).txid || (sendResult as any).txId || (sendResult as any).txID
                                          const confirmed = await waitForConfirmation(txId, 30)
                            
                                          // try to find created asset id in inner txns
                                          try {
                                            const info = await algodClient.pendingTransactionInformation(txId).do()
                                            const createdId = findCreatedAssetId(info)
                                            if (createdId) {
                                              setCreatedAssetId(Number(createdId))
                                              try { localStorage.setItem('pendingNFTClaim', String(createdId)) } catch (e) {}
                                              setStatusMessage(`✅ Stake confirmed! NFT Asset ID ${createdId} created. Complete the 2-step claim process below to receive your NFT.`)
                                            } else {
                                              setStatusMessage(`Stake confirmed (txid: ${txId})`)
                                            }
                                          } catch (e) {
                                            setStatusMessage(`Stake confirmed (txid: ${txId})`)
                                          }
                                          setStatusType('success')
                                          return
                                        }
                        }
                      } catch (lowErr) {
                        
                      }
                    }
                } catch (errTry) {
                  throw errTry
                }
              } catch (finalErr) {
                
                  // As a last resort, try loading the browser UMD build of algosdk from CDN
                try {
                  const sdkFromCdn: any = await new Promise((resolve, reject) => {
                    if ((window as any).algosdk) return resolve((window as any).algosdk)
                    const s = document.createElement('script')
                    // prefer local vendored UMD build to avoid CDN/tracking issues
                    const localPath = '/libs/algosdk.min.js'
                    s.src = localPath
                    s.onload = () => {
                      if ((window as any).algosdk) return resolve((window as any).algosdk)
                      // if local file loaded but didn't populate, fall back to CDN
                      const cdn = 'https://cdn.jsdelivr.net/npm/algosdk/dist/browser/algosdk.min.js'
                      const s2 = document.createElement('script')
                      s2.src = cdn
                      s2.onload = () => (window as any).algosdk ? resolve((window as any).algosdk) : reject(new Error('Loaded scripts but algosdk not available'))
                      s2.onerror = () => reject(new Error('Failed to load algosdk from CDN'))
                      document.head.appendChild(s2)
                    }
                    s.onerror = () => {
                      // try CDN if local missing or blocked
                      const cdn = 'https://cdn.jsdelivr.net/npm/algosdk/dist/browser/algosdk.min.js'
                      const s2 = document.createElement('script')
                      s2.src = cdn
                      s2.onload = () => (window as any).algosdk ? resolve((window as any).algosdk) : reject(new Error('Loaded CDN but algosdk not available'))
                      s2.onerror = () => reject(new Error('Failed to load algosdk from CDN and local'))
                      document.head.appendChild(s2)
                    }
                    document.head.appendChild(s)
                  })
                  
                  runtimeSdk = sdkFromCdn
                  // Try helper-from-object on CDN sdk
                    try {
                    payTxn = sdkFromCdn.makePaymentTxnWithSuggestedParamsFromObject({
                      // Provide both naming variants to be compatible with different algosdk builds
                      from: sender,
                      sender: sender,
                      to: appAddr,
                      receiver: appAddr,
                      amount: microAlgos,
                      suggestedParams: suggestedParamsForTxn
                    })
                    
                  } catch (cdnErr) {
                    
                    // try manual constructor on CDN sdk
                    const TxConstructorCdn = sdkFromCdn.Transaction || sdkFromCdn.transaction?.Transaction
                    if (!TxConstructorCdn) throw new Error('Transaction constructor not found on CDN sdk')
                    const txObjCdn = {
                      type: 'pay',
                      sender: sender,
                      suggestedParams: {
                        flatFee: true,
                        fee: Number(suggestedParamsForTxn.fee || 1000),
                        minFee: 1000,
                        firstValid: Number(suggestedParamsForTxn.firstValid || suggestedParamsForTxn.firstRound),
                        lastValid: Number(suggestedParamsForTxn.lastValid || suggestedParamsForTxn.lastRound),
                        genesisID: suggestedParamsForTxn.genesisID,
                        genesisHash: base64ToUint8Array(suggestedParamsForTxn.genesisHash)
                      },
                      paymentParams: {
                        receiver: appAddr,
                        amount: microAlgos
                      }
                    }
                    payTxn = new TxConstructorCdn(txObjCdn)
                  }
                } catch (cdnFinalErr) {
                  
                  throw finalErr
                }
              }
            }
          }
        } catch (err: any) {
          throw err
        }
      } catch (err: any) {
        throw err
      }

      // app call with "stake" and lock period seconds
      const appArg = new TextEncoder().encode('stake')
      const periodDays = parseInt(lockPeriod, 10)
      const periodSecs = periodDays * 24 * 60 * 60
      const periodArg = u64ToBytes(periodSecs)
      let appTxn: any = null
        try {
        
        appTxn = (algosdk as any).makeApplicationNoOpTxnFromObject({
          // pass both sender and from fields for compatibility across algosdk builds
          from: sender,
          sender: sender,
          suggestedParams: suggestedParamsForTxn,
          appIndex: appId,
          appArgs: [appArg, periodArg]
        })
        
      } catch (appErr) {
        
        try {
          const TxConstructorGlobal: any = (algosdk as any).Transaction || (algosdk as any).transaction?.Transaction
          if (!TxConstructorGlobal) throw new Error('Transaction constructor not found on algosdk')
            const appTxObj: any = {
            type: 'appl',
            sender: sender,
            suggestedParams: {
              flatFee: true,
              fee: Number(suggestedParamsForTxn.fee || 1000),
              minFee: 1000,
              firstValid: Number(suggestedParamsForTxn.firstValid || suggestedParamsForTxn.firstRound),
              lastValid: Number(suggestedParamsForTxn.lastValid || suggestedParamsForTxn.lastRound),
              genesisID: suggestedParamsForTxn.genesisID,
              genesisHash: base64ToUint8Array(suggestedParamsForTxn.genesisHash)
            },
            appCallParams: {
              appIndex: appId,
              onComplete: 0,
              appArgs: [appArg, periodArg]
            }
          }
          appTxn = new TxConstructorGlobal(appTxObj)
        } catch (finalAppErr) {
          throw finalAppErr
        }
      }

      // assign group id
      if (!payTxn) {
        throw new Error('Payment transaction was not constructed')
      }
      const txns = [payTxn, appTxn]
      algosdk.assignGroupID(txns)

      // Try canonical encoder utility (fallback). If it fails, fall back to runtime encoder.
      let unsignedB64: string[] = []
      let usedFallback = false
      try {
        const { encodeTxnsCanonical } = await import('../lib/algorandEncode')
        const encoded = encodeTxnsCanonical(txns, suggestedParamsForTxn, appId, appArg)
        if (encoded && encoded.length) {
          // sanity-check encoded lengths. Very small encodings indicate our canonical serializer produced an empty map
          const sizes = encoded.map((u) => (u ? u.length : 0))
          const minSize = Math.min(...sizes)
          if (minSize > 8) {
            unsignedB64 = encoded.map((u) => uint8ArrayToBase64(u))
            usedFallback = true
          } else {
          
          }
        }
      } catch (errEnc) {
      }

      if (!usedFallback) {
        const encodeFn = (runtimeSdk && typeof runtimeSdk.encodeUnsignedTransaction === 'function')
          ? runtimeSdk.encodeUnsignedTransaction.bind(runtimeSdk)
          : (algosdk as any).encodeUnsignedTransaction?.bind(algosdk)
        if (!encodeFn) throw new Error('No encode function available on algosdk runtime')
        unsignedB64 = txns.map((t: any) => uint8ArrayToBase64(encodeFn(t)))
      }

      // Pera usually expects an array (or nested groups). Try passing a single group.
      let signed: any = null
      try {
        signed = await signTransactions([unsignedB64])
      } catch (signErr) {
        signed = null
      }

      // If high-level helper returned nothing, try WalletConnect low-level RPC (mobile path)
      if (!signed && typeof window !== 'undefined' && (window as any).__peraConnector) {
        try {
          const connector = (window as any).__peraConnector
          

          // Format according to Algorand WalletConnect spec:
          // Each transaction must be { txn: base64, message?: string, signers?: string[] }
          const formattedTxns = unsignedB64.map((txnB64: string) => ({
            txn: txnB64,
            message: 'Please sign this staking transaction'
          }))

            try {
            const req = {
              id: Date.now(),
              jsonrpc: '2.0',
              method: 'algo_signTxn',
              // Pera expects a single argument: an array of txn objects
              params: [formattedTxns]
            }
            const res = await connector.sendCustomRequest(req)
            signed = res
          } catch (e) {
            
          }
        } catch (connErr) {
        }
      }

      if (!signed) throw new Error('Signing failed or was cancelled')

      // Normalize signed result to array of Uint8Array
      let signedBlobs: Uint8Array[] = []
      // Handle several possible shapes from Pera
      if (Array.isArray(signed)) {
        // several possible shapes: array of base64 strings, array of Uint8Array, array of objects with .blob, or nested groups
        try {
          if (signed.length && typeof (signed as any[])[0] === 'string') {
            signedBlobs = (signed as any[]).map((s: any) => base64ToUint8Array(String(s)))
          } else if (signed.length && (signed as any[])[0] instanceof Uint8Array) {
            signedBlobs = signed as Uint8Array[]
          } else if (signed.length && (signed as any[])[0] && (signed as any[])[0].blob) {
            signedBlobs = (signed as any[]).map((s: any) => base64ToUint8Array(s.blob))
          } else {
            // try to flatten nested groups
            const flat: string[] = []
            for (const g of signed as any[]) {
              if (Array.isArray(g)) {
                for (const s of g) {
                  if (typeof s === 'string') flat.push(s)
                  else if (s && s.blob) flat.push(s.blob)
                }
              }
            }
            if (flat.length) signedBlobs = flat.map((s) => base64ToUint8Array(s))
          }
        } catch (e) {
          // fall through to other handlers
        }
      } else if (signed && (signed as any).signedTransactions) {
        const arr = (signed as any).signedTransactions as string[]
        signedBlobs = arr.map((s) => base64ToUint8Array(s))
      }
      

      if (!signedBlobs.length) throw new Error('No signed transactions returned')

      // submit raw signed txns
      const sendResult = await algodClient.sendRawTransaction(signedBlobs).do()
      const txId = (sendResult as any).txid || (sendResult as any).txId || (sendResult as any).txID
      if (!txId) throw new Error('No txid from send')

      const confirmed = await waitForConfirmation(txId, 30)
      
      const confirmedRound = (confirmed as any)['confirmed-round'] ?? (confirmed as any).confirmedRound
      
      // Try multiple ways to get the created asset ID
      let createdId: number | null = null
      
      try {
        // First, try to get transaction info which may include inner transactions
        const txInfo = await algodClient.pendingTransactionInformation(txId).do()
        createdId = findCreatedAssetId(txInfo)
        
        // If not found, also check the confirmation result
        if (!createdId) {
          createdId = findCreatedAssetId(confirmed)
        }
        
        if (createdId) {
          try { localStorage.setItem('pendingNFTClaim', String(createdId)) } catch (e) {}
          setStatusMessage(
            <>
              ✅ Stake confirmed! NFT Asset ID <span className="font-mono font-semibold">{createdId}</span> created. Continue to the{' '}
              <a href="/claim-nft" className="text-primary underline hover:text-primary/80 font-semibold">Claim NFT</a>{' '}
              page to opt-in and receive your NFT.
            </>
          )
        } else {
          // Auto-detection failed - provide explorer link and guidance to Claim NFT page
          const explorerUrl = `https://lora.algokit.io/testnet/transaction/${txId}`
          setStatusMessage(
            <>
              ✅ Stake confirmed in round {confirmedRound}! Find your NFT Asset ID on the explorer:{' '}
              <a href={explorerUrl} target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 font-semibold">
                View on Explorer
              </a>
              . Then go to the{' '}
              <a href="/claim-nft" className="text-primary underline hover:text-primary/80 font-semibold">Claim NFT</a>{' '}
              page to complete the process.
            </>
          )
          setStatusType('success')
        }
      } catch (e) {
        console.error('Error getting asset ID:', e)
        setStatusMessage(
          <>
            Stake confirmed in round {confirmedRound} (txid: {txId}). Proceed to the{' '}
            <a href="/claim-nft" className="text-primary underline hover:text-primary/80 font-semibold">Claim NFT</a>{' '}
            page once you have your NFT Asset ID.
          </>
        )
      }
      setStatusType('success')
    } catch (e: any) {
      setStatusMessage(`Stake failed: ${e?.message || String(e)}`)
      setStatusType('error')
    }
    finally {
      setIsProcessing(false)
    }
  }

  

  return (
    <Card className="p-8 bg-card/50 backdrop-blur-sm border border-primary/10">
      <form className="space-y-8" onSubmit={(e) => { e.preventDefault() }}>
        {!isConnected && (
          <Alert className="border border-yellow-500/20 bg-yellow-500/5">
            <AlertCircle className="h-4 w-4 text-yellow-600" />
            <AlertDescription className="ml-2 text-yellow-600">
              Please connect your wallet to stake
            </AlertDescription>
          </Alert>
        )}

        {/* ALGO Amount Input */}
        <div className="space-y-3">
          <Label htmlFor="amount" className="text-base font-semibold">
            ALGO Amount
          </Label>
          <div className="relative">
            <Input
              id="amount"
              type="number"
              placeholder="Enter amount to stake"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              disabled={!isConnected}
              className="pr-12 h-12 text-lg"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
              ALGO
            </span>
          </div>
          <p className="text-sm text-muted-foreground">{isConnected ? (balanceLoading ? 'Balance: loading...' : (algoBalance !== null ? `Balance: ${algoBalance} ALGO` : 'Balance: unavailable')) : 'Balance: 0 ALGO'}</p>
        </div>

        {/* Lock Period Selection */}
        <div className="space-y-4">
          <Label className="text-base font-semibold">Lock Period</Label>
          <RadioGroup value={lockPeriod} onValueChange={(v) => setLockPeriod(v as LockPeriod)} disabled={!isConnected}>
            <div className="space-y-3">
              {[
                { value: "30", label: "30 Days", apr: "8%" },
                { value: "60", label: "60 Days", apr: "10%" },
                { value: "90", label: "90 Days", apr: "12%" }
              ].map((option) => (
                <div
                  key={option.value}
                  className="flex items-center p-4 border border-border rounded-lg cursor-pointer hover:border-primary/50 transition-colors"
                >
                  <RadioGroupItem value={option.value} id={`period-${option.value}`} />
                  <Label
                    htmlFor={`period-${option.value}`}
                    className="flex-1 ml-3 cursor-pointer flex justify-between items-center"
                  >
                    <span>{option.label}</span>
                    <span className="text-sm font-semibold text-primary">Expected APR: {option.apr}</span>
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>

        {/* Estimated Rewards */}
        {amount && (
          <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Estimated Annual Rewards</p>
            <p className="text-2xl font-bold text-primary">{estimatedReward} NAAN</p>
          </div>
        )}

        {statusMessage && (
          <Alert className={`mt-4 ${statusType === 'error' ? 'border border-red-500/20 bg-red-500/5' : statusType === 'success' ? 'border border-green-500/20 bg-green-500/5' : 'border border-blue-500/20 bg-blue-500/5'}`}>
            <AlertDescription className="ml-2">
              {statusMessage}
            </AlertDescription>
          </Alert>
        )}

        {/* Claim NFT flow moved to dedicated Claim NFT page */}

        {/* If not connected, show a dedicated Connect Wallet button. If connect() fails (null), show install/enable guidance. */}
        {!isConnected ? (
          <div>
            <Button
              type="button"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-lg font-semibold py-6 flex items-center justify-center"
              onClick={async () => {
                const addr = await connect()
                if (!addr) setConnectFailed(true)
                else setConnectFailed(false)
              }}
            >
              <Wallet className="mr-2 h-5 w-5" />
              Connect Wallet
            </Button>

            {connectFailed && (
              <Alert className="mt-4 border border-yellow-500/20 bg-yellow-500/5">
                <AlertCircle className="h-4 w-4 text-yellow-600" />
                <AlertDescription className="ml-2 text-yellow-600">
                  Couldn't connect to Pera Wallet. Please install or enable Pera Wallet and allow this site to connect. Get the wallet at{' '}
                  <a className="underline" href="https://perawallet.app" target="_blank" rel="noreferrer">perawallet.app</a>
                </AlertDescription>
              </Alert>
            )}
          </div>
        ) : (
          <Button
            type="button"
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-lg font-semibold py-6"
            onClick={handleStake}
            disabled={isProcessing || !amount || parseFloat(amount) < 1}
          >
            {isProcessing ? 'Processing...' : 'Stake ALGO'}
          </Button>
        )}

        <p className="text-sm text-muted-foreground text-center">
          You will receive an NFT representing your staked position
        </p>

        
      </form>
    </Card>
  )
}
