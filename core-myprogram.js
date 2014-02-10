var args=process.argv;
var lenght=args.length;
var sum=0;
for(var i=2; i<lenght; i++) {
sum=sum+Number(args[i]);
}
console.log(sum);
