// routes/logRoutes.js

const express = require('express');
const TradingLog = require('../Models/LogModel');

const router = express.Router();

// API endpoint to get all logs
router.get('/logs', async (req, res) => {
    try {
        const logs = await TradingLog.find();
        res.json(logs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// API endpoint to get a log by ID
router.get('/logs/:id', async (req, res) => {
    try {
        const log = await TradingLog.findById(req.params.id);
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
    const newLog = new TradingLog(req.body);
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
        const deletedLog = await TradingLog.findByIdAndDelete(req.params.id);
        if (deletedLog) {
            res.json({ message: 'Log deleted' });
        } else {
            res.status(404).json({ message: 'Log not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
