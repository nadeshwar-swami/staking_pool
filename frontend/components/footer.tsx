import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">NaanFi</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              © 2025 NaanFi. All rights reserved.<br />
              MIT, Algorand, and other relevant licenses.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigate</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/stake" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Stake
                </Link>
              </li>
              <li>
                <Link href="/claim" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Unstake
                </Link>
              </li>
              <li>
                <Link href="/claim-nft" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Claim NFT
                </Link>
              </li>
              <li>
                <Link href="/marketplace" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://github.com/NaanFi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
