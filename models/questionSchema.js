const mongoose = require("mongoose")
const Schema = mongoose.Schema
const bcrypt = require("bcrypt")
const questionSchema = new Schema ({
    question: {
        type: String,
        required: false
    },
    content: {
        type: String,
        required: false
    },
    type: {
        type: String,
        required: false
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    // Add user to response after MVP complete
    responses: [String],
    upVote: {
        type: Number,
        default: 0
    }    
})

module.exports = mongoose.model("Question", questionSchema);