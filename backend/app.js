const express = require("express");
const connectDB = require("./config/database");
const config = require('./config/config');
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

const PORT=config.port;
connectDB();

// Middlewares
app.use(cors());
app.use(express.json()); 
app.use(cookieParser());


// Root Endpoint
app.get("/", (req,res) => {
    res.json({message : "Hello from POS Server!"});
})

// Other Endpoints



// Server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})