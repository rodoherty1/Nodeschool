
var i = process.argv[2];

var a32 = new Uint32Array(1);
a32[0] = i;

var a16 = new Uint16Array(a32.buffer);

console.log (JSON.stringify(a16)); 
