const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const helpers = require('./helpers');
const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;

module.exports = {
    entry : {
        'polyfills':'./src/polyfills.ts',
        'vendor':'./src/vendor.ts',
        'app':'./src/main.ts'
    },

    resolve : {
        extensions: ['.ts','.js','.scss','json']
    },

    module : {
        rules : [
            { enforce: 'pre', test: /\.ts$/, exclude: /node_modules/, loader: 'tslint-loader'},
            {
                test : /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
                loader: '@ngtools/webpack'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.css$/,
                exclude: helpers.root('src','app'),
                loader: ExtractTextPlugin.extract({fallback: 'style-loader', use:'css-loader?sourceMap'})
            },
            {
                test: /\.css$/,
                exclude: helpers.root('src','app'),
                loader: 'raw-loader'
            },
            {
                 test: /\.(png|jpe?g|gif|ico)$/,
                 loader: 'url-loader',
                 options: {
                     limit: 10000
                 }
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },

    plugins: [
        new AngularCompilerPlugin({
            tsConfigPath: '.tsconfig.json',
            entryModule: helpers.root('src/app/app.module#AppModule'),
            sourceMap: true
        }),
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)/,
            helpers.root('./src'),
            {}
        ),
        new CommonsChunkPlugin({
            names : ['app','vendor','polyfills','manifest']
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            favicon: 'src/favicon.ico'
        }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $:'jquery',
            jquery: 'jquery'
        })
    ]
};