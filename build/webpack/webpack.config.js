const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        rv: './src/core/rv.js',
        lib: ['vue'],
    },
    output: {
        path: path.join(__dirname, '../../dist'),
        filename: "[name].js"
    },
    devServer: {
        contentBase: path.join(__dirname, '../../dist'),
        compress: true,
        port: 8082
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "lib",
            filename: "lib.js",
            
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname,'../../src/core/index.html'),
            // staticPath: _config.staticPath
        })
    ],
    module: {
        rules: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            }
        ]
    }
};