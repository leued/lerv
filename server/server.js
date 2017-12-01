const express = require('express');
const app = express();
const babel = require("babel-core");
const fs = require('fs');


app.use('/', express.static('./dist'));
app.use('/ex', express.static('./examples'));

// app.get('/*.js', function(req, res, next) {                                 
//     var query = req.originalUrl;
//     query =  query.substring(1, query.length).split('?')[0];
//         var content = null;
//         if (/tpl_/g.test(query)) {

//             var js = merge.readFile(  query);
//         } else {
//             var js = fs.readFileSync(  query, 'utf-8');
//         }

    
//     var option = {
//         "presets": [
//           "es2015"
//         ],
//         "plugins": []
//     };
//     js =  babel.transform(js, option).code;
//     // console.log(b.transform(js))
//     res.type('text/javascript');
//     res.send(js);
// });

app.listen(8008);

console.log('http://localhost:8080')