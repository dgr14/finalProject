const mongoose = require("mongoose")
const Schema = mongoose.Schema
const bcrypt = require("bcrypt")
// needss a .user and 
const questionSchema = new Schema ({
    title: {
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
    responses: [
        {type: Schema.Types.ObjectId,
        ref: "Response" }
    ]
        
    
})

module.exports = mongoose.model("Question", questionSchema);