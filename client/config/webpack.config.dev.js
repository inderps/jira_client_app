const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// App files location
const PATHS = {
  app: path.resolve(__dirname, '../app'),
  build: path.resolve(__dirname, '../../app/assets'),
};

const plugins = [
  new webpack.NoErrorsPlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new ExtractTextPlugin('stylesheets/app.css', {
    allChunks: true,
  }),
];

module.exports = {
  env: process.env.NODE_ENV,
  entry: ['webpack-dev-server/client?http://0.0.0.0:9999', path.resolve(PATHS.app, 'main.js')],
  output: {
    path: PATHS.build + '/javascripts',
    filename: 'bundle.js',
    publicPath: '/',
  },
  stats: {
    colors: true,
    reasons: true,
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
  },
  module: {
    preLoaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
    }],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel'],
        include: PATHS.app,
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css', 'postcss-loader'),
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader?limit=8192',
      },
    ],
  },
  plugins: plugins,
  postcss: function () {
    return [autoprefixer];
  },
};
