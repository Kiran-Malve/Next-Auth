"use client"


import Link from 'next/link'
import React, { useState } from 'react'

export default function Login() {
  const [userData , setUserData]=useState({
    userEmail:"",
    userPassword:""
  })
  const onLogin=async()=>{

  }
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2' >
      <h3>Login</h3>
      <hr />
      <div>
        <div>
          <label>User email</label>
          <input
            className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'
            placeholder='Please enter your user email'
            type="email"
            name='userEmail'
            id='userEmail'
            value={userData?.userEmail}
            onChange={() => {
              setUserData({
                ...userData,
                userEmail: e.target.value,
              })
            }}
          />
        </div>
        <div>
          <label>User Password</label>
          <input
            className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'
            placeholder='Please enter your password'
            type="email"
            name='userPassword'
            id='userPassword'
            value={userData?.userPassword}
            onChange={() => {
              setUserData({
                ...userData,
                userPassword: e.target.value,
              })
            }}
          />
        </div>
        <button onClick={() => onLogin()} >Login</button>
        <Link href="/signup" >Sign Up</Link>
      </div>
    </div>
  )
}
