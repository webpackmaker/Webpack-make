```
             _                   _   
 _ _ _  ___ | |_  ___  ___  ___ | |_ 
| | | || -_|| . || . || .'||  _|| '_|
|_____||___||___||  _||__,||___||_,_|
                 |_|                 
```
# Webpack-make
By TEAM TOES

###### This project was inspired by Webpack-Config-Generator: https://github.com/Webpack-Config-Generator/Webpack-Config-Generator

#### Wmake allows you to create and write a webpack configuration in your project directory, and to automatically install the npm dependencies that you have added in your configuration. 

#### For example, if you would like to use Babel, `wmake` will add the correct object to your webpack-config and can install babel-loader in your project directory. 

#### Run from your project directory—this is where your webpackconfig will be saved. 

#### To symlink locally:
```
npm init
npm i webpack-make --save
npm link ./node_modules/webpack-make
```
#### To run Webpack-make (wmake)
```
wmake
npm i
npx webpack
```
#### To symlink globally
```
npm init
npm i webpack-make --save -g
wmake
```
#### To unlink
```
npm uninstall webpack-make -g
```
#### Supported packages:
* Webpack: https://www.npmjs.com/package/webpack
* Babel: https://www.npmjs.com/package/babel-loader
* React: https://babeljs.io/docs/en/babel-preset-react
* Vue: https://www.npmjs.com/package/vue-loader
* Typescript: https://www.npmjs.com/package/ts-loader
* CSS: https://www.npmjs.com/package/style-loader, https://www.npmjs.com/package/css-loader
* SCSS: https://www.npmjs.com/package/sass-loader
* LESS: https://www.npmjs.com/package/less-loader
* JShint: https://www.npmjs.com/package/jshint-loader
* ESlint: https://www.npmjs.com/package/eslint-loader
* Prettier: https://www.npmjs.com/package/prettier-webpack-plugin
* Dev_Server: https://www.npmjs.com/package/webpack-dev-server

###### Send us a message to add support for more!
`teamtoescoding at gmail`

## License

[MIT](LICENSE)
