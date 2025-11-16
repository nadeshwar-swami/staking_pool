"use client"

import Link from "next/link"
import { usePathname } from 'next/navigation'
import { ThemeToggle } from "@/components/theme-toggle"
import { WalletButton } from "@/components/wallet-button"
import { Button } from "@/components/ui/button"
import { MobileMenu } from "@/components/mobile-menu"
import { useState, useEffect } from "react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isHomepage = pathname === "/"
  const isFaqPage = pathname === "/faq";

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="hover:opacity-80 transition-opacity font-bold text-xl">
            <span className="text-primary text-left">NaanFi</span>
          </Link>

          {(isHomepage || isFaqPage) ? (
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                Home
              </Link>
              <a href="https://github.com/NaanFi" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-primary transition-colors">
                Docs
              </a>
              <Link href="/faq" className="text-sm font-medium hover:text-primary transition-colors">
                FAQ
              </Link>
              <a href="https://algorand.co/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-primary transition-colors">
                Algorand
              </a>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/stake" className="text-sm font-medium hover:text-primary transition-colors">
                Stake
              </Link>
              <Link href="/claim" className="text-sm font-medium hover:text-primary transition-colors">
                Unstake
              </Link>
              <Link href="/claim-nft" className="text-sm font-medium hover:text-primary transition-colors">
                Claim NFT
              </Link>
              <Link href="/marketplace" className="text-sm font-medium hover:text-primary transition-colors">
                Marketplace
              </Link>
            </div>
          )}

          <div className="flex items-center gap-4">
            {(isHomepage || isFaqPage) ? (
              <Button asChild>
                <Link href="/stake">Stake & earn</Link>
              </Button>
            ) : (
              <WalletButton />
            )}
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  )
}
