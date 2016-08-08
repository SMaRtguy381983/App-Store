// Here I set up my constant (non-changing) variables
const express = require('express');
const body_parser = require('body-parser');
const app = express();


const port = process.env.PORT || 3000;


app.use(body_parser.json());
app.use(body_parser.urlencoded({
  extended: true,
}));

// This line will call the api.js file and pass the remaining route, after /api/v1/, to the api.js route controller.
app.use('/', require('./routes')(express));

// This code starts the server and prints a console.log to the terminal
const server = app.listen(port, () => {
	console.log('Server Active on', port);
});

// This line assigns the exported module the value of the constant variable server
module.exports = server;
