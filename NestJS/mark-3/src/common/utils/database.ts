import mongoose, { Connection } from "mongoose";
import { config } from "dotenv";
import { logger } from "./logger";
import { MongoConnection } from "../helpers";
import { MongoClient } from "mongodb";

config({ path: "config.env" });

// make mongodb connection here
export const connectDB = async (): Promise<Connection> => {
  try {
    const dbUrl = process.env.MONGO_URI;
    logger.info(`DB connection url:: ${dbUrl}`);
    const conn = await MongoConnection.initiateConnections(dbUrl);
    return conn as Connection;
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

export const connectToDB = async (): Promise<Connection> => {
  const client = new MongoClient(
    process.env.MONGO_URI || "mongodb://127.0.0.1:27017/sa-uksfb-customer"
  );
  await client.connect();
  const conn = mongoose.createConnection().setClient(client);
  await conn.getClient();
  logger.info(`mongoose connection state check :: ${conn.readyState}`);
  return conn as Connection;
};
