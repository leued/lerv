const $c = require('../config.js');
const keylist  = require('./keylist.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let plugins = [];
keylist.forEach((item) => {
    plugins.push(new HtmlWebpackPlugin({
        filename: item+'/index.html',
        template: $c.root+'/'+item + '/index.html',
        chunks: ['lib',item + '/page']
    }))
})
module.exports =  plugins;