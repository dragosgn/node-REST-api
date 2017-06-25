'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')


mongoose.connect(config.db, (err, res ) => {
  if (err) {
    return console.log(`Error connecting to the database: ${err}`)
  }

  console.log('Database connection established..')

  app.listen(config.port, () => {
    console.log(`Rest API running on localhost: ${config.port}`)
  })
})
