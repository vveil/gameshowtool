// setup connection to postgres database user is postgres, password admin, port 5432, database is gameshowtool
const { Pool } = require('pg');

require('dotenv').config();
const config = process.env;

const db = new Pool({
  user: config.DB_USER,
  password: config.DB_PASSWORD,
  host: config.DB_HOST,
  port: config.DB_PORT,
  database: config.DB,
});

module.exports = db;
