const mysql = require('./db/mysql')

const connectMysql = () => {
  // If you are using mysql for db
  return mysql.connect()
}

module.exports = {
  connect: connectMysql
}