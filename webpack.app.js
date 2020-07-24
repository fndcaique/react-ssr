const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /.js/,
        use: 'babel-loader'
      }
    ]
  },
}