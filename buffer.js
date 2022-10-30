//node.js buffer
//node.js buffer methods
//1.] buffer aloc
console.log('1.] buffer alloc example');
var buf = Buffer.alloc(6);
//check the length of buffer created
var buffLen = Buffer.byteLength(buf);
//print buffer length
console.log(buffLen);
console.log('2.] buffer compare example');
//2.] buffer compare
var buf1 = Buffer.from('html');
var buf2 = Buffer.from('html');
var a = Buffer.compare(buf1, buf2);
//This will return 0
console.log(a);
var buf1 = Buffer.from('h');
var buf2 = Buffer.from('t');
var a = Buffer.compare(buf1, buf2);
//This will return -1
console.log(a);
var buf1 = Buffer.from('t');
var buf2 = Buffer.from('h');
var a = Buffer.compare(buf1, buf2);
//This will return 1
console.log(a);
//3.] buffer concatenate
console.log('3.] buffer concatenate example');
var buffer1 = Buffer.from('a');
var buffer2 = Buffer.from('b');
var buffer3 = Buffer.from('c');
var arr = [buffer1, buffer2, buffer3];
console.log(arr);
//concatenate buffer with Buffer.concat method
var buf = Buffer.concat(arr);
console.log(buf);