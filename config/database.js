const mysql = require('mysql')
const env = require('dotenv').config()
const enChalk = require('./../utils/chalk')
const DB_HOST = process.env.DB_HOST || 'localhost'
const DB_ROOT = process.env.DB_ROOT || 'root'
const DB_PASSWORD = process.env.DB_PASSWORD || ''
const DB_DATABASE_NAME = process.env.DB_DATABASE_NAME || 'enem'

const initDatabase = (app) => {
  //Database connection
  var connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_ROOT,
    password: DB_PASSWORD,
    database: DB_DATABASE_NAME
  })

  connection.connect((err) => {
    if (err) {
      throw err
    } else {
      console.info(enChalk.success('Connected !!!'))
    }
  })
}

module.exports = {
  init: initDatabase
}