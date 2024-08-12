import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import mongoose from "mongoose";

const dbName = "kpopSurvivalShowDB";

dotenv.config();

// const db = mongoose.connect(process.env.ATLAS_URI, {
//     dbName: "kpopSurvivalShowDB"
//     }).then(()=> {
//         console.log("Connected to database");
//     }).catch((err) => {
//         console.log("Not connected to the database. ", err);
//     })

const client = new MongoClient(process.env.ATLAS_URI);

let conn;

try {
    conn = await client.connect(); 
}catch(e) {
    console.log(e);
}

let db = conn.db(dbName);

export default db;