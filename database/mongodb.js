import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if(!DB_URI) {
    throw new Error("DB_URI is not defined, define it inside .env<development/production>.local");

}

const connectToDb = async() =>{
    try {
        await mongoose.connect(DB_URI);

        console.log(`connected to ${NODE_ENV} db`);
        
    } catch (error) {
        console.error('error connecting to db', error);

        process.exit(1);
    }

}

export default connectToDb;