import { JSONFilePreset } from 'lowdb/node'

export interface NFTListing {
  id: string
  tokenId: number
  stakedAmount: string
  rewards: string
  price: string
  daysLeft: number
  apr: string
  listed: boolean
  seller: string
  createdAt: number
}

interface Database {
  listings: NFTListing[]
}

// Use a singleton pattern to ensure only one instance
let db: Awaited<ReturnType<typeof JSONFilePreset<Database>>> | null = null

export async function getDb() {
  if (!db) {
    db = await JSONFilePreset<Database>('db.json', { listings: [] })
  }
  return db
}
