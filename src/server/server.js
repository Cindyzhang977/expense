const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");

const http = require('http');

// const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const passport = require("passport");

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// var parentDir = __dirname.split(path.sep)[:-1];
app.use('/', express.static(path.join(__dirname, "../")));
// app.use('/', express.static(path.join(parentDir, 'index.js')));
console.log(path.join(__dirname, "../../src"));
// app.use(express.static(path.join(__dirname, "../../src")));

app.get('/', (req, res) => {
	console.log('log');
  // res.sendFile(path.join(__dirname, '../index.html'));
});

app.post('/signup-submit', function(req, res) {
	console.log("got a get request for /conjugate");
  console.log("request " + req);
  console.log("response " + res);
});

const port = process.env.PORT || 3001; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
