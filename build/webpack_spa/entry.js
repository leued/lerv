const $c = require('./config.js');
let entry = {};

//通用js 
entry.vendor = ['vue','vue-router',$c.productRoot + 'style/css.js'];
entry.app = $c.productRoot + 'js/app.js';


//通用css
// entry.common = $c.root + $c.commonStylePath + '/common.css';


module.exports =  entry;