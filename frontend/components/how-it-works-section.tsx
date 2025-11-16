import { Card } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'

export function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Connect Wallet",
      description: "Link your Algorand wallet to our platform securely."
    },
    {
      number: "2",
      title: "Choose Amount & Lock Period",
      description: "Select how much ALGO to stake and your preferred lock duration."
    },
    {
      number: "3",
      title: "Start Earning",
      description: "Immediately begin earning rewards with your staked tokens."
    },
    {
      number: "4",
      title: "Claim Rewards",
      description: "Redeem your NFT stake token to claim rewards after lock period ends."
    }
  ]

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Get started with NaanFi in just 4 simple steps.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, idx) => (
            <Card key={idx} className="p-8 bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 border border-primary/30">
                    <span className="text-lg font-bold text-primary">{step.number}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 font-mono">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
