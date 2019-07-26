import pool from './database';


const createTables = () => {
  const users = `CREATE TABLE IF NOT EXITS
    users (
        id SERIAL PRIMARY KEY;
        firstName VARCHAR(100) UNIQUE NOT NULL,
        lastName VARCHAR(100) UNIQUE NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(100) UNIQUE NOT NULL  
    )`;
  pool.query(users)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((error) => {
      console.log(error);
      pool.end();
    });
};

module.export = {
  createTables,
};
