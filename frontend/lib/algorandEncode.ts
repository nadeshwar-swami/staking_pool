import { encode } from '@msgpack/msgpack'

const utf8 = (s: string) => new TextEncoder().encode(s)

function sortKeys(entries: [string, any][]) {
  entries.sort((a, b) => {
    const ka = utf8(a[0])
    const kb = utf8(b[0])
    const n = Math.min(ka.length, kb.length)
    for (let i = 0; i < n; i++) {
      if (ka[i] !== kb[i]) return ka[i] - kb[i]
    }
    return ka.length - kb.length
  })
  return entries
}

function toPlainMap(tx: any, suggestedParams: any, appId?: number, appArg?: Uint8Array) {
  const snd = tx.sender ? (tx.sender.publicKey ? tx.sender.publicKey : tx.sender) : undefined
  const rcv = tx.paymentParams?.receiver || tx.paymentParams?.rcv || tx.receiver
  const amt = tx.paymentParams?.amount || tx.amount
  const fee = suggestedParams?.fee ?? 0
  const fv = suggestedParams?.firstValid ?? suggestedParams?.firstRound
  const lv = suggestedParams?.lastValid ?? suggestedParams?.lastRound
  const gen = suggestedParams?.genesisID || ''
  const gh = suggestedParams?.genesisHash ? (typeof suggestedParams.genesisHash === 'string' ? (function(){ const b=atob(suggestedParams.genesisHash); const u=new Uint8Array(b.length); for(let i=0;i<b.length;i++)u[i]=b.charCodeAt(i); return u })() : suggestedParams.genesisHash) : new Uint8Array()

  const common: any = {
    snd: snd,
    fee: BigInt(Number(fee || 0)),
    fv: BigInt(Number(fv || 0)),
    lv: BigInt(Number(lv || 0)),
    gen: gen,
    gh: gh
  }

  if (tx.type === 'pay' || tx.type === 'pay' || tx.paymentParams) {
    return {
      ...common,
      type: 'pay',
      amt: BigInt(Number(amt || 0)),
      rcv: rcv?.publicKey ?? rcv
    }
  }

  if (tx.type === 'appl' || tx.appCallParams) {
    return {
      ...common,
      type: 'appl',
      apid: BigInt(Number(appId || tx.appCallParams?.appIndex || 0)),
      apan: BigInt(Number(tx.appCallParams?.onComplete || 0)),
      apaa: appArg ? [appArg] : (tx.appCallParams?.appArgs || [])
    }
  }

  return common
}

export function encodeTxnsCanonical(txns: any[], suggestedParams: any, appId?: number, appArg?: Uint8Array) {
  const plain = txns.map(t => toPlainMap(t, suggestedParams, appId, appArg))
  // For each plain map, create ordered entries and encode using msgpack
  const encoded: Uint8Array[] = plain.map((p, idx) => {
    try {
      const entries = sortKeys(Object.entries(p))
      const m = new Map<any, any>()
      for (const [k, v] of entries) {
        m.set(k, v)
      }
      const enc = encode(m)
      return enc
    } catch (e) {
      return new Uint8Array()
    }
  })
  return encoded
}

export default encodeTxnsCanonical
