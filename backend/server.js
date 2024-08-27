// server.js

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { authenticate } = require('./Middlewares/authenticate');
const logRoutes = require('./Routes/logRoutes');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Apply the authenticate middleware globally
app.use(authenticate);

// Use the log routes
app.use('/api', logRoutes);

// Start server
const PORT = process.env.BACKEND_PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
