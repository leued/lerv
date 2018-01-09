const $c = require('./config.js');
const keylist  = require('./keylist.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const initHtml = require('./plugins/initHtml.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
let plugins = [];
keylist.forEach((item) => {
    plugins.push(new HtmlWebpackPlugin({
        filename: item+'/index.html',
        template: $c.productRoot + item + '/index.html',
        chunks: ['vendor',item + '/page']
    }))

    
})

plugins.push(new HtmlWebpackPlugin({
        filename: 'index.html',
        template: $c.productRoot +  'index.html',
        chunks: ['vendor']
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


//解析所有vue中的css
plugins.push(new ExtractTextPlugin({
	filename: '[name].css',
}))

module.exports =  plugins;