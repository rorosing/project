const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = webpackMerge(commonConfig, {
    devtool: 'eval',
    output: {
        path: helpers.root('dist'),
        publicPath: 'http://localhost:3000/',
        filename: '[name].js'
    },
    plugins: [
        new BundleAnalyzerPlugin(),
        new ExtractTextPlugin('[name].css')
    ],
    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        proxy: {
            '/api': {
                target : 'http://localhost:8080',
                secure: false,
                pathRewrite: {'^/api':'/api'}
            }
        }
    }
})