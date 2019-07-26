import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString,
});

pool
  .connect()
  // eslint-disable-next-line no-console
  .then(() => console.log('Postgres connected'));

export default pool;
