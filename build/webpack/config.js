const Config = require('../config.js');
const productName = "examples_spa";

Config.productName = productName;
Config.productRoot = Config.Root +productName+'/';

module.exports = Config;
