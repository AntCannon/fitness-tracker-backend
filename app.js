const express = require('express')
const app = express()

// middleware

// routes
app.get('/', (req, res) => {
  res.send('Welcome to our fitness app')
})

module.exports = app