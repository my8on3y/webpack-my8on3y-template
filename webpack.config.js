const __env = require('./webpack-config/env')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin') 

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: path.resolve(__dirname, 'src')
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    to: path.resolve(__dirname, 'dist/images'),
                    from: path.resolve(__dirname, 'src/images')
                }
            ]
        })
    ],

    module: {
        rules: [
            {
                test: /\.((c|sa|sc)ss)$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  { loader: 'file-loader' },
                  
                ],
              },
              {
                test: /\.(png|gif|jpe?g|svg)$/i,
                type: 'asset',
                parser: {
                  dataUrlCondition: {
                    maxSize: 4000,
                  },
                },
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                type: 'asset',
                parser: {
                  dataUrlCondition: {
                    maxSize: 4000,
                  },
                },
            }              
        ]
    }
} 