const path = require('path');

module.exports = {
  mode: 'deveolopment',
  entry: 'index.js',
  output: {
    path: path.resolve(__dirname, '/src'),
    publicPath: '/src',
    filename: 'undefined'
  },
  devServer: {
    contentBase: path.join(__dirname, '/'),
    port: 3001,
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
            presets: ['env']
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
            presets: ['env', 'react']
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
      }
    ]
  },
  resolve: { extensions: ['*', '.js'] }
};
