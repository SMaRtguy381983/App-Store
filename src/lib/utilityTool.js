// Get the file system for writing to file
const fs = require('fs');

// Create new module
module.exports = {

  // Create new function for module
  debug: (msg, obj) => { 

    // Get debug status
    let debugging = process.env.DEBUG;
    if (debugging) {

      // Get current time
      let timestamp = new Date();

      // Make a string of our text
      let text = ' \n' + '<li>' + timestamp + ' ' + msg + ' ' + JSON.stringify(obj, null, 4) + ' \n' + '</li>' + ' \n' ;

      // Print to console
      console.log(text);

      // Print (append) to file
      fs.appendFile('logs/logs.txt', text, (err) => {
        if (err) {
          console.log(err);
        }
      });
    }
  }
}
