"use client"

import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Signup() {
  const [selectedFile, setSelectedFile] = useState(null);

  const [userData, setUserData] = useState({
    userName: "Hello therer",
    userEmail: "Are1212@gmail.com",
    userPassword: "Test@123",
    userPdf :""
  })
  const onsubmit = async () => {
    try {
      console.log("userData", userData);
      const res = await axios.post("/api/user/signup", userData);
      console.log('====================================', res);
    } catch (error) {

    }
  }
  useEffect(() => {
    onsubmit()
  }, [])

  
  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);
    console.log("formData" , formData)
    axios.post('/api/upload', formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2' >
      <h3>Sign up page</h3>
      <hr />
      <div>
        <div>
          <label>User Name</label>
          <input
            className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'
            placeholder='Please enter your user name'
            type="text"
            name='userName'
            id='userName'
            value={userData?.userName}
            onChange={(e) => {
              setUserData({
                ...userData,
                userName: e.target.value,
              })
            }}
          />
        </div>
        <div>
          <label>User email</label>
          <input
            className='p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600'
            placeholder='Please enter your user email'
            type="email"
            name='userEmail'
            id='userEmail'
            value={userData?.userEmail}
            onChange={(e) => {
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
            onChange={(e) => {
              setUserData({
                ...userData,
                userPassword: e.target.value,
              })
            }}
          />
        </div>
        <div>
        <h3>Upload File</h3>userPdf
        <input type="file" onChange={handleFileUpload} />
        <button onClick={handleUpload}>Upload</button>
      </div>
        <button onClick={() => onsubmit()} >Sign Up</button>
        <Link href="/login" >Login</Link>
      </div>
    </div>
  )
}
