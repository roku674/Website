// models/LogModel.js

// Function to get a Mongoose model for a specific database
function getTradingLogModel(dbName) {
    // Use the same connection to get a specific database
    const db = mongoose.connection.useDb(dbName);
    
    // Define the schemas again (or reuse if already defined)
    const LogMessageSchema = new mongoose.Schema({
      _id: { type: mongoose.Schema.Types.Mixed, required: true },
      timeStamp: { type: Date, required: true },
      messageSource: { type: String, required: true },
      localOperationName: { type: String, required: true },
      messageType: { type: Number, required: true },
      message: { type: String, required: true },
    });
  
    const TradingLogSchema = new mongoose.Schema({
      LogMessage: LogMessageSchema,
    });
  
    // Create a model based on the schema and the current database
    return db.model(process.env.MONGODB_CLUSTER_LOGS, TradingLogSchema);
  }
  
  // Example usage: Access logs from the "automated_trader" database
  const TradingLog = getTradingLogModel(process.env.MONGODB_DATABASE_TRADER);
  
  TradingLog.find({}, (err, logs) => {
    if (err) {
      console.error('Error fetching logs:', err);
    } else {
      console.log('Fetched logs:', logs);
    }
  });
  
module.exports = TradingLog;
