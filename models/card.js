const mongoose = require("mongoose")
const Schema = mongoose.Schema

const cardSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model("Card", cardSchema)