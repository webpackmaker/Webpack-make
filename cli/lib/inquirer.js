const inquirer = require('inquirer');
const files = require('./files');
const { questionObjArr } = require('./../../question_objects.js');

module.exports = {
  retrievePath: () => {
    const questions = [];

    for (let i = 0; i < questionObjArr.length; i += 1) {
      questions.push(questionObjArr[i]);
    }

    return inquirer.prompt(questions);
  }
};
