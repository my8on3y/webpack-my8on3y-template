const path = require('path')
const { merge } = require('webpack-merge')
const webpackConfig = require('../webpack.config')
const devServer = require('webpack-dev-server')

module.exports = merge(webpackConfig, {
    mode: 'development',

    optimization: {
        usedExports: 'global',
    },

    devServer: {
        static: { 
            directory: path.resolve(__dirname, '../dist'), 
            publicPath: '/',
            watch: true,
        },   
        client: { overlay: true },        
        open: true,
        compress: true,
        hot: false,
        port: 9000,
    },

    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, '../dist')
    }
}) 