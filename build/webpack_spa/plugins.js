const $c = require('./config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const initHtml = require('./plugins/initHtml.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
let plugins = [];

plugins.push(new HtmlWebpackPlugin({
			filename:  'index.html',
			template: $c.root+ $c.productName + '/index.html',
			chunks: ['vendor','index']
}))


plugins.push(new $c.webpack.optimize.CommonsChunkPlugin({
    name: "vendor",
    filename: "vendor.js",
    minChunks : Infinity
}))



plugins.push(new initHtml({
	path: $c.productRoot + "_g/content.html"
}))



plugins.push(new ExtractTextPlugin({
	filename: '[name].css',
}))

plugins.push(new BundleAnalyzerPlugin({
    openAnalyzer:false
}));

module.exports =  plugins;