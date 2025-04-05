// Landing Page
"use client";

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import './globals.css'

export default function Home() {
  const [initial, setInitial] = useState(0)

  useEffect(() => {
    setInitial(initial => initial + 1)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      {/* typing effect container */}
      <div className="typing-container">
        {/* TODO: Fix animation */}
        <h1 className="text-5xl font-body overflow-hidden whitespace-nowrap border-r-4 border-white">
          pickwisely.ai
        </h1>
      </div>
      
      <Link href="/users">
        <button className="px-6 py-3 mt-4 hover:opacity-20">Begin</button>
      </Link>
    </div>
  );
}