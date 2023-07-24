import { MongoClient } from 'mongodb';
import mongoose, { Connection } from 'mongoose';

import { DATABASE_PROVIDER } from '../constants';
import { CustomerModelFn } from './customer.model';
import { KycDetailsModelFn } from './kyc-details.model';
import { logger } from '../utils';

export const DatabaseProviders = [
  {
    provide: DATABASE_PROVIDER.CONNECTION,
    useFactory: async (): Promise<Connection> => {
        const client = new MongoClient(process.env.DB_URL || 'mongodb://127.0.0.1:27017/sa-uksfb-customer');
        await client.connect();
        const conn = mongoose.createConnection().setClient(client);
        await conn.getClient();
        logger.info(`mongoose connection state check :: ${conn.readyState}`);
        return conn as Connection;
      },
  },
  {
    provide: DATABASE_PROVIDER.CUSTOMER,
    useFactory: (connection: mongoose.Connection) => CustomerModelFn(connection),
    inject: [DATABASE_PROVIDER.CONNECTION],
  },

  {
    provide: DATABASE_PROVIDER.KYC_DETAILS,
    useFactory: (connection: mongoose.Connection) => KycDetailsModelFn(connection),
    inject: [DATABASE_PROVIDER.CONNECTION],
  },

];
