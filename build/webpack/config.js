const Config = require('../config.js');
const productName = "examples";
const _Config = {
	productName : productName,
	productRoot : Config.root +productName+'/'
}


Object.assign(_Config,Config)
module.exports = _Config;
