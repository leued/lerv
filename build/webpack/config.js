const Config = require('../config.js');
const productName = "examples";
const _Config = {
	productName : productName,
	productRoot : Config.root +productName+'/',
	productStatic : Config.root +productName+'/' + 'static/',
	commonStylePath : productName + '/style'
}


Object.assign(_Config,Config)
module.exports = _Config;
