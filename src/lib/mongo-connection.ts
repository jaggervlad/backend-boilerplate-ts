import mongoose from 'mongoose';

let isConnected = false;
const DB_URL = process.env.DB_URL as string;
export const mongooseConnection = async () => {
  if (!isConnected && DB_URL) {
    try {
      await mongoose.connect(DB_URL);
      console.log('Mongo its connected!');
      isConnected = true;
    } catch (error) {
      console.error('Error al conectar a MongoDB', error);
      isConnected = false;
      throw error;
    }
  }
};
