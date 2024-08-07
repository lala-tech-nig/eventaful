const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware to parse JSON requests


// Middleware to handle CORS




// Routes  
app.get('/', (req, res) => {
  res.send("Welcome to Eventaful Api")
});


// Mongoose Database connection




app.listen(5001, () => {
    console.log(`Server is running on port: 5001`);
  });