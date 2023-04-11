// make mongodb connection here
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // mongoDB connection string
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            // useNewUrlParser: true,   // default setting
            // useUnifiedTopology: true,    // default setting
            // useCreateIndex: true // default setting
            // useFindAndModify: true,  // default setting false
        });

        console.log(`mongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDB;