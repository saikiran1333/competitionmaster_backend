// config/db.js
// Responsible for connecting to MongoDB using Mongoose

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Connecting to MongoDB using the URI from .env
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    process.exit(1); // Exit process if DB connection fails
  }
};

module.exports = connectDB;
