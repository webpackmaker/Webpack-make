const questionObjArr = [
  {
    name: 'entry_path',
    type: 'input',
    message: 'Enter your source file: '
  },
  {
    name: 'destination_path',
    type: 'input',
    message: 'Enter destination path: '
  },
  {
    name: 'dev-mode',
    type: 'checkbox',
    message: 'Would you like to use developer mode?',
    choices: ['yes', 'no'],
    default: ['yes']
  },
  {
    name: 'babel',
    type: 'confirm',
    message: 'Will you be using ES6+?'
  },
  {
    name: 'typescript',
    type: 'confirm',
    message: 'typescript?'
  },
  {
    name: 'frontend-framework',
    type: 'checkbox',
    message: 'What is your frontend framework?',
    choices: ['React', 'Vue', 'Angular'],
    default: ['React']
  },
  // {
  //   name: 'react',
  //   type: 'confirm',
  //   message: 'Are you using react with JSX?',
  // },
  // {
  //   name: 'vue',
  //   type: 'confirm',
  //   message: 'Vue?',
  // },
  // {
  //   name: 'angular',
  //   type: 'confirm',
  //   message: 'Angular?',
  // },
  {
    name: 'css',
    type: 'confirm',
    message: 'CSS?'
  },
  {
    name: 'scss',
    type: 'confirm',
    message: 'SCSS?'
  },
  {
    name: 'less',
    type: 'confirm',
    message: 'LESS?'
  },
  {
    name: 'jshint',
    type: 'confirm',
    message: 'JShint?'
  },
  {
    name: 'eslint',
    type: 'confirm',
    message: 'ESlint?'
  },
  {
    name: 'prettier',
    type: 'confirm',
    message: 'Would you like to auto-format your source files with Prettier / Airbnb Style?'
  },
  {
    name: 'dev-server',
    type: 'confirm',
    message: 'Would you like to use Webpack Dev Server?'
  },
  {
    name: 'hot-reload',
    type: 'confirm',
    message: 'With hot reloading?'
  }
];

module.exports = { questionObjArr };
