const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    assetModuleFilename: 'images/[hash].[ext]',
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/,
        type: 'asset/resource',
      },
    ],
  },
};
