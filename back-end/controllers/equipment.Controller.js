
// Create and Save a new Equipment
const Equipment = require("../models/equipment.model");

module.exports = {
    create: async (req, res) => {
        try {
            const data = await Equipment.create(req.body);
            res.json(data);
        } catch (err) {
            res.json(err);
        }
    },
    //getAll 
    getAll: async (req, res) => {
        try {
            const data = await Equipment.find({});
            res.json(data);
        } catch (err) {
            res.json(err);
        }
    },
    //getOne
    getOne: async (req, res) => {
        try {
            const data = await Equipment.findById(req.params.id);
            res.json(data);
        } catch (err) {
            res.json(err);
        }
    },
    //updateOne
    update: async (req, res) => {
        try {
            const equipment = await Equipment.findByIdAndUpdate(req.params.id, req.body);
            res.json(equipment);
        } catch (error) {
            res.json(error);
        }
    },
    //deleteOne
    deleteEquipment: async (req, res) => {
        try {
            const equipment = await Equipment.findByIdAndDelete(req.params.id);
            res.json(equipment);
        } catch (error) {
            res.json(error);
        }
    }
}