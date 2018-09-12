const inquirer = require('inquirer');
const { questionObjArr } = require('./question_objects');

module.exports = {
  retrieveQuestions: () => {
    const questions = [];

    for (let i = 0; i < questionObjArr.length; i += 1) {
      questions.push(questionObjArr[i]);
    }

    return inquirer.prompt(questions);
  },
};
