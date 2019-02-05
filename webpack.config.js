/* eslint-env node */

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  module: {
    rules: [
      { test: /\.js$/, use: ['babel-loader'/*, 'eslint-loader'*/] },
    ],
  },
  output: {
    filename: 'script.js',
    path: __dirname,
  },
};
