
var through = require('through');

var tr = new through(write);

function write(chunk) {
	this.queue(JSON.stringify(new Uint8Array(chunk)));
}

process.stdin.pipe(tr).pipe(process.stdout);



/*

Official Solution

  process.stdin.once('data', function(buff) {
    var ui8 = new Uint8Array(buff.length)
    for (var i = 0; i < buff.length; i++) ui8[i] = buff[i]
    console.log(JSON.stringify(ui8))
  })

*/
