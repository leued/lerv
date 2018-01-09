const $c = require('./config.js');
const keylist  = require('./keylist.js');
let entry = {};
keylist.forEach((item) => {
    entry[item + '/page'] = $c.productRoot +item + '/page.js';
})

//通用js 
entry.vendor = ['vue','vue-router',$c.productRoot + 'style/css.js'];


module.exports =  entry;