const mongoose = require("mongoose")
const Schema = mongoose.Schema
const bcrypt = require("bcrypt")

const questionSchema = new Schema ({
    title: {
        type: String,
        required: false
    },
    content: {
        type: String,
        required: false
    },
    upVote: {
        type: Number,
        required: false
    },
    downVote: {
        type: Number,
        required: false
    },
    type: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model("User", userSchema);