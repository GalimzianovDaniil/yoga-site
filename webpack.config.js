'use strict';

let path = require('path');

module.exports = {
  mode: 'production',
  entry: __dirname + '/src/js/script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist/js'
  },
  watch: true

  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       exclude: /(node_modules|bower_components)/,
  //       use: {
  //         loader: 'babel-loader?optional[]=runtime',
  //         options: {
  //           presets: [
  //             ["@babel/env", {
  //               targets: {
  //                 edge: "11",
  //                 firefox: "60",
  //                 chrome: "68",
  //                 safari: "11.1",
  //                 ie: "11"
  //               },
  //               useBuiltIns: "usage",
  //               corejs: '2.6.5'
  //             }]
  //           ]
  //         }
  //       }
  //     }
  //   ]
  // }
};
