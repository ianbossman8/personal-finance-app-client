const os = require('os')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
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
