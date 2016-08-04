// Here I set up my constant (non-changing) variables
const express = require('express');
const body_parser = require('body-parser');
const app = express();

// Here I set up the port that the API will connect to,
// for purposes of the assignment I will use 3000
const port = 3000;

// This line will call the api.js file and pass the remaining route, after /api/v1/, to the api.js route controller.
app.use('/api/v1', require('../routes/api.js')(express));

// This code starts the server and prints a console.log to the terminal
const server = app.listen(port, () => {
	console.log('Server Active on', port);
});

// This line assigns the exported module the value of the constant variable server
module.exports = server;
