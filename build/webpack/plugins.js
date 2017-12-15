const $c = require('./config.js');
const keylist  = require('./keylist.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const initHtml = require('./plugins/initHtml.js');
let plugins = [];
keylist.forEach((item) => {
    plugins.push(new HtmlWebpackPlugin({
        filename: item+'/index.html',
        template: $c.root+'/'+item + '/index.html',
        chunks: ['vendor',item + '/page']
    }))
})

plugins.push(new $c.webpack.optimize.CommonsChunkPlugin({
    name: "vendor",
    filename: "vendor.js"
}))


plugins.push(new initHtml({
	path: $c.productRoot + "_g/content.html"
}))

module.exports =  plugins;