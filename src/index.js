//require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import mongoose from "mongoose"
import {DB_NAME} from "./constraint.js";
import connectDB from "./db/index.js";

dotenv.config();  // Load environment variable

connectDB();





// import express from "express"
// const app = express()

// ( async ()=> {
//     try{
// await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
// app.on("error",(error)=>{
//     console.log("err:",error);
//     throw error
//      })

// app.listen(process.env.PORT,()=>{
//     console.log(`app is listeining on port ${process.env.PORT}`);
// })


//     }catch(error){
//         console.error("error: ",error)
//         throw error;
//     }
// } )()