var crypto = require('crypto');
var zlib = require('zlib');
var tar = require('tar');
var through = require('through');

var hash = crypto.createHash('md5', {encoding: 'hex'});

var gunzip = zlib.createGunzip();
var tr = through (write, end); 
var parse = tar.Parse();

var result = {};

parse.on ('entry', function(contents) {
	console.log('on entry');
	result.md5 = contents.pipe(hash);
	console.log(result.md5);
});

parse.on ('path', function(path) {
	console.log('path');
	result.path = path;
});

function write (buf) {
}

function end() {
	console.log('end');
	this.queue(result.md5 + ' ' + result.path + '\n');
}

var cipher = process.argv[2];
var passphrase = process.argv[3];

process.stdin.pipe(gunzip).pipe(parse).pipe(tr).pipe(process.stdout);

