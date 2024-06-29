const express = require('express')
const app = express()

// middleware

// healthcheck
app.get('/', (req, res) => {
  res.send('Welcome to our fitness app')
})

// routes
const workoutsController = require('./controllers/workoutsController')
app.use('/workouts', workoutsController)

module.exports = app