const $c = require('./config.js');
let entry = require('./entry.js');
let plugins = require('./plugins.js')
let ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: entry,
    output: {
        path: $c.root + 'dist',
        filename: "[name].js"
    },
    devServer: {
        contentBase: $c.root + 'dist',
        compress: false,
        port: 8082,
		inline: true
    },
    plugins:plugins,
    module: {
        rules: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                use: {loader: "babel-loader"}
            },
			{
                test: /\.(css|less)$/,  
                use: ExtractTextPlugin.extract({  
                    fallback: 'style-loader',  
                    use: [  
                        'css-loader',
						'less-loader',
                        'autoprefixer-loader'
                    ]  
                })  
            }
        ]
    },
	
    resolve: {
        alias: {
          'vue': 'vue/dist/vue.js'
        }
    }
};