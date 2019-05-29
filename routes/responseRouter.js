const express = require('express')
const responseRouter = express.Router()
const Response = require('../models/responseSchema.js')

responseRouter.get("/", (req, res, next) => {

    Response.find({user: req.user._id}, (err, responses) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.send(responses)
    })
})

responseRouter.post("/", (req, res, next) => {
    const response = new Response(req.body)

    response.user = req.user._id

    response.save((err, newResponse) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newQuestion)
    })
})

ResponseRouter.get("/:responseId", (req, res, next) => {

    Response.findOne({_id: req.params.questionId, user: req.user._id}, (err, response) => {
        if(err) {
            res.status(500)
            return next (err)
        }
        if (!response) {
            res.status(404)
            return next (new Error ("No response found"))
        }
        return res.send(response)
    })
})

responseRouter.put("/:responseId", (req, res, next) => {
    Response.findOneAndUpdate(
        {_id: req.params.responseId, user: req.user._id},
        req.body,
        {new: true},
        (err, response) => {
            if (err) {
                res.status(500)
                return next (err)
            }
            return res.send(response)
        }
    )
})

Response.findOneAndRemove({_id: req.params.responseId, user: req.user._id, user: req.user._id}, (err, response) => {
    if(err) {
        res.status(500)
        return next (err)
    }
    return res.send(response)
})

module.exports = responseRouter