// DEPENDENCIES
const express = require("express");
const cors = require("cors");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors());

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to ThaNotes");
});

app.get("*", (req, res) => {
  res.status(404).json("Page not found");
});

// EXPORT
module.exports = app;
