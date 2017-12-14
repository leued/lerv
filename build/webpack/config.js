const Config = require('../config.js');
const productName = "examples_spa";

Config.productName = productName;
Config.productRoot = Config.root +productName+'/';
const _Config = {
	productName : "examples_spa",
	productRoot : Config.root +productName+'/'
}


Object.assign(_Config,Config)
module.exports = _Config;
