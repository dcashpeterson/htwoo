//entry can be an array and an include multiple files
const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'production',
  target: 'web',
  //When upgrading to webpack 5, change target and update target: 'browserslist',
  entry: {
    htwooreact: path.resolve(__dirname, './lib/index.js')
  },
  //When upgrading to webpack 5, add back to output: chunkLoading: false, wasmLoading: false
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js",
    libraryTarget: 'umd'
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "src")
    ],
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [{
      test: /\.css$/,
      exclude: /node_modules/,
      loader: ["style-loader", "css-loader"]
    }, {
      test: /\.svg$/,
      exclude: /node_modules/,
      loader: "svg-inline-loader"
    }]
  },
  externals: [
    'react',
    'react-dom'
  ]
};