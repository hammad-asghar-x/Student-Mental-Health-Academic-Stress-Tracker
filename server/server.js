const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load environment variables from .env file
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middleware
app.use(cors()); // Allows frontend to make requests to this backend
app.use(express.json()); // Allows the server to read JSON data sent from the frontend

// Import and use Auth Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Import and use Entry Routes
const entryRoutes = require('./routes/entryRoutes');
app.use('/api/entries', entryRoutes);

// Basic Test Route
app.get('/', (req, res) => {
  res.send('🚀 API is running successfully!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🔥 Server is running on http://localhost:${PORT}`);
});