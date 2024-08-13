import express from "express";
import mongoose from "mongoose";
import Performance from "../models/performance.js";

const router = express.Router();
// const performances = db.collection("performances");

router
    .route("/")
    .get(async (req, res) => {
        const query = {show: "Girls On Fire"};

        if (req.query.contestant){
            // if (typeof req.query.contestant == "string"){
            //     query.participants = {$in: req.query.contestant};
            // }else {
            //     query.participants = {$in: req.query.contestant}
            // }
            query.participants = {$in: req.query.contestant};
        }

        const result = await Performance.find(query);

        if (!result) res.status(404).send("Resource Not Found");
        else res.status(200).send(result);
    });

router
    .route("/:id")
    .get(async (req, res) => {
        const id = req.params.id;
        // const query = {_id: new ObjectId(id)};

        const result = await Performance.findById(id);
        if (!result) res.status(404).send("Resource Not Found");
        else res.status(200).send(result);
    });

router
    .route("/round/:number")
    .get(async (req, res) => {
        const rdNum = req.params.number;
        const query = {round: rdNum}

        const result = await Performance.find(query);
        console.log("Here");

        if (!result) res.status(404).send("Resource Not Found");
        else res.status(200).send(result);
    })

export default router;