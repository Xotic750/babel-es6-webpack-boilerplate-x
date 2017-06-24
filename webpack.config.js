const path = require('path');

const config = {
  devtool: 'cheap-module-eval-source-map',

  context: path.resolve(__dirname, 'src'),

  entry: [
    'babel-polyfill',
    './index.js',
  ],

  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    },
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    libraryTarget: 'umd',
    library: 'returnExports',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [],
};

module.exports = config;
