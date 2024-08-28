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

  // Define the schema for the main TradingLog document and specify the collection name
  const TradingLogSchema = new mongoose.Schema(
    {
      _id: { type: mongoose.Schema.Types.ObjectId, required: true }, // The root document's _id
      LogMessage: { type: LogMessageSchema, required: true }, // Embed LogMessage as a subdocument
    },
    {
      collection: process.env.MONGODB_CLUSTER_LOGS || 'Poison', // Explicitly set the collection name
    }
  );

  // Create and return the model based on the schema and the current database
  return db.model('TradingLog', TradingLogSchema); // Use 'TradingLog' or any singular name you prefer
}

module.exports = getTradingLogModel;  // Export the function to get the model
