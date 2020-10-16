'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'main', 'js', 'script.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'main', 'static')
  },
  watch: true,

  devtool: "source-map",

  module: {}
};
