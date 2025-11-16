"use client";
import React, { useState } from "react";
import { Navbar } from "@/components/navbar";

const faqs = [
  {
    question: "How are rewards calculated?",
    answer: "Rewards are calculated based on the staked amount, lock-in period, and the APR for that period."
  },
  {
    question: "Is my staked ALGO safe?",
    answer: "Your funds are secured by Algorand smart contracts. You retain full control of your wallet."
  },
  {
    question: "How do I stake my ALGO?",
    answer: "Connect your wallet, enter the amount to stake, select a lock-in period, and confirm the transaction."
  },
      {
        question: "What are the lock-in periods and rewards?",
        answer: "You can choose between 30, 60, or 90 days. Each lock-in period offers different APRs: 8%, 10%, and 12% respectively."
      },
      {
        question: "What is NaanFi?",
        answer: "NaanFi is a decentralized staking platform built on Algorand, allowing users to stake ALGO and earn rewards."
      },
      {
        question: "What do I receive for staking?",
        answer: "You receive an NFT representing your staked position, which can be used to claim rewards or transfer your stake."
      },
      {
        question: "Can I withdraw before the lock-in period ends?",
        answer: "Withdrawals are only possible after the selected lock-in period ends. Early withdrawal is not supported."
      },
      {
        question: "Are there any fees for staking?",
        answer: "There are no platform fees for staking, but standard Algorand network transaction fees apply."
      },
      {
        question: "How do I claim my rewards?",
        answer: "After the lock-in period ends, use the Claim page to withdraw your rewards and staked ALGO."
      },
      {
        question: "Can I transfer my staked position?",
        answer: "Yes, you can transfer your NFT representing your staked position to another wallet, transferring ownership."
      }
    ];

export default function FAQPage() {
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const filteredFaqs = faqs.filter(faq => faq.question.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <Navbar />
      <div
        className="min-h-screen py-16 px-4 flex flex-col items-center"
        style={{ background: '#111217', fontFamily: 'Inter, Segoe UI, Roboto, Arial, sans-serif' }}
      >
        <h1
          className="text-4xl font-extrabold mb-8 text-center"
          style={{ color: '#fff', letterSpacing: '2px', fontFamily: 'Inter, Segoe UI, Roboto, Arial, sans-serif' }}
        >
          Frequently Asked Questions
        </h1>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search"
          className="mb-8 w-full max-w-2xl px-4 py-2 text-2xl rounded border-2 bg-[#181a20] text-white focus:outline-none"
          style={{ fontFamily: 'inherit', color: '#bfc6d1', borderColor: '#222', background: '#181a20' }}
        />
        <div className="w-full max-w-4xl flex flex-col gap-6">
          {filteredFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded shadow faq-box"
              style={{
                background: '#181a20',
                border: '1px solid #153b7c',
                transition: 'border-color 0.2s',
              }}
            >
                    {/* Blue border on hover for FAQ boxes */}
                    <style>{`
                      .faq-box:hover {
                        border-color: #1877ff !important;
                      }
                    `}</style>
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center"
                style={{
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  color: '#fff',
                  fontFamily: 'Inter, Segoe UI, Roboto, Arial, sans-serif',
                  fontWeight: 700,
                  fontSize: '1.3rem',
                  letterSpacing: '0.5px',
                  lineHeight: 1.2
                }}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                {faq.question}
                <span style={{ fontSize: '1.5rem', color: '#1877ff' }}>{openIndex === idx ? '−' : '+'}</span>
              </button>
              {openIndex === idx && (
                <div
                  className="px-6 py-3 rounded-b"
                  style={{
                    background: '#181a20',
                    color: '#bfc6d1',
                    fontFamily: 'Inter, Segoe UI, Roboto, Arial, sans-serif',
                    fontSize: '0.98rem',
                    fontWeight: 400,
                    lineHeight: 1.6
                  }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
