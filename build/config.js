const path = require('path');
const Root = path.join(__dirname + '/../');
const spaName = "examples_spa";
const Config =  {
	root : Root,
	spaRoot : Root +spaName+'/',
	spaName : spaName,
	path : path
}

module.exports = Config;

