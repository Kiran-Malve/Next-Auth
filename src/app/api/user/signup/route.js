// pages/api/user/signup.js

import {  connect } from "@/src/dbconfig";
import User from "@/src/models/signupModal";
import { NextRequest, NextResponse } from "next/server";

connect()
// Handler for POST requests
export async function POST(req) {
  try {
    // Connect to MongoDB Atlas
    const reqJSONv= await req.json()
    console.log("reqJSON" , reqJSONv);
    // console.log("Nextreq--->" ,await req.json())
    // Extract user data from the req body
    const { userName, userEmail, userPassword } = reqJSONv;

    // Create a new user instance
    const newUser = new User({
      userName,
      userEmail,
      userPassword,
    });

    const user = await User.findOne({ userEmail: userEmail });
    console.log("isCheckNewUser" , user);
    // Save the user to the database
    if (!Object.keys(user).length>0) {
      const handleSuceess = await newUser.save();
    console.log('User created successfully:' , handleSuceess);
    return NextResponse.json(handleSuceess, {
      status: 200,
    });   
    }
   
    // Respond with a success message
    // NextResponse.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error('Error creating user:', error);
    NextResponse.status(500).json({ error: 'Internal server error' });
  }
}

// Export the handler for POST requests
// export default async function handler(req, NextResponse) {
//   if (req.method === 'POST') {
//     return postSignup(req, NextResponse);
//   } else {
//     // Method not allowed
//     NextResponse.setHeader('Allow', ['POST']);
//     NextResponse.status(405).json({ error: `Method ${req.method} Not Allowed` });
//   }
// }


// // pages/api/signup.js

// import mongoose from 'mongoose';
// import User from "../../../../models/signupModal"
// import { connect } from '@/src/dbconfig';


// connect()
// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       // Connect to MongoDB Atlas
//     //   await mongoose.connect('', {
//     //     useNewUrlParser: true,
//     //     useUnifiedTopology: true,
//     //   });
//         console.log("req" , req);
//       // Extract user data from the request body
//       const { userName, userEmail, userPassword } = req.body;

//       // Create a new user instance
//       const newUser = new User({
//         userName,
//         userEmail,
//         userPassword,
//       });

//       // Save the user to the database
//       await newUser.save();

//       console.log('User created successfully:', newUser);

//       // Respond with a success message
//       res.status(201).json({ message: 'User created successfully' });

//       // Disconnect from MongoDB Atlas
//       await mongoose.disconnect();
//     } catch (error) {
//       console.error('Error creating user:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   } else {
//     // Method not allowed
//     res.status(405).json({ error: 'Method not allowed' });
//   }
// }


