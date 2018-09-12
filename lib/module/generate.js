const answersKey = require('./../answer');
const { npmMods } = require('./../npmMods');

module.exports = {
  generateNpmString: (obj) => {
    const npmString = [];
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
    
    return npmString;
  },
  generateModuleText: (object) => {
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
        "module": {
        "rules": [
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
  entry: path.resolve(__dirname, '${object.entry_path}'),
  output: {
    path: path.resolve(__dirname, '${object.destination_path}'),
    publicPath: '${object.destination_path}', 
    filename: 'build.js'
  },
  ${answer}
  resolve: { extensions: ['*', '.js']}
};`;
  },
}