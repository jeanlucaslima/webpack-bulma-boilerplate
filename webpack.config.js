const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const extractPLugin = new ExtractTextPlugin({
  filename: 'main.css',
});

module.exports = {
  entry: {
    app: './src/js/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015'],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: extractPLugin.extract({
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    extractPLugin,
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: 'src/about.html',
      chunks: [],
    }),
    new webpack.optimize.UglifyJsPlugin({
        // ...
    }),
    new CleanWebpackPlugin(['dist']),
  ],
};
