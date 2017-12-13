const path = require('path');
const Root = path.join(__dirname + '/../');
const webpack = require('webpack');
const Config =  {
	root : Root,
	path : path,
	webpack : webpack
}

module.exports = Config;

