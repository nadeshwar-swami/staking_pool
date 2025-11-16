import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

interface NFTListing {
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

const DB_PATH = path.join(process.cwd(), 'db.json')

function readDb() {
  try {
    const data = fs.readFileSync(DB_PATH, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    return { listings: [] }
  }
}

function writeDb(data: any) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf-8')
}

// GET - Fetch all listings
export async function GET() {
  try {
    const db = readDb()
    return NextResponse.json({ listings: db.listings || [] })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch listings' }, { status: 500 })
  }
}

// POST - Create new listing
export async function POST(request: NextRequest) {
  try {
    const listing: NFTListing = await request.json()
    const db = readDb()
    
    // Check if this NFT is already listed
    const existingIndex = db.listings.findIndex((l: NFTListing) => l.tokenId === listing.tokenId)
    if (existingIndex !== -1) {
      return NextResponse.json({ error: 'This NFT is already listed' }, { status: 400 })
    }
    
    // Add timestamp
    listing.createdAt = Date.now()
    
    db.listings.push(listing)
    writeDb(db)
    
    return NextResponse.json({ success: true, listing })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create listing' }, { status: 500 })
  }
}

// DELETE - Remove listing
export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json()
    const db = readDb()
    
    db.listings = db.listings.filter((l: NFTListing) => l.id !== id)
    writeDb(db)
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete listing' }, { status: 500 })
  }
}

