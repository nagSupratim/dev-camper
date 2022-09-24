import mongoose from "mongoose";

export const connectDB = async (): Promise<typeof mongoose> => {
  if (!process.env.MONGO_URI)
    return new Promise((resolve, reject) => {
      reject(`⚡️ [database]: MongoDB not connected : Please set MONGO_URI environment variable`);
    });

  return await mongoose.connect(process.env.MONGO_URI, {});
};
