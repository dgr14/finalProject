const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require("bcrypt");

const userSchema = new Schema({
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true
    },
    // In case we need to distinguish types of users in the future
    isAdmin: {
        type: Boolean,
        default: false
    }
});

userSchema.pre("save", function (next) {
    const user = this;
    if (!user.isModified("password")) return next();
    bcrypt.hash(user.password, 10, (err, hash) => {
        if (err) return next(err);
        callback(null, isMatch);
    })
});
   
userSchema.methods.withoutPassword = function () {
    const user = this.toObject;
    delete user.password;
    return user;
}

module.exports =  mongoose.model("User", userSchema);
