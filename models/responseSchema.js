const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require("bcrypt")

const responseSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    question: {
        type: Schema.Types.ObjectId,
        // How do I get the question to be referenced?
        ref: "Question"
    },
    content: {
        type: String,
        require: false
    },
    upVote: {
        type: Number,
        required: false
    },
    downVote: {
        type: Number,
        required: false
    },

})