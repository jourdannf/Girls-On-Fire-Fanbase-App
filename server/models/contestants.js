import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
    type: [{
        showTitle: {type: String, required: true},
        finalEp: {
            made: {type: Boolean, required: true},
            winner: {type: Boolean, required: true},
            points: {type: Number, required: true}
        },
        eliminated: {
            loser: {type: Boolean, required: true},
            episode: {type: Number, required: true}
        },
        ranking: {type: Number, required: true}
    }]
});

const contestantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true,
        unique: false
    },
    birthday: {
        type: Date,
        required: false
    },
    nationality: {
        type: [String],
        required: false
    },
    img: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    show: {
        type: [String],
        required: true
    },
    performances: {
        type: [String],
        required: true
    },
    results: {
        type: [resultSchema],
        required: true
    }
}, {collection: "contestants"});

export default mongoose.model("Contestant", contestantSchema);