"use client"

import React, { createContext, useContext, useRef, useState } from "react"

interface WalletContextType {
  isConnected: boolean
  walletAddress: string | null
  connect: () => Promise<string | null>
  disconnect: () => void
  signTransactions?: (txns: any[][]) => Promise<Uint8Array[] | null>
}

const WalletContext = createContext<WalletContextType | undefined>(undefined)

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [isConnected, setIsConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState<string | null>(null)
  // pera wallet instance (lazy) stored in a ref so it persists across renders
  const peraWalletRef = useRef<any>(null)

  const connect = async (): Promise<string | null> => {
    try {
      // Dynamically import PeraWalletConnect so dev doesn't break if package isn't installed
      const mod = await import("@perawallet/connect")
      const PeraWalletConnect = mod.default || mod.PeraWalletConnect || mod
      if (!peraWalletRef.current) {
        peraWalletRef.current = new PeraWalletConnect()
      }

      // Attempt to reconnect to existing session first
      try {
        const recon = await peraWalletRef.current.reconnectSession()
        if (recon && recon.length) {
          const addr = Array.isArray(recon) ? recon[0] : recon
          setWalletAddress(String(addr))
          setIsConnected(true)
          // expose underlying connector for dev debugging
          try {
            if (typeof window !== 'undefined') (window as any).__peraConnector = peraWalletRef.current?.connector
          } catch (e) {}
          // subscribe disconnect
          peraWalletRef.current.connector?.on("disconnect", () => disconnect())
          return String(addr)
        }
      } catch (e) {
        // ignore reconnect error
      }

      const accounts: any = await peraWalletRef.current.connect()
      // pera may return an array of addresses or an object — handle both
      let address: string | null = null
      if (Array.isArray(accounts) && accounts.length > 0) address = accounts[0]
      // some versions return { account: '...', address: '...' }
      if (!address && accounts) {
        address = accounts.account || accounts.address || (accounts.accounts && accounts.accounts[0]) || null
      }

      if (address) {
        setWalletAddress(address)
        setIsConnected(true)
        // expose underlying connector for dev debugging
        try {
          if (typeof window !== 'undefined') (window as any).__peraConnector = peraWalletRef.current?.connector
        } catch (e) {}
        peraWalletRef.current.connector?.on("disconnect", () => disconnect())
        return address
      } else {
        throw new Error("No account returned from Pera")
      }
    } catch (error) {
      // Do not fallback to a mock address. Let caller handle null return.
      return null
    }
  }

  const disconnect = () => {
    try {
      // attempt to disconnect Pera session if available
      ;(async () => {
        try {
          if (peraWalletRef.current) {
            await peraWalletRef.current.disconnect()
            peraWalletRef.current = null
            try { if (typeof window !== 'undefined') (window as any).__peraConnector = undefined } catch (e) {}
          }
        } catch (e) {
          // ignore
        }
      })()
    } catch (e) {
      // ignore
    }
    setWalletAddress(null)
    setIsConnected(false)
  }

  const signTransactions = async (txnGroups: any[][]): Promise<Uint8Array[] | null> => {
    try {
      if (!peraWalletRef.current) {
        const mod = await import("@perawallet/connect")
        const PeraWalletConnect = mod.default || mod.PeraWalletConnect || mod
        peraWalletRef.current = new PeraWalletConnect()
      }
      // Normalize and flatten txnGroups to a flat array of Uint8Array (raw unsigned txn bytes).
      const toU8 = (t: any) => {
        if (typeof t === 'string') {
          const bin = atob(t)
          const u8 = new Uint8Array(bin.length)
          for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i)
          return u8
        }
        if (t instanceof Uint8Array) return t
        if (t && (t as any).txn) {
          const b64 = (t as any).txn
          const bin = atob(b64)
          const u8 = new Uint8Array(bin.length)
          for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i)
          return u8
        }
        // fallback: try to atob the string coercion
        try {
          const str = String(t)
          const bin = atob(str)
          const u8 = new Uint8Array(bin.length)
          for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i)
          return u8
        } catch (e) {
          throw new Error('Unable to normalize transaction payload to Uint8Array')
        }
      }

      const flattened: Uint8Array[] = txnGroups.flat().map(toU8)

      // First, try passing a flat array of base64 strings (avoid Uint8Array transport issues)
      try {
        const flattenedB64 = flattened.map((u) => {
          let binary = ''
          for (let i = 0; i < u.length; i++) binary += String.fromCharCode(u[i])
          return btoa(binary)
        })
        const signed = await peraWalletRef.current.signTransaction(flattenedB64)
        return signed
        } catch (firstErr) {
        try {
        } catch (__) {
        }
        // Next, try raw Uint8Array (existing path)
        try {
          const signedRaw = await peraWalletRef.current.signTransaction(flattened)
          return signedRaw
        } catch (secondTryErr) {
        }
        // helper to convert uint8array -> base64
        const u8ToB64 = (u8: Uint8Array) => {
          let binary = ''
          for (let i = 0; i < u8.length; i++) binary += String.fromCharCode(u8[i])
          return btoa(binary)
        }
        // Build grouped { txn: base64 } objects matching the original grouping structure
        const alt = txnGroups.map((g: any[]) => g.map((t) => {
          const u = toU8(t)
          return { txn: u8ToB64(u), signers: [], message: 'Please sign this transaction' }
        }))
        try {
          const signed2 = await peraWalletRef.current.signTransaction(alt)
          return signed2
        } catch (secondErr) {
          throw secondErr
        }
      }
    } catch (e) {
      // As a last resort, try low-level WalletConnect RPC on the underlying connector to avoid Pera's helper re-encoding.
      try {
        const connector = peraWalletRef.current?.connector
        if (!connector) {
          console.warn('[WALLET] no underlying connector available for low-level RPC')
          return null
        }

        // Build grouped base64 payload same shape as original groups
        const u8ToB64 = (u8: Uint8Array) => {
          let binary = ''
          for (let i = 0; i < u8.length; i++) binary += String.fromCharCode(u8[i])
          return btoa(binary)
        }
        const groupedB64 = txnGroups.map((g: any[]) => g.map((t) => {
          if (typeof t === 'string') return t
          if (t instanceof Uint8Array) return u8ToB64(t)
          if (t && t.txn) return String(t.txn)
          // coerce
          try { return u8ToB64(new Uint8Array(t)) } catch (_) { return String(t) }
        }))

        // Algorand WalletConnect spec requires algo_signTxn with specific format
        const tryMethods = ['algo_signTxn']

        // Helper to attempt a request using connector APIs
        const trySend = async (method: string, params: any) => {
          // WalletConnect v1 connectors expose sendCustomRequest
          if (typeof connector.sendCustomRequest === 'function') {
            return await connector.sendCustomRequest({ method, params })
          }
          // WalletConnect v2 connectors (or other) may expose request
          if (typeof connector.request === 'function') {
            try {
              return await connector.request({ method, params })
            } catch (e) {
              // some connectors expect { topic, chainId, request }
              try {
                return await connector.request({
                  topic: connector.session?.topic,
                  chainId: connector.session?.namespaces?.algorand?.chains?.[0] || 'algorand:testnet',
                  request: { method, params }
                })
              } catch (ee) {
                throw ee
              }
            }
          }
          throw new Error('Connector does not support sendCustomRequest or request')
        }

        // Format transactions according to Algorand WalletConnect spec:
        // Each txn must be { txn: base64, message?: string, signers?: string[] }
        const formattedTxns = groupedB64.flat().map((txnB64: string) => ({
          txn: txnB64,
          message: 'Please sign this transaction'
        }))

        for (const m of tryMethods) {
          try {
            // Pera expects params to be a single array argument: [ formattedTxns ]
            const res = await trySend(m, [formattedTxns])
            // The response shape may vary; try to normalize to Uint8Array[]
            if (!res) continue
            // If response is nested groups, flatten
            const flatten = (r: any) => {
              if (Array.isArray(r)) {
                return r.flatMap((x: any) => Array.isArray(x) ? x : [x])
              }
              return [r]
            }
            const raw = flatten(res)
            const toU8 = (item: any) => {
              if (typeof item === 'string') {
                const bin = atob(item)
                const u8 = new Uint8Array(bin.length)
                for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i)
                return u8
              }
              if (item && item.blob) {
                const bin = atob(item.blob)
                const u8 = new Uint8Array(bin.length)
                for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i)
                return u8
              }
              if (item instanceof Uint8Array) return item
              return null
            }
            const signedArr = raw.map((r: any) => toU8(r)).filter((x: any) => x != null) as Uint8Array[]
            if (signedArr.length) return signedArr
          } catch (rpcErr) {
            continue
          }
        }
        
        return null
      } catch (finalErr) {
        
        return null
      }
    }
  }

  // Expose a dev-only helper for quick testing in the browser console:
  try {
    if (typeof window !== 'undefined') {
      ;(window as any).__peraSign = async (groupedB64OrU8: any) => {
        // normalize input to grouping shape expected by signTransactions
        const asGroups = Array.isArray(groupedB64OrU8) && Array.isArray(groupedB64OrU8[0]) ? groupedB64OrU8 : [groupedB64OrU8]
        return await signTransactions(asGroups as any)
      }
      // expose underlying connector for dev-only low-level RPC tests
      ;(window as any).__setPeraConnector = (c: any) => { (window as any).__peraConnector = c }
    }
  } catch (e) {
    // ignore attach errors in constrained runtimes
  }

  return (
    <WalletContext.Provider value={{ isConnected, walletAddress, connect, disconnect, signTransactions }}>
      {children}
    </WalletContext.Provider>
  )
}

export function useWallet() {
  const context = useContext(WalletContext)
  if (!context) {
    throw new Error("useWallet must be used within a WalletProvider")
  }
  return context
}
