const express = require('express')
const questionRouter = express.Router()
const Question = require('../models/questionSchema.js')

questionRouter.get("/", (req, res, next) => {
    // Addition: include filtering criteria to the find so that it only finds todo items with a 'user' property with the current user's id.
    Question.find({user: req.user._id}, (err, questions) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.send(questions)
    })
})

questionRouter.post("/", (req, res, next) => {
    const question = new Question(req.body)

    // Set the user property of a question to req.user._id (logged-in user's '_id' property)
    question.user = req.user._id

    // Same as before
    question.save((err, newQuestion) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newQuestion)
    })
})

QuestionRouter.get("/:questionId", (req, res, next) => {
        
    // Addition: Change to findOne and include the search criteria for users
    Question.findOne({_id: req.params.questionId, user: req.user._id}, (err, question) => {
        if (err) {
            res.status(500)
            return next (err)
        }
        if (!question) {
            res.status(404)
            return next (new Error("No question found"))
        }
        return res.send(question)
    })
})

questionRouter.put("/:questionId", (req, res, next) => {

    // Addition: Change to findOneAndUpdate and include the query for users
    Question.findOneAndUpdate(
        // Updated query to include user
        {_id: req.params.questionId, user: req.user._id},
        req.body,
        {new: true},
        (err, question) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.send(question)
        }
    )
})

// Addition: Change to findOneAndRemove and include the search criteria for users
Question.findOneAndRemove({_id: req.params.questionId, user: req.user._id}, (err, question) => {
    if (err) {
        res.status(500)
        return next(err)
    }
    return res.send(question)
})

module.exports = questionRouter