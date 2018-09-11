const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, '/build'),
    publicPath: '/build',
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
      }
    ]
  },
  resolve: { extensions: ['*', '.js'] }
};
