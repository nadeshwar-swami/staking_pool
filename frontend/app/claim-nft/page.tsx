"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ClaimNftForm } from "@/components/claim-nft-form"
import { ClaimNftHelp } from "@/components/claim-nft-help"

export default function ClaimNftPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <section className="flex-1 py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-6">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
              Claim Your NFT
            </h1>
            <p className="text-xl text-muted-foreground">
              Complete the 2-step process to receive your position NFT
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Claim NFT form */}
            <div className="lg:col-span-2">
              <ClaimNftForm />
            </div>

            {/* Help sidebar */}
            <div className="self-start">
              <ClaimNftHelp />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
