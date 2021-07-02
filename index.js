// init code 
// importing the modules
const express = require('express');

const ProductData = require('./controllers/product');

// making express app
const app = express();

// db connection
require('./models/db');

// inserting the product data

ProductData.ProductData();


const PORT = 8001;

// assigning the port no.
app.listen(PORT , ()=>{
    console.log(`server is running on port ${PORT}`)
})