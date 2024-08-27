const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PROXY_PORT || 7000;  // You can choose your desired port number
const API_KEY = process.env.API_KEY;    // Replace with your actual API key
const API_KEY_NAME = process.env.API_KEY_NAME;
const Domain = process.env.DOMAIN;
app.use(express.json());

// Proxy endpoint
app.get('/api/proxy', async (req, res) => {
  try {
    const response = await axios.get(`https://${Domain}/api/logs`, {
      headers: {
      [API_KEY]: `${API_KEY}`  // Attach your API key here
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
