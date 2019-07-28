import pool from './database';

/**
 * Drop Tables
 */
const dropTables = () => {
  pool.query('DROP TABLE IF EXISTS users')
    .then(() => {
      console.log('Table dropped');
    });
};

/**
 * Create Tables
 */
const createTables = () => {
  const users = `CREATE TABLE IF NOT EXISTS
    users (
        id SERIAL PRIMARY KEY,      
        email VARCHAR(128) UNIQUE NOT NULL,
        firstName VARCHAR(128) NOT NULL,
        lastName VARCHAR(128) NOT NULL,
        password VARCHAR(128) NOT NULL,
        registered TIMESTAMP,
    )`;
  pool.query(users)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((error) => {
      console.log('Tables can not be  created');
      pool.end();
    });
};

module.exports = {
  dropTables,
  createTables,
};

require('make-runnable');
