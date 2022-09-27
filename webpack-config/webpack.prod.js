const path = require('path')
const { merge } = require('webpack-merge')
const webpackConfig = require('../webpack.config')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(webpackConfig, {
    mode: 'production',
    devtool: false,

    /* Optimization configuration */
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
      new CssMinimizerPlugin(),
    ],
  },

    /* Performance treshold configuration values */
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
      },
    
      /* Additional plugins configuration */
      plugins: [],

})