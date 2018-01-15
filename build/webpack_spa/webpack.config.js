const $c = require('./config.js');
let entry = require('./entry.js');
let plugins = require('./plugins.js')
module.exports = {
    entry: entry,
    output: {
        path: $c.root + 'dist/' + $c.productName,
        filename: "[name].js",
        chunkFilename : "[name].js"
    },
    devServer: {
        contentBase: $c.root + 'dist',
        compress: false,
        port: 8082,
        inline: false
    },
    plugins: plugins,
    module: {
        rules: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                use: {loader: "babel-loader"}
            },
			{
                test: /\.(css|less)$/,  
                use: $c.ExtractTextPlugin.extract({  
                    fallback: 'style-loader',  
                    use: [  
                        'css-loader'
                    ]  
                })  
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    extractCSS: false
                }
            }
        ]
    },

    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
};