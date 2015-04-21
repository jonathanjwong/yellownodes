var sum = 0;
var i = 2;
while (process.argv[i] !== undefined) {  //node is dumb
    sum = sum + Number(process.argv[i]);
    i = i + 1;
}
console.log(sum);