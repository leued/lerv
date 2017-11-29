var express = require('express');
var app = express();

app.use('/', express.static('./src'));
app.use('/ex', express.static('./examples'));

app.listen(8008);