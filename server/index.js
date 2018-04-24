const express = require('express')
const appEn = express()
const enChalk = require('./../utils/chalk')
const env = require('dotenv').config()
const port = process.env.PORT || 1234
const db = require('./../config/database')
const router = require('./../router/index')

const initApp = () => {
  console.clear()
  console.info('env port : ', port)
  console.info('')
  console.info('Works !')
  console.info('')

  // Database connection
  db.connect().then((resolve) => {
    // Connection
    var connection = resolve

    // Router
    router.init(appEn, connection)
    
    // Listener
    appEn.listen(port, () => {
      console.log(enChalk.success('App listening on port ' + port + '!'))
    })
  }, (error) => {
    console.log(enChalk.error('Error Connecting Database :('))
  })
}

module.exports = {
  init: initApp
}