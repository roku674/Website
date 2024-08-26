// models/LogModel.js

const mongoose = require('mongoose');

// Define a schema matching the MongoDB document structure
const LogMessageSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.Mixed, required: true },
    timeStamp: { type: Date, required: true },
    messageSource: { type: String, required: true },
    localOperationName: { type: String, required: true },
    messageType: { type: Number, required: true },
    message: { type: String, required: true },
});

// Define the main document schema
const TradingLogSchema = new mongoose.Schema({
    LogMessage: LogMessageSchema,
});

// Create a model based on the schema
const TradingLog = mongoose.model('aplaca_trading_logs', TradingLogSchema);

module.exports = TradingLog;
