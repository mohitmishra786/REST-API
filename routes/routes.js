const express = require('express');

const router = express.Router();

// GET ALL API
router.get('/getAll', (req , res) => {
    res.send('Gettting All The Data')
})

// GET By ID API
router.get('/getOne', (req , res) => {
    res.send('Gettting All The Data')
})

// POST API
router.post('/post', (req , res) => {
    res.send('Gettting All The Data')
})

// PUT API
router.put('/put', (req , res) => {
    res.send('PUT METHOD')
})

//DELETE API
router.delete('/delete', (req , res) => {
    res.send('Gettting All The Data')
})


module.exports = router;