const express = require('express')
const cors = require('cors')

// config
const app = express()

// middleware
app.use(express.json())
app.use(cors())

// healthcheck
app.get('/', (req, res) => {
  res.send('Welcome to our fitness app')
})

// routes
const workoutsController = require('./controllers/workoutsController')
app.use('/workouts', workoutsController)

module.exports = app