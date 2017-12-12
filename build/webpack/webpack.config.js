const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const _root = "../../examples_spa";

let arr = glob.sync("examples_spa"+'/**/page.js', { nodir: true });
let entrys = {};
let plugins = [];


arr.forEach((a) => {
    let key = a.replace('examples_spa/','').split(/\/page.js/)[0];
    entrys[key+"/page"] = path.join(__dirname,"../../"+a);

    plugins.push(new HtmlWebpackPlugin({
        filename: key+'/index.html',
        template: path.join(__dirname,_root+"/"+key+"/index.html"),
        config: "aaa",
        chunks: ["lib",key]
    }))
})

entrys.lib = ['vue','jquery'];
plugins.push(new webpack.optimize.CommonsChunkPlugin({
    name: "lib",
    filename: "lib.js"
}))


module.exports = {
    entry: entrys,
    output: {
        path: path.join(__dirname, '../../dist'),
        filename: "[name].js"
    },
    devServer: {
        contentBase: path.join(__dirname, '../../dist'),
        compress: true,
        port: 8082
    },
    plugins: plugins,
    module: {
        rules: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            }
        ]
    },
    resolve: {
        alias: {
          'vue': 'vue/dist/vue.js'
        }
    }
};