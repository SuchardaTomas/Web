const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,  
  ssl: {
    rejectUnauthorized: false,  
  },
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  console.log("Connected to PostgreSQL");
  release(); 
});

module.exports = pool;
