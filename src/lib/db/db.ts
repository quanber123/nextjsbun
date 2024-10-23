import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();
export const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT) || 5432,
});

export const testConnection = async () => {
  try {
    const client = await pool.connect();
    console.log('Kết nối thành công đến PostgreSQL!');
    client.release();
  } catch (error) {
    console.error('Lỗi kết nối đến PostgreSQL:', error);
  }
};
