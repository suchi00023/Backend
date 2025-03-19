import mongoose from "mongoose"
import {DB_NAME} from "../constraint.js";

const connectDB = async()=>{
    try{
      const connectionInstance=  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n mongoDB connected !! db host: ${connectionInstance.connection.host}`); //to know which host i connect


    } catch(error){
        console.log("MONGODB connection error",error);
        process.exit(1);
    }
}
export default connectDB
