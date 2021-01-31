// Import function to convert polarity response
import { polarityChecker } from "../client/js/polarityChecker";

// Store path
let path = require("path");

// Load-in env variables
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: ".env" });
}

// My Api key
const localApiKey = process.env.API_KEy;

// Function to concatenate the api url for the nlp analysis
function concatenateApiURL(userURL) {
  return `https://api.meaningcloud.com/sentiment-2.1?key=${localApiKey}&url=${userURL}&lang=en`;
}

// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Express to run server and routes
const express = require("express");

// External module to use fetch in Node js
const fetch = require("node-fetch");

// Store mock api js script
const mockAPIResponse = require("./mockAPI.js");

/* Dependencies & Middleware */
const bodyParser = require("body-parser");
const cors = require("cors");

// Start up an instance of app
const app = express();

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance for proxy server
app.use(cors());

// Connect the bundled folder
app.use(express.static("dist"));

// Print '__dirname'
console.log(__dirname);

// Send main html file via GET request
app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

// Route GET request for mock api
app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

app.post("/apiData", addSentimentalData);

// Combine data from user inputs and resulting api response
function addSentimentalData(req, res) {
  const userInput = req.body.userURL;
  const fullApiURL = concatenateApiURL(userInput);
  fetchSentimentalData(fullApiURL)
    .then((data) => {
      const convertedPolarity = polarityChecker(data.score_tag);
      projectData = {
        model: data.model,
        polarity: convertedPolarity,
        score_tag: data.score_tag,
        agreement: data.agreement,
        subjectivity: data.subjectivity,
        confidence: data.confidence,
        irony: data.irony,
      };
    })
    .then((newProjectData) => {
      res.send(newProjectData);
    });
}

// Function to fetch api response
async function fetchSentimentalData(url) {
  const response = await fetch(url);
  try {
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error:", error);
  }
}

// Initialize all route with a callback function
app.get("/apiData", sendData);

// Callback function to complete GET '/all'
function sendData(req, res) {
  res.send(projectData);
}

// Setup server
const port = 8080;
const hostName = "localhost";

// Spin up the server
app.listen(port, listening);

// Callback to debug
function listening() {
  console.log(`Server is running on http://${hostName}: ${port}`);
}
