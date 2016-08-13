// Get the file system for writing to file
const fs = require('fs');

const chalk = require('chalk');

const success = chalk.bold.green;
const error = chalk.bold.red;

// Create new module
module.exports = {

  // Create new function for module
  debug: (msg, obj, level) => {
    // Get debug status
    const debugging = process.env.DEBUG;
    if (debugging) {
      // Get current time
      const timestamp = new Date();
      let text;

      // Make a string of our text
      text += '\n' + timestamp + '\n' + msg + '\n';
      if (obj) {
        text += JSON.stringify(obj, null, 4) + ' \n';
      }
      if (level === 0) {
        text = error(text);
      } else if (level === 1) {
        text = success(text);
      }
      // Print to console
      process.stdout.write(text);

      // Print (append) to file
      text = `
      '\n' '<li style=background:purple;color:skyblue;font-style:italic>'
      '\n'  timestamp
      '\n' msg
      '\n' JSON.stringify(obj, null, 4)
      '\n'  '</li>'
      '\n'  '<hr style=background:yellow>'`;
      fs.appendFile('logs/debug.log', text, (err) => {
        if (err) {
          process.stdout.write(err);
        }
      });
    }
  },
};
