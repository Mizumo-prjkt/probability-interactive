// Server

const express = require('express');
const path = require('path');
const app = express();

const PORT = 5000;

// host index.html and node_modules

app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

app.use('/static', express.static(path.join(__dirname, 'Interactive Probability Fundamentals_files')))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});