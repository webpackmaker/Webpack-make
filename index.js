#!/usr/bin/env node

// colorize the output
const chalk = require('chalk');
// clears the terminal screen
const clear = require('clear');
// creates ASCII art
const figlet = require('figlet');

const files = require('./lib/files.js');

const inquirer = require('./lib/inquirer');

const answersKey = require('./lib/answer');

const fs = require('fs');

const { npmMods } = require('./lib/npmMods');

const { spawn } = require('child_process');

// clears the terminal
clear();

// log the ASIIC art
console.log(
  chalk.yellow(figlet.textSync('Webpack-make', { horizontalLayout: 'full' }))
);

// run: starts the logic of the program
const run = async () => {
  const retrievePaths = await inquirer.retrievePath();
  fs.writeFile(
    `./webpack.config.js`,
    generateModuleText(retrievePaths),
    err => {
      if (err) {
        throw err;
      }
    }
  );
  if (retrievePaths['install_deps']) {
    generateNpmString(retrievePaths);
  }
};
run();

function generateNpmString(obj) {
  let npmString = [];
  npmString.push('webpack');

  const npm_mods = npmMods(); // object

  for (let key in obj) {
    if (Array.isArray(obj[key])) {
      npmString.push(npm_mods[obj[key][0]]);
    }

    if (obj[key] === true) {
      if (npm_mods[key]) {
        if(Array.isArray(npm_mods[key])) {
          for(let i = 0; i < npm_mods[key].length; i++) {
            npmString.push(npm_mods[key][i]);
          }
        } else {
          npmString.push(npm_mods[key]);
        }
      }
    }
  }
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

function generateModuleText(object) {
  let prod_or_dev;
  let answer = ``;
  let size = 0;
  let comma = 1;
  for (key in object) {
    size++;
  }
  if (size > 0) {
    if (object.dev_mode === true) {
      prod_or_dev = `development`;
    } else {
      prod_or_dev = `production`;
    }
    if (object.dev_server === true) {
      if (object.hot_reload === false) {
        answer += `devServer: {
    contentBase: path.join(__dirname, '/'),
    port: 3000,
    publicPath: '/build',
  },
  `;
      } else {
        answer += `devServer: {
    contentBase: path.join(__dirname, '/'),
    port: 3000,
    hotOnly: true,
    publicPath: '/build',
  },
`;
      }
    }
    answer += `
  module: {
    rules: [
  `;

    // loop over answers checking for True
    for (key in object) {
      if (
        (object[key] === true &&
          key !== 'dev_mode' &&
          key !== 'dev_server' &&
          key !== 'hot_reload' &&
          key !== 'install_deps' &&
          key !== 'prettier') ||
        key === 'frontend_framework'
      ) {
        if (key === 'frontend_framework') {
          if (object[key][0] === 'React') {
            answer += answersKey.react;
          }
          if (object[key][0] === 'Vue') {
            answer += answersKey.vue;
          }
        } else {
          answer += answersKey[key];
        }
        if (comma < size) {
          answer += `,`;
        }
        comma++;
      }
    }
    answer += `
  ]
},`;
  }

  return `const path = require('path');

module.exports = {
  mode: '${prod_or_dev}',
  entry: ./'${object.entry_path}',
  output: {
    path: path.resolve(__dirname, '/'),
    filename: 'build.js'
  },
  ${answer}
  resolve: { extensions: ['*', '.js']}
};`;
}
