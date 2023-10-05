const express = require('express')
const app = require('./app.js')
const mongoose = require('mongoose')
const dotenv = require('dotenv');
// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
dotenv.config();
// Connect to DATABASE
const DATABASE_URL = process.env.DATABASE_URL
const port = process.env.PORT || 3000;
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err));
db.once('open', () => console.log('connected to database'))

// Start Server
app.listen(port, () => console.log(`App running on  http://localhost:${port}`))