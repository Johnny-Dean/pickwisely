import Link from 'next/link'
import React from 'react'
import './globals.css'

export default function Home() {
  return (
    <div>
      <h1 className="flex items-center text-5xl font-extrabold dark:text-white">
        pickwisely.ai
      </h1>
      <Link href = "/users">
      <button color="primary">Begin</button>
      </Link>
    </div>
  )
}