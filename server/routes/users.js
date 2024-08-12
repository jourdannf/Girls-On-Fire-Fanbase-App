import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";


const router = express.Router();
const users = db.collection("users");

router
    .route("/")
    .get(async (req, res) => {
        const result = await users.find().toArray();

        if (!result) res.status(404).send("Resource Not Found");
        else res.status(200).send(result);
    })
    .post(async(req, res) => {
        const newUser = {
            nickname: req.body.nickname,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            favorites: {
                contestants: [],
                performances: []
            }
        }

        users.insertOne(newUser);
    })

router
    .route("/:id")
    .get(async (req, res) => {
        const id = req.params.id;
        const query = {_id: new ObjectId(id)};
        const result = await users.find(query).toArray();

        if (!result) res.status(404).send("Resource Not Found");
        else res.status(200). send(result);
    })
    .patch((async (req, res) => {
        const id = req.params.id;
        const query = {_id: new ObjectId(id)};

        //Updates user's nickname, email, or password
    }))
    .delete(async (req, res) => {
        const id = req.params.id;
        const query = {_id: new ObjectId(id)};
        users.deleteOne(query);
    });

router
    .route("/:id/favorites")
    .patch(async (req, res) => {
        const id = req.params.id;
        const query = {_id: new ObjectId(id)};

        //Add what ever is in the body to the user's favorites
    })

export default router;