import mongoose from "mongoose";

const scoreSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    points: {
        type: Map,
        of: [Number],
        required: true
    }
    
});

const performanceSchema = new mongoose.Schema({
    show: {
        type: String,
        required: true,
        unique: false
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    originalSong: {
        type: Boolean,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    round: {
        type: Number,
        require: true
    },
    participants: {
        type: [String],
        require:true
    },
    scores: {
        type: scoreSchema,
        require: true
    },
    link: {
        type: String,
        require: true
    }
}, {collection: "performances", strictQuery: "throw"});

export default mongoose.model("Performance", performanceSchema);