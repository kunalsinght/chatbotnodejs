// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
// Import Routes
const chatbotRoutes = require('./routes/chatbotRoutes');
// Initialize the app
const app = express();
// Set the view engine to Pug for rendering dynamic templates
app.set('view engine', 'pug');
// Middleware for parsing JSON request bodies
app.use(bodyParser.json());
// Serve static files like CSS
app.use(express.static('public'));
// Routes
app.use('/api/chatbot', chatbotRoutes);
// Root Route for Chat Interface
app.get('/', (req, res) => {
res.render('index');
});
// MongoDB connection using Mongoose
// MongoDB connection using Mongoose
console.log("MongoDB URI:", process.env.MONGO_URI); // Log the MongoDB URI
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));
// Start the server on the defined port
const port = process.env.PORT || 3000;
app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});
