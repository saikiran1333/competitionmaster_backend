const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const questionRoutes = require('./routes/questionRoutes');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// API routes
app.use('/api/questions', questionRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.send('🎯 Quiz API is running...');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
