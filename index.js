require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const mongoData = process.env.DATABASE_URL;
// Let's connect to our MongoDB Atlas Database
mongoose.connect(mongoData)
const database = mongoose.connection;

database.on('error' , (error) => {
    console.log(error)
})

database.once('connected' , () =>{
    console.log('Database Connected')
})

// This will be the app that we will be using for the routing of our different endpoints
const app = express();

app.use(express.json)

const routes = require('./routes/routes')

// So all our end points will start from the address /api
app.use('/api' , routes)

app.listen(3000, () => {
    console.log('Server Started at ${3000}')
})