
const express = require('express');
const app = express()
const subscribers = require('./models/subscribers');
const path = require('path')

// Renders the documentation view
app.get('/', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname + '/views/index.html'))
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
})

// Returns an array of all subscribers in the database.
app.get('/subscribers', async (req, res) => {
    try {
        const data = await subscribers.find({});
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
})

// Returns an array of all subscribers' names and subscribed channels in the database.
app.get('/subscribers/names', async (req, res) => {
    try {
        const data = await subscribers.find({}, { _id: 0, name: 1, subscribedChannel: 1 });
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
})

// Returns the subscriber with the specified ID.
app.get('/subscribers/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const data = await subscribers.findById(id);
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
})

module.exports = app;
