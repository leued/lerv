const path = require('path');
const Root = path.join(__dirname + '/../');
const webpack = require('webpack');
const fs = require('fs');

const Config =  {
	root : Root,
	path : path,
	webpack : webpack,
	fs : fs
}

module.exports = Config;

