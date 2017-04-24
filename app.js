var express = require('express');
var todoController = require('./app/assets/controllers/todoController');

var app = express();

app.set('view engine', 'ejs');

app.use(express.static('./app'));

todoController(app);

app.listen(3001);
console.log('you are now listening to port 3001');
