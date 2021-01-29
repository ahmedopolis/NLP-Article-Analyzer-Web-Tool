// Load-in env variables
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Call Aylien api library and store in variable
var AylienNewsApi = require("aylien-news-api");

// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// File path
let path = require("path");

// Express to run server and routes
const express = require("express");

// External module to use fetch in Node js
const fetch = require("node-fetch");

// Store api js script
const mockAPIResponse = require("./mockAPI.js");

/* Dependencies & Middleware */
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(express.static("dist"));

console.log(__dirname);

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

// Setup server
const port = 8080;
const hostName = "localhost";

// Spin up the server
app.listen(port, listening);

// Callback to debug
function listening() {
  console.log(`Server is running on http://${hostName}: ${port}`);
}

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});
