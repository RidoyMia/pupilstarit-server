const express = require('express')
const app = express()
const cors = require('cors')
const { default: mongoose } = require('mongoose')


app.use(cors())
app.use(express.json())








module.exports = app;
