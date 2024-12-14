require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = 3000 ;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb+srv://hashTheAdmin:HashTheAdmin@inventorymanagement.ekh6lts.mongodb.net/Vahicle-Management-Database?retryWrites=true&w=majority&appName=InventoryManagement", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Routes
const vehicleRoutes = require('./routes/vahicleroute');
app.use('/vehicles', vehicleRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
