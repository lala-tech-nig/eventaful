const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config()

// Import Env

DB_CONN = process.env.MONGODB_URL;
PORT = process.env.PORT;

const app = express();

// Middleware to parse JSON requests


// Middleware to handle CORS




// Routes  
app.get('/', (req, res) => {
  res.send("Welcome to Eventaful Api")
});



// Mongoose Database connection

mongoose.connect(DB_CONN)
  .then(() => {
    
    console.log('Connected!')
    
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
      });
  
  })
  
  .catch(() => {
    console.log(error)
  });


