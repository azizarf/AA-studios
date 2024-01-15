const mongoose = require('mongoose');

// Define the schema
const StudioSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    hourlyRate: {
        type: Number,
        required: true
    }
});

// Create the model from the schema
const Studio = mongoose.model('Studio', StudioSchema);

module.exports = Studio;