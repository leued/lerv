const $c = require('./config.js');
let entry = require('./entry.js');
let plugins = require('./plugins.js')
module.exports = {
    entry: entry,
    output: {
        path: $c.root + 'dist/spa',
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
                use: $c.ExtractTextPlugin.extract({  
                    fallback: 'style-loader',  
                    use: [  
                        'css-loader',
						'less-loader',
                        'autoprefixer-loader'
                    ]  
                })  
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    extractCSS: true
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