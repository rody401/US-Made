const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    product: {
        type: String,
        required: true
    },
    price: {
        type: Integer,
        required: true
    },
    location: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Product', productSchema)