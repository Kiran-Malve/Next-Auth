
"use client"

import Link from 'next/link'
import React from 'react'

export default function ProfilePage() {
  return (
    <div>
      <h3>Profile Page</h3>
      <Link href={"/login"}>Logout</Link>
    </div>
  )
}
