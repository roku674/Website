// routes/logRoutes.js

const express = require('express');
const getTradingLogModel = require('../Models/LogModel'); // Import the function, not the model itself

const router = express.Router();

// Example usage: Access logs from the "automated_trader" database
const TradingLog = getTradingLogModel(process.env.MONGODB_DATABASE_TRADER); // Get the model for the specific database

// API endpoint to get all logs
router.get('/logs', async (req, res) => {
    try {
        const logs = await TradingLog.find(); // Use the model to fetch all logs
        res.json(logs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// API endpoint to get a log by ID
router.get('/logs/:id', async (req, res) => {
    try {
        const log = await TradingLog.findById(req.params.id); // Use the model to fetch a log by ID
        if (log) {
            res.json(log);
        } else {
            res.status(404).json({ message: 'Log not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// API endpoint to create a new log
router.post('/logs', async (req, res) => {
    const newLog = new TradingLog(req.body); // Use the model to create a new log
    try {
        const savedLog = await newLog.save();
        res.status(201).json(savedLog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// API endpoint to delete a log by ID
router.delete('/logs/:id', async (req, res) => {
    try {
        const deletedLog = await TradingLog.findByIdAndDelete(req.params.id); // Use the model to delete a log by ID
        if (deletedLog) {
            res.json({ message: 'Log deleted' });
        } else {
            res.status(404).json({ message: 'Log not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router; // Export the router
