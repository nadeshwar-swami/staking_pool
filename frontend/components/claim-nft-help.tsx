import { Card } from "@/components/ui/card"
import { Info, CheckCircle2 } from 'lucide-react'

export function ClaimNftHelp() {
  return (
    <div className="space-y-4">
      {/* Important Info */}
      <Card className="p-6 bg-yellow-500/5 border border-yellow-500/20 space-y-3">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-yellow-600 dark:text-yellow-400 mb-2">About NFT Claims</h3>
            <p className="text-sm text-muted-foreground">
              After staking, you need to complete a 2-step process to receive your position NFT. This NFT proves ownership of your stake.
            </p>
          </div>
        </div>
      </Card>

      {/* NFT Claim Process */}
      <Card className="p-6 bg-card/50 backdrop-blur-sm border border-primary/10 space-y-4">
        <h3 className="font-semibold text-lg">📦 2-Step Claim Process</h3>
        
        <div className="space-y-4">
          {/* Step 1 */}
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
              1
            </div>
            <div>
              <h4 className="font-semibold mb-1">Opt-in to NFT</h4>
              <p className="text-sm text-muted-foreground">
                Click "1️⃣ Opt-in to NFT" button. This allows your wallet to receive the specific NFT asset.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
              2
            </div>
            <div>
              <h4 className="font-semibold mb-1">Claim NFT</h4>
              <p className="text-sm text-muted-foreground">
                Click "2️⃣ Claim NFT" button. The NFT will be transferred from the app to your wallet.
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-border">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground">
                <strong>Cost:</strong> ~0.002 ALGO in transaction fees for both steps
              </p>
            </div>
            <div className="flex items-start gap-2 mt-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground">
                <strong>Time:</strong> ~30 seconds per transaction confirmation
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* What's Next */}
      <Card className="p-6 bg-secondary/5 border border-secondary/20 space-y-3">
        <h3 className="font-semibold">After Claiming Your NFT</h3>
        <ul className="text-sm text-muted-foreground space-y-2">
          <li className="flex gap-2">
            <span className="text-primary font-bold">•</span>
            <span>The NFT will appear in your wallet</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold">•</span>
            <span>The NFT represents your staking position</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Keep it safe until your lock period ends</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Use the <a href="/claim" className="underline text-primary">Unstake</a> page to redeem your ALGO + rewards</span>
          </li>
        </ul>
      </Card>
    </div>
  )
}
