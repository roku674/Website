// models/LogModel.js
const mongoose = require("mongoose");

// Function to get a Mongoose model for a specific database
function getTradingLogModel(dbName) {
  // Use the same connection to get a specific database
  const db = mongoose.connection.useDb(dbName);

  // Define the schema for the LogMessage subdocument
  const LogMessageSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.Mixed, required: true }, // Mixed type for flexibility
    timeStamp: { type: Date, required: true },
    messageSource: { type: String, required: true },
    localOperationName: { type: String, required: true },
    messageType: { type: Number, required: true },
    message: { type: String, required: true },
  });

  // Define the schema for the main TradingLog document
  const TradingLogSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, required: true }, // The root document's _id
    LogMessage: { type: LogMessageSchema, required: true }, // Embed LogMessage as a subdocument
  });

  // Check if model already exists to avoid "OverwriteModelError"
  const modelName = process.env.MONGODB_CLUSTER_LOGS || 'TradingLog'; // Use default if env variable not set

  if (db.models[modelName]) {
    return db.model(modelName);
  }

  // Create a model based on the schema and the current database
  return db.model(modelName, TradingLogSchema);
}

// Example usage: Access logs from the "automated_trader" database
const TradingLog = getTradingLogModel(process.env.MONGODB_DATABASE_TRADER);

// Use async/await to fetch logs
async function fetchLogs() {
  try {
    const logs = await TradingLog.find({});
    console.log("Fetched logs:", logs);
  } catch (err) {
    console.error("Error fetching logs:", err);
  }
}

// Call the function to fetch logs
fetchLogs();

module.exports = TradingLog;
