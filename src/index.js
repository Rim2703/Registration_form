const express = require('express')
const router = require('./route')
const mongoose = require('mongoose')
const cors = require('cors');

const app = express()

app.use(express.json())

app.use(cors());

mongoose.connect("mongodb+srv://Rimsha:RimAtlas@cluster0.ij9mujl.mongodb.net/registration-form", {
    useNewUrlParser: true
})
    .then(() => console.log("Mongodb is Connected"))
    .catch(err => console.log(err))

app.use('/', router)

app.listen(8000, () => {
    console.log("server is running")
})