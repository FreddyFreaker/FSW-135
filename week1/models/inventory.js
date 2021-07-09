const mongoose = require("mongoose")
const schema = mongoose.Schema

const stockSchema = new Schema({
    product_name: {
        type: String,
        required: true
    },
    product_type: {
        type: String,
        required: true
    },
    product_price: {
        type: Number,
        required: true,
        min: 1874
    }
})

module.exports = mongoose.model('Stock', stockSchema)
