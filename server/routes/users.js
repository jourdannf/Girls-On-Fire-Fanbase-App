import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import User from "../models/user.js"


const router = express.Router();
// const users = db.collection("users");

router
    .route("/")
    .get(async (req, res) => {
        const result = await User.find();

        if (!result) res.status(404).send("Resource Not Found");
        else res.status(200).send(result);
    })
    .post(async(req, res) => {
        const newUser = new User({
            nickname: req.body.nickname,
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            favorites: {
                contestants: [],
                performances: []
            },
            profilePic: req.body.profilePic
        })

        newUser.save();

        res.send(newUser);
    })

router
    .route("/:id")
    .get(async (req, res) => {
        const id = req.params.id;
        // const query = {_id: new ObjectId(id)};
        // const result = await users.find(query).toArray();

        const result = await User.findById(id);

        if (!result) res.status(404).send("Resource Not Found");
        else res.status(200).send(result);
    })
    .patch((async (req, res) => {
        const id = req.params.id;
        // const query = {_id: new ObjectId(id)};

        let update = {};

        //Updates user's nickname, email, or password

        if (req.body.nickname){
            update.nickname = req.body.nickname;
        }
        if (req.body.username){
            update.username = req.body.username;
        }
        if (req.body.password){
            update.password = req.body.password;
        }
        if (req.body.email){
            update.email = req.body.email;
        }

        const updatedUser = await User.findByIdAndUpdate(id, update, {new: true});

        if (!updatedUser) res.status(400).send("Resource Not Found");
        else res.status(200).send(updatedUser);
    }))
    .delete(async (req, res) => {
        const id = req.params.id;
        // const query = {_id: new ObjectId(id)};
        const result = await User.findByIdAndDelete(id);

        if (!result) res.status(404).send("Resource Not Found");
        else res.status(200).send(result);
    });

router
    .route("/:id/favorites/contestants")
    .get(async (req, res) => {
        const id = req.params.id;
        const u = await User.findById(id);

        //Need to figure out how to send just favorite contestants

        res.send(u.favorites);
    })
    .patch(async (req, res) => {
        const id = req.params.id;
        const contestant = req.body.contestant
        // const query = {_id: new ObjectId(id)};

        const u = await User.findByIdAndUpdate(id, [
            {
                $project: {
                    _id: 0,
                    "favorites.contestants": {$cond: {
                        if: {$in: [contestant, "$favorites.contestants"]},
                        then: {$setDifference:["$favorites.contestants", [contestant]]},
                        else: {$concatArrays: ["$favorites.contestants", [contestant]]},
                    }}
                },
                
            }
        ], {new: true});

        res.send(u);

    })

export default router;