const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();  // To load environment variables from .env file

const app = express();
app.use(express.json());  // Parse incoming JSON requests

// MongoDB connection (ensure it connects to 'mydb' database)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB (mydb)'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Import and use your auth routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Start the server
app.listen(4000, () => {
  console.log('Server running on port 5000');
});
