require('dotenv').config();  // Load environment variables from .env file

const express = require('express');
const axios = require('axios');
const cors = require('cors');  // Import cors package

const app = express();
const PORT = process.env.PROXY_PORT || 7000;  // Default port number for proxy server
const API_KEY = process.env.API_KEY;    // Your actual API key
const API_KEY_NAME = process.env.API_KEY_NAME;
const backendUrl = `http://${process.env.DOMAIN}:${process.env.BACKEND_PORT}`; // Backend server URL using HTTP
const frontendUrl = `https://${process.env.DOMAIN}`; // Frontend expects HTTPS

// Allow any origin by setting 'origin' to true in CORS options
const corsOptions = {
  origin: frontendUrl,  // Allow all origins
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));  // Use CORS middleware with updated options
app.use(express.json());

// Proxy endpoint to handle API requests
app.get('/api/proxy/logs', async (req, res) => {
  try {
    const response = await axios.get(`${backendUrl}/api/logs`, {
      headers: {
        [API_KEY_NAME]: `${API_KEY}`
      }
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
});

// Start the HTTP server
app.listen(PORT, () => {
  console.log(`Proxy is running on http://localhost:${PORT}`);
});
