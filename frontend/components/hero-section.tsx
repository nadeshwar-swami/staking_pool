"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Lock, TrendingUp } from 'lucide-react'
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] rounded-full bg-primary/20 blur-3xl animate-pulse"
          style={{
            top: "10%",
            left: "5%",
            animationDuration: "4s",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full bg-secondary/15 blur-3xl animate-pulse"
          style={{
            bottom: "5%",
            right: "10%",
            animationDuration: "6s",
            animationDelay: "1s",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full bg-primary/10 blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x - 200}px`,
            top: `${mousePosition.y - 200}px`,
          }}
        />
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Zap
          className="absolute text-primary/40 animate-float"
          style={{
            top: "20%",
            left: "10%",
            animationDelay: "0s",
          }}
          size={40}
        />
        <TrendingUp
          className="absolute text-secondary/40 animate-float"
          style={{
            top: "30%",
            right: "15%",
            animationDelay: "2s",
          }}
          size={35}
        />
        <Lock
          className="absolute text-primary/30 animate-float"
          style={{
            bottom: "25%",
            left: "15%",
            animationDelay: "1s",
          }}
          size={30}
        />
      </div>

      <div className="container mx-auto text-center max-w-4xl relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-fade-in-up">
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Decentralized Algorand Staking</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up text-balance">
          Stake ALGO,{" "}
          <span className="text-primary relative inline-block">
            Earn Rewards
            <svg
              className="absolute -bottom-2 left-0 w-full h-3"
              viewBox="0 0 200 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M0 6 Q50 2 100 6 T200 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="text-primary"
              />
            </svg>
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto animate-fade-in-up animate-delay-100 leading-relaxed">
          Lock your ALGO tokens and earn competitive APR on our secure, decentralized staking platform. Simple, transparent, and designed for everyone.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-200 mb-16">
          <Link href="/stake">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg group shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
            >
              Start Staking
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary/30 text-foreground hover:bg-primary/5 font-semibold px-8 py-6 text-lg"
          >
            Learn More
          </Button>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-sm text-muted-foreground animate-fade-in-up animate-delay-300">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-medium font-mono">{"Staking"}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" style={{ animationDelay: "0.5s" }} />
            <span className="font-medium font-mono">Rewards</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "1s" }} />
            <span className="font-medium font-mono">StakeNFT</span>
          </div>
        </div>
      </div>
    </section>
  )
}
