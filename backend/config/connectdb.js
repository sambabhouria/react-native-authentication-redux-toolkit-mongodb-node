import mongoose from 'mongoose';

const connectDB = async DATABASE_URL => {
  try {
    const DB_OPTIONS = {
      dbName: 'userauthentication',
    };
    await mongoose.connect(process.env.DATABASE_URL, DB_OPTIONS);
    console.log(
      'Mongoose Db is Connected Successfully and runnnnning 🏃🏃🏃🏃🏃...',
    );
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
