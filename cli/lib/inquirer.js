const inquirer = require('inquirer');
const files = require('./files');

module.exports = {
  retrievePath: () => {
    const questions = [
      {
        name: 'entry_path',
        type: 'input',
        message: 'Enter your source file:'
      },

      {
        name: 'destination_path',
        type: 'input',
        message: 'Enter destination path:'
      }
    ];
    return inquirer.prompt(questions);
  }
};
