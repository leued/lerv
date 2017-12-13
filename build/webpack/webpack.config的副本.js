const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: {

        rv: './src/core/rv.js',
        // lib: ['vue'],
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
        new CleanWebpackPlugin(['dist']),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "lib",
        //     filename: "lib.js",
            
        // }),
        new HtmlWebpackPlugin({
            title: 'spa',
            filename: 'index.html'
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