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
