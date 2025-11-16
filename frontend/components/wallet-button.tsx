"use client"

import { Button } from "@/components/ui/button"
import { useWallet } from "@/components/wallet-context"
import { Wallet, LogOut } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function WalletButton() {
  const { isConnected, walletAddress, connect, disconnect } = useWallet()

  if (!isConnected) {
    return (
      <Button
        onClick={connect}
        className="bg-primary hover:bg-primary/90"
      >
        <Wallet className="w-4 h-4 mr-2" />
        Connect Wallet
      </Button>
    )
  }

  const displayAddress = walletAddress
    ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
    : "Connected"

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="border-primary/30">
          <Wallet className="w-4 h-4 mr-2" />
          {displayAddress}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={disconnect} className="text-red-500 focus:text-red-500">
          <LogOut className="w-4 h-4 mr-2" />
          Disconnect
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
