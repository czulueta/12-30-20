const express = require("express")
const cardRouter = express.Router()
const Card = require("../models/card.js")
// get all cards
cardRouter.get("/", (req, res, next) => {
    Card.find((err, cards) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(cards)
    })
})
// add a new card
cardRouter.post("/", (req, res, next) => {
    const newCard = new Card(req.body)
    newCard.save((err, savedCard) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedCard)
    })
})