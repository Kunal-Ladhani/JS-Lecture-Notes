import mongoose from "mongoose";
import { config } from "dotenv";
import { logger } from "./logger";

config();

// make mongodb connection here
export const connectDB = async () => {
  try {
    logger.info(`DB connection url:: ${process.env.DB_URL}`);
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongoDB connected: ${conn.connection.host}`);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};
