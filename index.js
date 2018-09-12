#!/usr/bin/env node

// colorize the output
const chalk = require('chalk');
// clears the terminal screen
const clear = require('clear');
// creates ASCII art
const figlet = require('figlet');
const fs = require('fs');
const { spawn } = require('child_process');

const inquirer = require('./lib/inquirer');

const {
  generateNpmString,
  generateModuleText,
} = require('./lib/module/generate');


// clears the terminal
clear();

// log the ASIIC art
console.log(
  chalk.yellow(figlet.textSync('Webpack-make', { horizontalLayout: 'full' }))
);

// run: starts the logic of the program
const run = async () => {
  const retrieveQuestions = await inquirer.retrieveQuestions();
  fs.writeFile(
    `./webpack.config.js`,
    generateModuleText(retrieveQuestions),
    err => {
      if (err) {
        throw err;
      }
    }
  );
  if (retrieveQuestions['install_deps']) {
    const npmString = generateNpmString(retrieveQuestions);
    for (let i = 0; i < npmString.length; i++) {
      const command = spawn('npm', ['i', npmString[i], '--save-dev']);
      command.stdout.on('data', data => {
        console.log(`stdout: ${data}`);
      });
      command.on('close', code => {
        if(code === 0) {
          console.log(`Package installed successfully`);
        } else {
          console.log(`There was an error with ${npmString[i]}`)
        }
      });
    }
  }
};

run();
