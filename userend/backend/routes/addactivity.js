const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Addpet = mongoose.model('Addpet');


router.get('/getpets',async (req,res)=>{
    const {category} = req.query;
    try{
        const filter = category ? {category}:{};
        const pets = await Addpet.find(filter);
        res.json(pets);
    }
    catch(err){
        console.error(err);
        res.status(500).send('Server Error');
    }
})

module.exports = router;


