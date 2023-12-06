import mongoose from 'mongoose';

import { config } from 'dotenv';

// make mongodb connection here
const connectDB = async () => {
    try {
        config();
        // mongoDB connection string is passed to this function
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            // useUnifiedTopology: true,  // default setting = true    
            // useFindAndModify: true,    // default setting = false
            // useNewUrlParser: true,     // default setting = true
            // useCreateIndex: true       // default setting = true
        });

        console.log(`mongoDB connected: ${conn.connection.host}`);

    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

export { connectDB };