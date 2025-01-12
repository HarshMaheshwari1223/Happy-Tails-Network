const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Pet = mongoose.model('Addpet');

router.get('/getdetails/:id', async (req, res) => {
    try {
        const petId = req.params.id;
        const pet = await Pet.findById(petId);
        if (!pet) return res.status(404).json({ message: 'Pet not found' });
        res.json(pet);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;


