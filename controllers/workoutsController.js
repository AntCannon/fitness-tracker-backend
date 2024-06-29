const express = require('express')
const workouts = express.Router()
const workoutArray = require('../models/workout')

workouts.get('/', (req, res) => {
  res.status(200).send(workoutArray)
})

workouts.get('/:id', (req, res) => {
  const id = +req.params.id
  const workout = workoutArray.find(workout => workout.id === id)
  if (workout) {
    res.status(200).json(workout)
  } else {
      res.status(404).json({error: `workout id ${id} not found`})
  }
})

module.exports = workouts