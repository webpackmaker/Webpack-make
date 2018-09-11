const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, ''),
  output: {
    path: path.resolve(__dirname, ''),
    publicPath: '',
    filename: 'build.js'
  },
  devServer: {
    contentBase: path.join(__dirname, '/'),
    port: 3000,
    hotOnly: true,
    publicPath: '/build'
  },

  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        }
      },
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        enforce: 'pre',
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'jshint-loader'
      },
      {
        enforce: 'pre',
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'eslint-loader'
      },
      undefined
    ]
  },
  resolve: { extensions: ['*', '.js'] }
};
