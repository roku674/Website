require('dotenv').config();  // Load environment variables from .env file

const express = require('express');
const axios = require('axios');
const cors = require('cors');  // Import cors package

const app = express();
const PORT = process.env.PROXY_PORT || 7000;  // You can choose your desired port number
const API_KEY = process.env.API_KEY;    // Replace with your actual API key
const API_KEY_NAME = process.env.API_KEY_NAME;
const baseUrl = `https://${process.env.DOMAIN}`;

// Allow any origin by setting 'origin' to true in CORS options
const corsOptions = {
  origin: true,  // Allow all origins
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

// Proxy endpoint
app.get('/api/proxy/logs', async (req, res) => {
  try {
    const response = await axios.get(`${baseUrl}/api/logs`, {
      headers: {
        [API_KEY_NAME]: `${API_KEY}` 
      }
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy is running on http://localhost:${PORT}`);
});
