const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nakamabooks'
});

connection.connect((err) => {
  if (err) return console.log(err);
  console.log("Connected to MySQL");
});

module.exports = connection;