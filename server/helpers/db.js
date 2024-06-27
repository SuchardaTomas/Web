const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: '',
  database: process.env.DATABASE_NAME
});

connection.connect((err) => {
  if (err) return console.log(err);
  console.log("Connected to MySQL");
});

module.exports = connection;