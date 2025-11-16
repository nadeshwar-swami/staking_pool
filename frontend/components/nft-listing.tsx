"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart } from 'lucide-react'

interface NFTItem {
  id: string
  tokenId: number
  stakedAmount: string
  rewards: string
  price: string
  daysLeft: number
  apr: string
  listed: boolean
}

export function NftListing() {
  const [favorites, setFavorites] = useState<Set<string>>(new Set())

  const nfts: NFTItem[] = [
    {
      id: "1",
      tokenId: 1234567,
      stakedAmount: "1,000 ALGO",
      rewards: "120 NAAN",
      price: "950 ALGO",
      daysLeft: 5,
      apr: "12%",
      listed: true
    },
    {
      id: "2",
      tokenId: 1234568,
      stakedAmount: "5,000 ALGO",
      rewards: "625 NAAN",
      price: "4,800 ALGO",
      daysLeft: 20,
      apr: "10%",
      listed: true
    },
    {
      id: "3",
      tokenId: 1234569,
      stakedAmount: "2,500 ALGO",
      rewards: "312.50 NAAN",
      price: "2,400 ALGO",
      daysLeft: 45,
      apr: "8%",
      listed: true
    },
    {
      id: "4",
      tokenId: 1234570,
      stakedAmount: "750 ALGO",
      rewards: "90 NAAN",
      price: "720 ALGO",
      daysLeft: 10,
      apr: "12%",
      listed: true
    }
  ]

  const toggleFavorite = (id: string) => {
    const newFavorites = new Set(favorites)
    if (newFavorites.has(id)) {
      newFavorites.delete(id)
    } else {
      newFavorites.add(id)
    }
    setFavorites(newFavorites)
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Active Listings</h2>
        <p className="text-muted-foreground">{nfts.length} Stake NFTs available</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {nfts.map((nft) => (
          <Card key={nft.id} className="overflow-hidden bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/10 flex flex-col">
            {/* Card header with favorite button */}
            <div className="p-4 border-b border-border flex justify-between items-start">
              <Badge variant="outline" className="text-xs">
                #{nft.tokenId}
              </Badge>
              <button
                onClick={() => toggleFavorite(nft.id)}
                className="p-1 hover:bg-muted rounded"
              >
                <Heart
                  className={`w-5 h-5 transition-colors ${
                    favorites.has(nft.id)
                      ? "fill-red-500 text-red-500"
                      : "text-muted-foreground"
                  }`}
                />
              </button>
            </div>

            {/* Card body */}
            <div className="p-4 flex-1 space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">Staked Amount</p>
                <p className="font-semibold text-lg">{nft.stakedAmount}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Accrued Rewards</p>
                <p className="font-semibold text-primary">{nft.rewards}</p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-muted-foreground">APR</p>
                  <p className="font-semibold">{nft.apr}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Days Left</p>
                  <p className="font-semibold">{nft.daysLeft}</p>
                </div>
              </div>
            </div>

            {/* Card footer */}
            <div className="p-4 border-t border-border space-y-3">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Price</p>
                <p className="text-xl font-bold text-primary">{nft.price}</p>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Buy Now
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
