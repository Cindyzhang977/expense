const express = require("express");
const app = express();
const router = express.Router();

const http = require('http');

// const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const passport = require("passport");

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// app.use('/', express.static(path.join(__dirname, '/Angular/'))); //WHAT IS THIS?

app.post('/signup-submit', function(req, res) {
	console.log("got a get request for /conjugate");
  console.log("request " + req);
  console.log("response " + res);
});

const port = process.env.PORT || 3000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
