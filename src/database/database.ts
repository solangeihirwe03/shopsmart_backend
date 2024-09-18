import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri: any = process.env.MONGO_URI

mongoose.connect(uri)
.then(()=>{
    console.log("Database connected successfully!")
}).catch((error)=>{
    console.log("Failed to connect to database" , error)
})