const mongoose = require('mongoose');
require('dotenv').config();


// make mongodb connection here
const connectDB = async () => {
  try {
    // mongoDB connection string is passed to this function
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // useUnifiedTopology: true,  // default setting = true    
      // useFindAndModify: true,    // default setting = false
      // useNewUrlParser: true,     // default setting = true
      // useCreateIndex: true       // default setting = true
    });

    console.log(`mongoDB connected: ${conn.connection.host}`);

  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;