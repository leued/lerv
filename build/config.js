const path = require('path');
const root = path.join(__dirname + '/../');
const webpack = require('webpack');
const fs = require('fs');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const Config =  {
	root ,
	path ,
	webpack ,
	fs ,
	ExtractTextPlugin
}

module.exports = Config;

