const express = require('express')
const workouts = express.Router()
const workoutArray = require('../models/workout')

workouts.get('/', (req, res) => {
  res.status(200).send(workoutArray)
})

module.exports = workouts