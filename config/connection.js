require('dotenv').config(); // load enviromental variables
const mysql = require("mysql2");


const connection = mysql
  .createConnection({
    host: "localhost",
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "mysqlTodos",
  })
  .promise(console.log('db is connected'));

module.exports = connection;
