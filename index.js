const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { pool } = require('./config')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

const getService = (request, response) => {
  pool.query('SELECT * FROM services', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const addService = (request, response) => {
  const { name } = request.body

  pool.query(
    'INSERT INTO services (name) VALUES ($1)',
    [name],
    (error) => {
      if (error) {
        throw error
      }
      response.status(201).json({ status: 'success', message: 'Service added.' })
    },
  )
}

// ROUTES
app
  .route('/services')
  // GET endpoint
  .get(getService)
  // POST endpoint
  .post(addService)

module.exports = app
