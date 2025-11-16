"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { StakingForm } from "@/components/staking-form"
import { StakingStats } from "@/components/staking-stats"

export default function StakePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="flex-1 py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-8 lg:mb-12">
            <div className="grid lg:grid-cols-4 gap-8 items-stretch">
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
                    Stake ALGO
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    Lock your tokens and earn rewards in Naan
                  </p>
                </div>

                {/* Staking form placed immediately under heading so it's higher on the page */}
                <div className="transform lg:scale-90 lg:origin-top-left">
                  <StakingForm />
                </div>

                
              </div>

              <div className="w-full lg:col-span-2 lg:transform lg:translate-x-8 h-full">
                <StakingStats />
              </div>
            </div>
          </div>
          {/* Full-width: What Happens Next? (aligned with grid edges) */}
          <div className="-mt-6 lg:-mt-8">
            <div className="p-6 bg-secondary/5 border border-secondary/20 space-y-3 rounded-lg">
              <h3 className="font-semibold">What Happens Next?</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Your ALGO is locked in the smart contract</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>The NFT represents your stake position</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>After lock-in period ends, use the NFT to redeem your ALGO + rewards</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Go to the "Unstake" page and enter your NFT Asset ID to redeem</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
