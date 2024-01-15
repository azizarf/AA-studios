const User = require("../models/user.Model");

module.exports = {
    //create
    create: async (req, res) => {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(400).json(err);
        }
    },
    //read
    getAll: async (req, res) => {
        try {
            const users = await User.find({});
            res.json(users);
        } catch (err) {
            res.json(err);
        }
    },
    getOne: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            res.json(user);
        } catch (err) {
            res.json(err);
        }
    },
    //update
    update: async (req, res) => {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body);
            res.json(user);
        } catch (err) {
            res.status(400).json(err);
        }
    },
    //delete
    deleteUser: async (req, res) => {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            res.json(user);
        } catch (err) {
            res.json(err);
        }
    }
}