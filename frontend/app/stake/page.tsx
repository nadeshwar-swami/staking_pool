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
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
              Stake ALGO
            </h1>
            <p className="text-xl text-muted-foreground">
              Lock your tokens and earn rewards in Naan
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main staking form */}
            <div className="lg:col-span-2">
              <StakingForm />
            </div>

            {/* Side stats */}
            <div>
              <StakingStats />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
