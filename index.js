const express = require('express');
const mongoose = require('mongoose');
const menuRoutes = require('./routes/menuRoutes.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON requests

// Connect to MongoDB
mongoose.connect('mongodb+srv://hridhika031:hjk@2929@cluster0.cx4wltm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

app.use('/api', menuRoutes); // Mount the routes

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});