const $c = require('./config.js');
const glob = require('glob');
let keylist = [];

/*
*ex : [ 'examples_spa/app1/page.js', 'examples_spa/app2/page.js' ]
*/

let arr = glob.sync( $c.productName+'/**/page.js', { nodir: false });

arr.forEach((item) => {
    let key = item.split(/\/page.js/)[0].replace($c.productName + '\/','');
    keylist.push(key);
})

// [ 'app1', 'app2' ]
module.exports =  keylist;