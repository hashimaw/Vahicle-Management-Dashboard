const express = require('express');
const router = express.Router();
const Vahicle = require('../models/vahicle');

// Add a new vehicle
router.post('/add', async (req, res) => {
  try {
    const vehicle = new Vahicle(req.body);
    await vehicle.save();
    res.status(201).send(vehicle);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Update vehicle status
router.patch('/updatestatus/:id', async (req, res) => {
  try {
    const vehicle = await Vahicle.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    if (!vehicle) {
      return res.status(404).send();
    }
    res.send(vehicle);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Fetch all vehicles
router.get('/all', async (req, res) => {
  try {
    const vehicles = await Vahicle.find({});
    res.send(vehicles);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
