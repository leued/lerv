const $c = require('./config.js');
const keylist  = require('./keylist.js');
let entry = {};
keylist.forEach((item) => {
    entry[item + '/page'] = $c.root +item + '/page.js';
})

entry.vendor = ['vue','vue-router'];
module.exports =  entry;