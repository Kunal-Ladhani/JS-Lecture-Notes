import mongoose, { Connection, Schema } from "mongoose";
import { logger } from "../utils";
import { Inject } from "@nestjs/common";
import { DATABASE_PROVIDER } from "../constants";

export class MongoConnection {
  private static connection: any;

  private static async getDbConnection(dbUrl: string, readPreference?: string) {
    try {
      const connectOptions: any = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      };

      const dbConnection = await mongoose.connect(dbUrl, connectOptions);
      logger.info("Primary db connected successfully");
      logger.info(`mongoDB connected: ${dbConnection.connection.host}`);
      return dbConnection;
    } catch (error) {
      logger.error(`Error while making a db connection :: ${error}`);
      throw error;
    }
  }

  static async initiateConnections(dbUrl: string) {
    if (!this.connection) {
      this.connection = await this.getDbConnection(dbUrl);
    }
    return this.connection;
  }

  static buildModels(
    modelName: string,
    schema: Schema,
    collectionName?: string
  ): mongoose.Model<any> {
    return this.connection.model(modelName, schema, collectionName);
  }
}
