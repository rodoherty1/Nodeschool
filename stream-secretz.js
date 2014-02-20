var crypto = require('crypto');
var zlib = require('zlib');
var tar = require('tar');
var through = require('through');

var cipher = process.argv[2];
var passphrase = process.argv[3];

var decipher = crypto.createDecipher(cipher, passphrase);
var gunzip = zlib.createGunzip();
var parse = tar.Parse();

var path = {};

parse.on ('entry', function(entry) {
	if (entry.type == 'File') {
		path = entry.path;
		var hash = crypto.createHash('md5', {encoding: 'hex'});
		var tr = through (write); 
		entry.pipe(hash).pipe(tr).pipe(process.stdout);
	}
});


function write (buf) {
	this.queue(buf.toString() + ' ' + path + '\n');
}

process.stdin.pipe(decipher).pipe(gunzip).pipe(parse);

