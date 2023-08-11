const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const autoprefixer = require('autoprefixer');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const polyfills = ['core-js/stable', 'regenerator-runtime/runtime'];

const envFile = process.env.ENV_FILE ? process.env.ENV_FILE : '.env.prod';
const WASM_JS_REGEXP = [
  /@emurgo\/cardano-serialization-lib-asmjs/,
  /@emurgo\/cardano-serialization-lib-browser/,
  /@coinspace\/monero-core-js-asm/,
  /@coinspace\/monero-core-js-wasm/,
];

const config = merge(common, {
  mode: 'production',
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: [
          path.resolve(__dirname, './node_modules/lodash/'),
          path.resolve(__dirname, './node_modules/core-js/'),
          path.resolve(__dirname, './node_modules/regenerator-runtime/'),
          path.resolve(__dirname, './node_modules/@tronscan/client/src/protocol/core/Tron_pb.js'),
          /\.asm\.js$/,
        ],
        use: {
          loader: 'babel-loader',
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { useBuiltIns: 'usage', corejs: '3.0' }],
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-private-methods',
            ],
            sourceType: 'unambiguous',
          },
        },
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
            },
          },
          {
            loader: 'postcss-loader',
