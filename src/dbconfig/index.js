
import mongoose from "mongoose";
export async function connect(){
    try {
        console.log("this connect is starts");
        mongoose.connect(process.env.MONGODBURL);
        const connection = mongoose.connection;
        connection.on("connection", (()=>{
            console.log("connection is established success fully");
        }))
        connection.on("error", (error)=>{
            console.log("error" , error);
            // process.exit()
        })
    } catch (error) {
        console.log("error", error);
    }
}

// // db.js

// import mongoose from 'mongoose';

// export async function connect() {
//   try {
//     await mongoose.connect(process.env.MONGODBURL);
//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//   }
// }
