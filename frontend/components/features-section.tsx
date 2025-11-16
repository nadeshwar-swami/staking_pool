import { Card } from "@/components/ui/card"
import { Lock, Zap, TrendingUp, Wallet } from 'lucide-react'

export function FeaturesSection() {
  const features = [
    {
      icon: Lock,
      title: "Liquidity Without Unstaking",
      description: "Traditional staking locks your tokens for months. NaanFi solves this by transforming every staking position into a tradable NFT, allowing users to sell, transfer, or leverage their stake anytime—without waiting for the lock period to end."
    },
    {
      icon: Zap,
      title: "Boosted Yields With Flexible Ownership",
      description: "NaanFi offers time-locked multipliers, rewards boosters, and dynamic earning models. What makes it unique is that these boosted positions are fully transferable, meaning users can buy, sell, or upgrade high-yield NFTs in the open market."
    },
    {
      icon: TrendingUp,
      title: "Built for the Modern DeFi User",
      description: "NaanFi combines clean UX with powerful DeFi mechanics—staking, unstaking, rewards, and StakeNFT—all in a unified, intuitive dashboard. No complex setup. No confusing interactions. Everything is gas-optimized, transparent, and beginner-friendly."
    },
    {
      icon: Wallet,
      title: "A Future-Ready Financial Primitive",
      description: "With StakeNFT, NaanFi becomes more than a staking platform. It evolves into a DeFi ecosystem that enables: Marketplace trading of staked positions. Collateralization (StakeNFT-backed loans). Gamified levels & seasonal staking. DAO treasury tools. It’s not just staking—it's a new layer of financial utility."
    }
  ]

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">Why Choose NaanFi?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Experience the benefits of decentralized staking with industry-leading security and returns.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <Card key={idx} className="p-6 bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 font-mono leading-[1.8rem]">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
