const express = require("express")
const User = require("../models/UserSchema");
const authRouter = express.Router();
const jwt = require("jsonwebtoken")

// post a new user to user collection (signing up)
authRouter.post("/signup", (req, res, next) => {
    // try to find a user with the provided username. (If it already exists, we want to tell them the username is already taken)
    User.findOne({username: req.body.username.toLowerCase()}, (err, existingUser) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        // if the database doesn't return "null" it means there's already a user with that username. Send the error object to the global error handler on your server file.
        if (existingUser !== null) {
            res.status(400);
            return next( new Error("That username already exists!"));
        }
       
        // If the function reaches this point and hasn't returned already, we're safe
        // to create the new user in the database
        const newUser = new User(req.body);
        newUser.save((err, user) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            // If the user signs up, we might as well give them a token right now so they dont have to immediately log back in again
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
            return res.status(201).send({user: user.withoutPassword(), token});
        })
    })
})

authRouter.post("/login", (req, res, next) => {
    console.log("testing")

    // Try to find the user with the submitted username (lowercased)
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if (err) {
            return next(err)
        }
        // If that user isn't in the database OR the password is wrong:
        if (!user) {
            res.status(403);
            return next(new Error("Email or password are incorrect"));
        }
       
        user.checkPassword(req.body.password, (err, isMatch) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            
            if(!isMatch) {
                res.status(403);
                return next(new Error("Email or password are incorrect"))
            }


             //If username and password both match an entry in the database, create a JWT! Add the user object as the payload and pass in the secret. This secret is like a "password" for your JWT, so when you decode it you'll pass the same secret used to create the JWT so that it knows youre allowed to decode it.
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
            // Send the token back to the client app.
            return res.send({token: token, user: user.withoutPassword(), sucess: true})
        })
       
    })
})

module.exports = authRouter;