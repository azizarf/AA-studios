const mongoose = require('mongoose');

// Define the schema
const ProductSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true
    },
    prodName: {
        type: String,
        required: true
    },
    contactPerson: {
        type: String,
        required: true
    },
    contactEmail: {
        type: String,
        required: true
    },
    contactPhone: {
        type: Number,
        required: true
    }
});

// Create the model from the schema
const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;