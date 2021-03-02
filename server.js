const express  = require('express');
const app = express(); 
//this is instance of express
const connectDB = require('./database/db');

connectDB();


const port = process.env.PORT || 5000; 
//port takes value from env but if not, take port as 5000

app.listen(port, () => console.log(`Listening on port ${port}`));