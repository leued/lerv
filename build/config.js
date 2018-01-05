const path = require('path');
const Root = path.join(__dirname + '/../');
const webpack = require('webpack');
const fs = require('fs');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const Config =  {
	root : Root,
	path : path,
	webpack : webpack,
	fs : fs,
	ExtractTextPlugin:ExtractTextPlugin
}

module.exports = Config;

