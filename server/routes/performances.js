import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();
// const performances = db.collection("performances");

// router
//     .route("/")
//     .get(async (req, res) => {
//         const query = {show: "Girls On Fire"};
//         let result = null;

//         if (req.query.contestant){
//             if (typeof req.query.contestant == "string"){
//                 result = await performances.find({participants: {$in: [req.query.contestant]}}).toArray();
//             }else {
//                 result = await performances.find({participants: {$in: req.query.contestant}}).toArray(); //returns all performances containing either of contestants
//             }

//         }else {
//             result = await performances.find(query).toArray();
//         }

//         if (!result) res.status(404).send("Resource Not Found");
//         else res.status(200).send(result);
//     });

// router
//     .route("/:id")
//     .get(async (req, res) => {
//         const id = req.params.id;
//         const query = {_id: new ObjectId(id)};

//         const result = await performances.findOne(query).toArray();
//         if (!result) res.status(404).send("Resource Not Found");
//         else res.status(200).send(result);
//     })

export default router;