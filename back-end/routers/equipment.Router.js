//give the routers for and export it anslo import the controllers
const express = require('express');
const router = express.Router();
const { create, deleteEquipment, getAll, getOne, update } = require('../controllers/equipment.Controller');

// Create a new Equipment
router.post('/add', create);

// Retrieve all Equipment
router.get('/', getAll);

// Retrieve a single Equipment with id
router.get('/:id', getOne);

// Update a Equipment with id
router.put('/:id', update);

// Delete a Equipment with id
router.delete('/:id', deleteEquipment);

module.exports = router;