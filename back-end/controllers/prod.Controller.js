const Prod = require("../models/prod.Model");

module.exports = {
    //create
    create: async (req, res) => {
        try {
            const prod = await Prod.create(req.body);
            res.json(prod);
        } catch (err) {
            res.status(400).json(err);
        }
    },
    //read
    getAll: async (req, res) => {
        try {
            const prods = await Prod.find({});
            res.json(prods);
        } catch (err) {
            res.json(err);
        }
    },
    getOne: async (req, res) => {
        try {
            const prod = await Prod.findById(req.params.id);
            res.json(prod);
        } catch (err) {
            res.json(err);
        }
    },
    //update
    update: async (req, res) => {
        try {
            const prod = await Prod.findByIdAndUpdate(req.params.id, req.body);
            res.json(prod);
        } catch (err) {
            res.status(400).json(err);
        }
    },
    //delete
    deleteProd: async (req, res) => {
        try {
            const prod = await Prod.findByIdAndDelete(req.params.id);
            res.json(prod);
        } catch (err) {
            res.json(err);
        }
    }
}