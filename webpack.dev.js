const os = require('os')
const webpack = require('webpack')
const dotenv = require('dotenv')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

function envVar() {
  const env = dotenv.config().parsed

  return Object.entries(env).reduce(
    (acc, [key, val]) => ({
      ...acc,
      [key]: val
    }),
    {}
  )
}

module.exports = merge(common, {
  mode: 'development',
  plugins: [new webpack.EnvironmentPlugin(envVar())],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    watchContentBase: true,
    host: '0.0.0.0',
    port: 3000,
    open: os.version().split(' ')[0] === 'Darwin' ? 'Google Chrome' : ''
  }
})
