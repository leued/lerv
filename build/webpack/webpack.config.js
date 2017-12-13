const $c = require('./config.js');

let entry = require('./entry.js');
let plugins = require('./plugins.js')



module.exports = {
    entry: entry,
    output: {
        path: $c.root + 'dist',
        filename: "[name].js"
    },
    devServer: {
        contentBase: $c.root + 'dist',
        compress: false,
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