const Studio = require("../models/studio.Model");

module.exports = {
    //create
    create: async (req, res) => {
        try {
            const studio = await Studio.create(req.body);
            res.json(studio);
        } catch (err) {
            res.status(400).json(err);
        }
    },
    //read
    getAll: async (req, res) => {
        try {
            const studios = await Studio.find({});
            res.json(studios);
        } catch (err) {
            res.json(err);
        }
    },
    getOne: async (req, res) => {
        try {
            const studio = await Studio.findById(req.params.id);
            res.json(studio);
        } catch (err) {
            res.json(err);
        }
    },
    //update
    update: async (req, res) => {
        try {
            const studio = await Studio.findByIdAndUpdate(req.params.id, req.body);
            res.json(studio);
        } catch (err) {
            res.status(400).json(err);
        }
    },
    //delete
    deleteStudio: async (req, res) => {
        try {
            const studio = await Studio.findByIdAndDelete(req.params.id);
            res.json(studio);
        } catch (err) {
            res.json(err);
        }
    }
}