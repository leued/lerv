const Config = require('../config.js');
const productName = "examples_spa";

Config.productName = productName;
Config.productRoot = Config.root +productName+'/';

module.exports = Config;
