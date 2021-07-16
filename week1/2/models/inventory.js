const mongoose = require("mongoose")
const Schema = mongoose.Schema

const stockSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 1
    }
})









module.exports = mongoose.model('Inventory', stockSchema)
