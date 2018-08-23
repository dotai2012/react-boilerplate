const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const VENDOR = ['react', 'react-dom', 'react-redux', 'redux', 'redux-thunk', 'react-router', 'react-router-dom'];
const config = {
  entry: { bundle: './src/front/index.js' },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    publicPath: 'build/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          },
        }],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  mode: 'development',
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      name: 'vendor',
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
module.exports = config;
