"use client"


import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'

export default function ProfileDetails() {
     const { id } = useParams();
     console.log("id" , id);
  return (
    <div>
      <h5>Profile Page Details {id}</h5>
      <Link href={"/login"}>Logout</Link>
    </div>
  )
}
