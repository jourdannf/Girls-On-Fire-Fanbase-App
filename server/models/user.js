import mongoose from "mongoose";
// import Contestant from "./contestants"

const userSchema = new mongoose.Schema({
    nickname: {
        type: String,
        required: true,
        unique: false
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    profilePic: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true,
        unique: true 
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    favorites: {
        type: Map, 
        of: [String]
    }
}, {collection: "users"});

export default mongoose.model("User", userSchema);