const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();
const userRoute = require('./routes/userRoute')

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("hello");
});
app.use('/api/users', userRoute);


// Starting Server
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
  connectDB()
});
