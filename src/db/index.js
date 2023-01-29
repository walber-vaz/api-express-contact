require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

client.connect();

const query = async (params, values) => {
  const { rows } = await client.query(params, values);
  return rows;
};

module.exports = {
  query,
};
