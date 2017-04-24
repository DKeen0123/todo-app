var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.use(express.static('./app'));

app.listen(3000);
console.log('you are now listening to port 3000');
