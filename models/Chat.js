// models/Chat.js
const mongoose = require('mongoose');
// Define the schema for chat messages
const chatSchema = new mongoose.Schema({
userMessage: {
type: String,
required: true
},
botResponse: {
type: String,
required: true
},
timestamp: {
type: Date,
default: Date.now
}
});
// Export the schema as a model to interact with MongoDB
module.exports = mongoose.model('Chat', chatSchema);
