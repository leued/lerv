const $c = require('./config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const initHtml = require('./plugins/initHtml.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
let plugins = [];

plugins.push(new HtmlWebpackPlugin({
			filename: $c.productName + '/index.html',
			template: $c.root+ $c.productName + '/index.html',
			chunks: ['vendor','app']
}))


plugins.push(new $c.webpack.optimize.CommonsChunkPlugin({
    name: "vendor",
    filename: "vendor.js"
}))
// plugins.push(new $c.webpack.optimize.CommonsChunkPlugin({
//     name: "basecss",
//     filename: "base.js"
// }))


plugins.push(new initHtml({
	path: $c.productRoot + "_g/content.html"
}))
// chunk(entry chunks)中引用的 *.css 
plugins.push(new ExtractTextPlugin({
		filename: 'commom.css',
	}))

// //解析所有vue中的css
// plugins.push(new ExtractTextPlugin({
// 	filename: '[name].css',
// }))

module.exports =  plugins;