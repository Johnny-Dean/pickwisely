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
      
      <Link href="/users/new">
          <button className="font-body text-green-500 px-10 py-3 w-72 border border-green-500 hover:bg-green-500 hover:text-black transition-colors mt-4">
            New User
          </button>
        </Link>
        <Link href="/users/login">
          <button className="font-body text-green-500 px-8 py-3 w-72 border border-green-500 hover:bg-green-500 hover:text-black transition-colors">
            Returning User
          </button>
        </Link>
    </div>
  );
}