import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();
const contestants = db.collection("contestants");

router
    .route("/")
    .get(async (req, res) => {
        const query = {show: "Girls On Fire"}
        const result = await contestants.find(query).toArray();
        if (!result) res.status(404).send("Resource Not Found");
        else res.status(200).send(result);
    });

router
    .route("/:id")
    .get(async (req, res) => {
        const id = req.params.id;
        const query = {_id: new ObjectId(id)};

        const result = await contestants.findOne(query);

        if (!result) res.status(404).send("Resource Not Found");
        else res.status(200).send(result);
    })

export default router;