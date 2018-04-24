const express = require('express')
const appEn = express()
const enChalk = require('./../utils/chalk')
const env = require('dotenv').config()
const port = process.env.PORT || 1234
const db = require('./../config/database')

const initApp = () => {
  console.clear()
  console.info('env port : ', port)
  console.info('')
  console.info('Works !')
  console.info('')

  // Database connection
  db.init(appEn)

  // Listener
  appEn.listen(port, () => {
    console.log(enChalk.success('App listening on port ' + port + '!'))
  })
}

module.exports = {
  init: initApp
}