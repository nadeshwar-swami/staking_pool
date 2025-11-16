#!/usr/bin/env node
/*
  Usage: node scripts/generate_unsigned_txns.js --from <address> --amount <microAlgos> --app <appId>
  Prints two base64 unsigned transactions (payment, appcall) suitable for passing to signers.
*/
const algosdk = require('algosdk')
// Simple argv parser (avoid extra dependency)
function parseArgs() {
  const args = {}
  const raw = process.argv.slice(2)
  for (let i = 0; i < raw.length; i++) {
    const a = raw[i]
    if (a.startsWith('--')) {
      const key = a.slice(2)
      const next = raw[i+1]
      if (next && !next.startsWith('-')) {
        args[key] = next
        i++
      } else {
        args[key] = true
      }
    } else if (a.startsWith('-')) {
      const key = a.slice(1)
      const next = raw[i+1]
      if (next && !next.startsWith('-')) {
        args[key] = next
        i++
      } else {
        args[key] = true
      }
    }
  }
  return args
}
const argv = parseArgs()

const ALGOD_SERVER = 'https://testnet-api.algonode.cloud'
const ALGOD_TOKEN = ''
const algodClient = new algosdk.Algodv2(ALGOD_TOKEN, ALGOD_SERVER, '')

async function main() {
  const from = argv.from || argv.f
  const amount = Number(argv.amount || argv.a || 1000000)
  const appId = Number(argv.app || argv.appid || argv.i || process.env.APP_ID)

  if (!from) {
    console.error('Missing --from address')
    process.exit(2)
  }
  if (!appId) {
    console.error('Missing --app appId (or set APP_ID env)')
    process.exit(2)
  }

  try {
    // Print Node and algosdk versions for debugging
    try { console.log('DEBUG Node version:', process.version) } catch (_) {}
    try { console.log('DEBUG algosdk version check, Transaction exists:', Boolean(algosdk && (algosdk.Transaction || (algosdk.transaction && algosdk.transaction.Transaction)))) } catch (_) {}
    const rawParams = await algodClient.getTransactionParams().do()
    console.log('DEBUG rawParams keys:', Object.keys(rawParams))
    // sanitize BigInt
    const params = {}
    for (const k of Object.keys(rawParams)) {
      const v = rawParams[k]
      params[k] = (typeof v === 'bigint') ? Number(v) : v
    }

    const suggestedParams = {
      flatFee: Boolean(params.flatFee),
      fee: Number(params.fee || 0),
      firstRound: Number(params.firstRound || params.firstValid),
      lastRound: Number(params.lastRound || params.lastValid),
      firstValid: Number(params.firstValid || params.firstRound),
      lastValid: Number(params.lastValid || params.lastRound),
      genesisID: params.genesisID,
      genesisHash: params.genesisHash,
      // include minFee so algosdk Transaction constructor can compute sizes
      minFee: Number(params.minFee || params.minFee === 0 ? params.minFee : params.fee || 1000)
    }

    const appAddr = algosdk.getApplicationAddress(appId)
    console.log('DEBUG: from=', from)
    console.log('DEBUG: appAddr=', appAddr)
    console.log('DEBUG: suggestedParams=', suggestedParams)

    // payment txn - use manual Transaction constructor to avoid helper shape issues
    const TxConstructor = algosdk.Transaction || (algosdk.transaction && algosdk.transaction.Transaction)
    if (!TxConstructor) throw new Error('Transaction constructor not found on algosdk')

    const appAddrStr = typeof appAddr === 'string' ? appAddr : appAddr.toString()
    // Validate and coerce numeric fields to avoid algosdk ensureBigInt errors
    const feeVal = suggestedParams.fee != null ? suggestedParams.fee : 0
    const fv = suggestedParams.firstValid != null ? suggestedParams.firstValid : suggestedParams.firstRound
    const lv = suggestedParams.lastValid != null ? suggestedParams.lastValid : suggestedParams.lastRound

    if (fv == null || lv == null) throw new Error('Missing firstValid/lastValid in suggested params')

    const txObj = {
      type: 'pay',
      sender: String(from),
      suggestedParams: {
        flatFee: Boolean(suggestedParams.flatFee),
        fee: BigInt(Number(feeVal || 0)),
        firstValid: BigInt(Number(fv)),
        lastValid: BigInt(Number(lv)),
        genesisID: suggestedParams.genesisID,
        genesisHash: suggestedParams.genesisHash,
        minFee: BigInt(Number(suggestedParams.minFee || 1000))
      },
      paymentParams: {
        receiver: appAddrStr,
        amount: BigInt(Number(amount))
      }
    }
    console.log('DEBUG txObj:', JSON.stringify({ type: txObj.type, sender: txObj.sender, paymentParams: { receiver: txObj.paymentParams.receiver, amount: String(txObj.paymentParams.amount) }, suggestedParams: { fee: String(txObj.suggestedParams.fee), firstValid: String(txObj.suggestedParams.firstValid), lastValid: String(txObj.suggestedParams.lastValid), genesisID: txObj.suggestedParams.genesisID } }))
    let payTxn
    try {
      payTxn = new TxConstructor(txObj)
    } catch (e) {
      console.error('ERROR constructing payTxn:', e && e.stack ? e.stack : e)
      throw e
    }

    // app call (no-op with arg 'stake')
    const appArg = new TextEncoder().encode('stake')
    const appTxObj = {
      type: 'appl',
      sender: String(from),
      suggestedParams: txObj.suggestedParams,
      appCallParams: {
        appIndex: Number(appId),
        onComplete: 0,
        appArgs: [appArg]
      }
    }
    // Coerce app index to BigInt where needed by encoder
    if (appTxObj.appCallParams && appTxObj.appCallParams.appIndex == null) throw new Error('Missing appIndex')
    appTxObj.appCallParams.appIndex = BigInt(Number(appTxObj.appCallParams.appIndex))
    console.log('DEBUG appTxObj:', JSON.stringify({ type: appTxObj.type, sender: appTxObj.sender, appCallParams: { appIndex: String(appTxObj.appCallParams.appIndex), onComplete: appTxObj.appCallParams.onComplete }, suggestedParams: { fee: String(appTxObj.suggestedParams.fee), firstValid: String(appTxObj.suggestedParams.firstValid), lastValid: String(appTxObj.suggestedParams.lastValid) } }))
    let appTxn
    try {
      appTxn = new TxConstructor(appTxObj)
    } catch (e) {
      console.error('ERROR constructing appTxn:', e && e.stack ? e.stack : e)
      throw e
    }

    // group
    const txns = [payTxn, appTxn]
    algosdk.assignGroupID(txns)

    let enc1, enc2
    try {
      enc1 = algosdk.encodeUnsignedTransaction(txns[0])
      enc2 = algosdk.encodeUnsignedTransaction(txns[1])
      console.log('DEBUG enc lengths:', enc1.length, enc2.length)
    } catch (e) {
      console.error('ERROR encoding unsigned txns:', e && e.stack ? e.stack : e)
      throw e
    }

    const toB64 = (u8) => {
      let s = ''
      for (let i = 0; i < u8.length; i++) s += String.fromCharCode(u8[i])
      return Buffer.from(s, 'binary').toString('base64')
    }

    console.log('UNSIGNED_BASE64S:')
    console.log(toB64(enc1))
    console.log(toB64(enc2))
    process.exit(0)
  } catch (e) {
    console.error('Error generating txns:', e)
    process.exit(3)
  }
}

main()
