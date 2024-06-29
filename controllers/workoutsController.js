const express = require('express')
const workouts = express.Router()
const workoutArray = require('../models/workout')

// index
workouts.get('/', (req, res) => {
  res.status(200).send(workoutArray)
})

// show
workouts.get('/:id', (req, res) => {
  const id = +req.params.id
  const workout = workoutArray.find(workout => workout.id === id)
  if (workout) {
    res.status(200).json(workout)
  } else {
      res.status(404).json({error: `workout id ${id} not found`})
  }
})

// create
workouts.post('/', (req, res) => {
  const currentWorkout = {id: workoutArray.length +1, ...req.body}
  workoutArray.push(currentWorkout)
  res.status(201).send(workoutArray[workoutArray.length-1])
})

// delete
workouts.delete('/:id', (req, res) =>{
  const id = +req.params.id
  const workoutToDeleteIndex = workoutArray.findIndex(workout => workout.id === id)

  if (workoutToDeleteIndex !== -1) {
    workoutArray.splice(workoutToDeleteIndex, 1)
    res.redirect('/workouts')
  } else {
      res.status(404).send({error: `Workout with id ${id} not found`})
  }
})

module.exports = workouts