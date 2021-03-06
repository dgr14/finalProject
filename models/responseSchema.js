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
        // Do I need to import props?
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
    timeStamp: {
        type: Date,
        required: true,
        default: Date.now()
    }
})

module.exports = mongoose.model("Response", responseSchema);