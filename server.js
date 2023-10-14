const express = require('express');
const axios = require('axios');

const app = express();
const port = 5501; // Choose a port for your proxy server

// Enable CORS (Cross-Origin Resource Sharing) for your proxy server
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
  next();
});

// Proxy route to forward requests to the external server
app.get('/api/posts', async (req, res) => {
  try {
    const response = await axios.get('https://lokshahilive.com/wp-json/wp/v2/posts/');
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching data from the external server.' });
  }
});

// Start the proxy server
app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});