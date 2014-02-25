
var bytes = [0, 15, 24, 3, 250, 83];

var b = new Buffer(bytes);

console.log(b.toString('hex'));
