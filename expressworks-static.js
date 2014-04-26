var express = require('express');
var path = require('path');

var connect = require('connect');

var app = express();
app.use(connect.urlencoded());

app.use(express.static(process.argv[3]));

app.listen(process.argv[2]);

