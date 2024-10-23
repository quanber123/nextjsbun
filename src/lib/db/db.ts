import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const MONGODB_URI = process.env.DB_URL as string;
const DB_NAME = process.env.DB_DATABASE as string;

export const connectDb = async () => {
  try {
    await mongoose.createConnection(MONGODB_URI, {
      dbName: DB_NAME,
      minPoolSize: 1,
      maxPoolSize: 50,
    });
    console.log('mongodb connected!');
  } catch (error) {
    console.log(error);
  }
};
