// import { express } from 'express';

// Here I set up my constant (non-changing) variables
const express = require('express');

const bodyParser = require('body-parser');

const utilityTool = require('loot-ytilitu');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

/** This line will call the api.js file and pass the remaining route,
* after /api/v1/, to the api.js route controller.
*/
app.use('/', require('./routes')(express));

// This code starts the server and prints a console.log to the terminal
const server = app.listen(port, () => {
  utilityTool.debug(`Server Active on ${port}`);
});

// This line assigns the exported module the value of the constant variable server
module.exports = server;
