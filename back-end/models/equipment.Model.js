const mongoose = require('mongoose');

// Define the schema
const EquipmentSchema = new mongoose.Schema({
    equipmentName: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    }
});

// Create the model from the schema
const Equipment = mongoose.model('Equipment', EquipmentSchema);

module.exports = Equipment;