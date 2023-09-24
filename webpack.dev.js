const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const common = require('./webpack.common.js');
const pkg = require('./package.json');
const path = require('path');

const dotEnv = new Dotenv({
  path: '.env.loc',
  safe: true,
  defaults: true,
});
