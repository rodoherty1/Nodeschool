var express = require('express');
var path = require('path');

var connect = require('connect');

var app = express();
app.use(connect.urlencoded());

app.use(express.static(path.join(__dirname, '/public')));

app.post('/form', function(req, res) {
	res.end('Hello ' + req.body.str);
});

app.listen(process.argv[2]);

