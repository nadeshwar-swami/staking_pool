import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, AlertCircle } from 'lucide-react'

export function StakingPositions() {
  const positions = [
    {
      id: 1234567,
      amount: "1,000 ALGO",
      rewards: "120 NAAN",
      status: "ready",
      daysLeft: 0
    },
    {
      id: 1234568,
      amount: "5,000 ALGO",
      rewards: "625 NAAN",
      status: "active",
      daysLeft: 15
    },
    {
      id: 1234569,
      amount: "2,500 ALGO",
      rewards: "312.50 NAAN",
      status: "active",
      daysLeft: 42
    }
  ]

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">Your Staking Positions</h3>
      
      <div className="space-y-3">
        {positions.map((position) => (
          <Card key={position.id} className="p-4 bg-card/50 backdrop-blur-sm border border-primary/10">
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-sm text-muted-foreground">Asset ID</p>
                  <p className="font-mono font-semibold">{position.id}</p>
                </div>
                <Badge
                  variant={position.status === "ready" ? "default" : "secondary"}
                  className={position.status === "ready" ? "bg-secondary" : ""}
                >
                  {position.status === "ready" ? (
                    <CheckCircle className="w-3 h-3 mr-1" />
                  ) : (
                    <Clock className="w-3 h-3 mr-1" />
                  )}
                  {position.status === "ready" ? "Ready" : "Active"}
                </Badge>
              </div>

              <div className="space-y-1 text-sm">
                <p><span className="text-muted-foreground">Staked:</span> <span className="font-semibold">{position.amount}</span></p>
                <p><span className="text-muted-foreground">Rewards:</span> <span className="font-semibold text-primary">{position.rewards}</span></p>
                {position.daysLeft > 0 && (
                  <p><span className="text-muted-foreground">Days Left:</span> <span className="font-semibold">{position.daysLeft}</span></p>
                )}
              </div>

              {position.status === "ready" && (
                <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-sm">
                  Claim Rewards
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Empty state hint */}
      <Card className="p-4 bg-muted/30 border border-border">
        <div className="flex gap-3">
          <AlertCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            Connected wallet shows 3 active positions
          </p>
        </div>
      </Card>
    </div>
  )
}
