const express = require('express')
const appEn = express()
const env = require('dotenv').config()
const port = process.env.PORT || 1234

const initApp = () => {
  console.clear()
  console.info('env port : ', port)
  console.info('')
  console.info('Works !')
  console.info('')

  // Listener
  appEn.listen(port, () => {
    console.log('Example app listening on port ' + port + '!')
  })
}

module.exports = {
  init: initApp
}