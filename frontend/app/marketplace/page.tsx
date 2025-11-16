"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MarketplaceHeader } from "@/components/marketplace-header"
import { NftListing } from "@/components/nft-listing"

export default function MarketplacePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="flex-1 py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <MarketplaceHeader />
          <NftListing />
        </div>
      </section>

      <Footer />
    </main>
  )
}
