import mongoose, { Connection } from "mongoose";
import { DATABASE_PROVIDER } from "src/common/constants";
import { config } from "dotenv";
import { MongoClient } from "mongodb";
import { connectDB, logger } from "src/common/utils";
import { CustomerModelFn } from "src/modules/customer/schema";
import { MongoConnection } from "src/common/helpers";

config({ path: "config.env" });

// array of providers
export const DatabaseProviders = [
  {
    provide: DATABASE_PROVIDER.CONNECTION,
    useFactory: async (): Promise<Connection> => {
      const client = new MongoClient(
        process.env.MONGO_URI || "mongodb://127.0.0.1:27017/sa-uksfb-customer"
      );
      await client.connect();
      const conn = mongoose.createConnection().setClient(client);
      await conn.getClient();
      logger.info(`mongoose connection state check :: ${conn.readyState}`);
      return conn as Connection;
    },
  },
  {
    provide: DATABASE_PROVIDER.CUSTOMER,
    useFactory: (connection: mongoose.Connection) =>
      CustomerModelFn(connection),
    inject: [DATABASE_PROVIDER.CONNECTION],
  },
];

// export class dbConnProvider {
//   dbConn = async (): Promise<any> => {
//     try {
//       const dbUrl = process.env.MONGO_URI;
//       logger.info(`DB connection url:: ${dbUrl}`);
//       const conn = await MongoConnection.initiateConnections(dbUrl);
//       return conn as Connection;
//     } catch (e) {
//       console.error(e);
//       process.exit(1);
//     }
//   };
// }

// export const DatabaseProviders = [
//   {
//     provide: DATABASE_PROVIDER.CONNECTION,
//     useClass: dbConnProvider,
//   },
// ];
