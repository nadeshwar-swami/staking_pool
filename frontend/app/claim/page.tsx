"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ClaimForm } from "@/components/claim-form"
import { UserStakingPositions } from "@/components/user-staking-positions"

export default function ClaimPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="flex-1 py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
              Unstake (Redeem) Your ALGO
            </h1>
            <p className="text-xl text-muted-foreground">
              View your staking positions and redeem after your lock period ends
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Claim form */}
            <div className="lg:col-span-2">
              <ClaimForm />
            </div>

            {/* Real staking positions */}
            <div>
              <UserStakingPositions />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
