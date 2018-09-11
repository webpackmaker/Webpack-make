const fs = require('fs');

const Obj = { entry_path: 'james.js',
 destination_path: '/hoes/',
 'dev-mode': [ 'yes' ],
 babel: true,
 react: true,
 typescript: true,
 vue: true,
 angular: true,
 css: true,
 scss: true,
 less: true,
 jshint: true,
 eslint: true,
 prettier: true,
 'dev-server': true,
 'hot-reload': true, };

 fs.writeFile('webpack.config.js', JSON.stringify(Obj), (err) => {
  if (err) {throw err};
   console.log("Saved");
 })

