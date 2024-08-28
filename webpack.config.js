// webpack.config.js
const path = require('path');

module.exports = {
  entry: './utils/index',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'YourPackageName', // Optional: for global access
    libraryTarget: 'umd', // Optional: for compatibility
  },
  mode: 'development', // or 'development'
};