import { Card } from "@/components/ui/card"
import { useState } from "react"
import { Sheet } from "@/components/ui/sheet"
import { ShoppingCart, TrendingUp } from 'lucide-react'
import { X } from 'lucide-react'

interface MarketplaceHeaderProps {
  onSellNFT: (nftAssetId: string, price: string) => Promise<void>
}

export function MarketplaceHeader({ onSellNFT }: MarketplaceHeaderProps) {
  const [open, setOpen] = useState(false);
  const [nftId, setNftId] = useState("");
  const [price, setPrice] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className="mb-12">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
        NFT Marketplace
      </h1>
      <p className="text-xl text-muted-foreground mb-8">
        Sell your Stake NFT for sale. Buyers can purchase and then redeem the staked ALGO + rewards
      </p>

      {/* Two info sections */}
      <div className="grid md:grid-cols-1 gap-6">
        <button
          className="px-6 py-2 flex items-center justify-center bg-primary text-white rounded-full border-none shadow-sm font-semibold hover:bg-primary/80 transition-colors cursor-pointer"
          style={{ minWidth: '180px', minHeight: '48px', maxWidth: '220px' }}
          onClick={() => setOpen(true)}
        >
          <ShoppingCart className="w-6 h-6 text-white mr-2" />
          <span className="text-base font-semibold">Sell Your NFT</span>
        </button>
      </div>

      <div className="mt-6 mb-6">
        <p className="text-left text-muted-foreground text-base font-normal max-w-2xl">
          List your Stake NFT for sale and let buyers purchase your staked positions
        </p>
      </div>

      {/* Modal for selling NFT - new UI */}
      {open && (
        <Sheet open={open} onOpenChange={setOpen}>
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-card p-8 rounded-2xl shadow-lg w-full max-w-2xl relative">
              <button
                className="absolute top-4 right-4 transition-colors"
                aria-label="Close"
                onClick={() => setOpen(false)}
              >
                <X className="w-6 h-6" style={{ color: '#fff' }} />
              </button>
              <h2 className="text-2xl font-bold mb-6">Sell Your NFT</h2>
              <form className="flex flex-col gap-6">
                <div className="flex flex-col md:flex-row gap-4 mb-2">
                  <div className="flex-1">
                    <label className="block mb-2 font-medium">NFT Asset ID</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      value={nftId}
                      onChange={e => setNftId(e.target.value)}
                      placeholder="Enter NFT Asset ID"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block mb-2 font-medium">Price in ALGO</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      value={price}
                      onChange={e => setPrice(e.target.value)}
                      placeholder="Enter price"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 mt-2">
                  <button
                    type="button"
                    className="w-full py-3 bg-primary text-white rounded-full font-semibold text-base hover:bg-primary/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                    onClick={async () => {
                      if (nftId && price && !isSubmitting) {
                        setIsSubmitting(true);
                        try {
                          await onSellNFT(nftId, price);
                          setNftId("");
                          setPrice("");
                          setOpen(false);
                        } catch (error) {
                          console.error('Error listing NFT:', error);
                        } finally {
                          setIsSubmitting(false);
                        }
                      }
                    }}
                  >{isSubmitting ? 'Listing...' : 'Sell Now'}</button>
                </div>
              </form>
            </div>
          </div>
        </Sheet>
      )}
    </div>
  )
}
