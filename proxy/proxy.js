require('dotenv').config();  // Load environment variables from .env file

const express = require('express');
const fetch = require('node-fetch');  // Import node-fetch for HTTP requests
const cors = require('cors');  // Import cors package

const app = express();
const PORT = process.env.PROXY_PORT || 7000;  // Default port number for proxy server
const API_KEY = process.env.API_KEY;    // Your actual API key
const API_KEY_NAME = process.env.API_KEY_NAME;
const backendUrl = `http://${process.env.BACKEND_DOMAIN}`; // Backend server URL using HTTP
const frontendUrl = `https://${process.env.DOMAIN}`; // Frontend expects HTTPS

// Allow requests from your specific frontend URL
const corsOptions = {
  origin: frontendUrl,  // Allow only your frontend origin
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));  // Use CORS middleware with updated options
app.use(express.json());

// Proxy endpoint to handle API requests
app.get('/api/proxy/logs', async (req, res) => {
  try {
    const response = await fetch(`${backendUrl}/api/logs`, {
      method: 'GET',
      headers: {
        [API_KEY_NAME]: `${API_KEY}`
      }
    });

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data from backend:', error.message);
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
});

// Start the HTTP server
app.listen(PORT, () => {
  console.log(`Proxy is running on http://localhost:${PORT}`);
});
