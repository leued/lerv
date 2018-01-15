const $c = require('./config.js');
let entry = {};

//通用js 
entry.vendor = ['vue','vue-router',$c.productRoot + 'style/css.js'];
entry.index = $c.productRoot + 'js/index.js';


module.exports =  entry;