import mongoose from "mongoose";



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
    password: {
        type: String,
        required: true,
        unique: true 
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    favorites: {
        type: Map, 
        of: [String]
    }
}, {collection: "users"});

export default userSchema;