// pages/api/user/signup.js

import {  connect } from "@/src/dbconfig";
import User from "@/src/models/signupModal";
import FileUser from "@/src/models/uploadModal";
import { NextRequest, NextResponse } from "next/server";

connect()
// Handler for POST requests
export async function POST(req) {
  try {
    // Connect to MongoDB Atlas
    const reqJSONv= await req.formData()
    console.log("reqJSON" , reqJSONv);
    // console.log("Nextreq--->" ,await req.json())
    // Extract user data from the req body
    const { userName, userEmail, userPassword } = reqJSONv;

    // Create a new user instance
    const newUser = new FileUser({
        reqJSONv
    });
    console.log("newUser" , newUser)
    // Save the user to the database
    if (!Object.keys(newUser).length>0) {
      const handleSuceess = await newUser.save();
        console.log('User created successfully:' , handleSuceess);
        return NextResponse.json(handleSuceess, {
        status: 200,
    });   
    }
  } catch (error) {
    console.error('Error creating user:', error);
    NextResponse.status(500).json({ error: 'Internal server error' });
  }
}
