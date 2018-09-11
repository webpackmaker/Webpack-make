module.exports = {
  npmMods: () => {
      return {
        babel: 'babel-loader @babel/core @babel/preset-env',
        React: '@babel/preset-react',
        vue: 'vue-loader',
        typescript: 'ts-loader',
        css: 'style-loader css-loader',
        scss: 'sass-loader',
        less: 'less-loader',
        jshint: 'jshint-loader',
        eslint: 'eslint-loader',
        prettier: 'prettier prettier-webpack-plugin',
        dev_server: 'webpack-dev-server',
      }
  },
}
