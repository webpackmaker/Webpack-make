let answers = {
  babel: `{
  "test": /\.js$/,
  "exclude": /node_modules/,
  "use": {
      "loader": "babel-loader",
      "options": {
          "presets": [
              "@babel/preset-env"
          ]
      }
    }
  }`,
  react: `{
    "test": /\.(js|jsx)$/,
    "exclude": /node_modules/,
    "use": {
      "loader": "babel-loader",
      "options": {
        "presets": [
          "@babel/preset-env",
          "@babel/preset-react"
        ]
      }
    }
  }`,
  typescript: `{
    "test": /\.tsx?$/,
    "exclude": /node_modules/,
    "use": {
      "loader": "ts-loader",
      "options": {
        "transpileOnly": true
      }
    }
  }`,
  vue: `{
    "test": /\.vue$/,
    "exclude": /node_modules/,
    "use": "vue-loader"
  }`,
  css: `{
    "test": /\.css$/,
    "use": [
        "style-loader",
        "css-loader"
    ]
  }`,
  scss: `{
    "test": /\.scss$/,
    "use": [
        "style-loader",
        "css-loader",
        "sass-loader"
    ]
  }`,
  less: `{
    "test": /\.less$/,
    "use": [
        "style-loader",
        "css-loader",
        "less-loader"
    ]
  }`,
  jshint: `{
    "enforce": "pre",
    "test": /\.(js|jsx)$/,
    "exclude": /node_modules/,
    "use": "jshint-loader"
  }`,
  eslint: `{
    "enforce": "pre",
    "test": /\.(js|jsx)$/,
    "exclude": /node_modules/,
    "use": "eslint-loader"
  }`,
  dev_server: `devServer: {
    contentBase: path.join(__dirname, '/'),
    port: 8080,
    publicPath: '/build',
  }`
};

module.exports = answers;