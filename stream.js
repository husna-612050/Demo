var fs = require("fs");
var data = '';
// Create a readable stream
//Reading from a Stream
var readerStream = 
fs.createReadStream('input');
// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');
// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
data += chunk;
});
readerStream.on('end',function() {
console.log(data);
});
readerStream.on('error', function(err) {
console.log(err.stack);
});
console.log("Implementation of STREAMS concept for practical 12 done successfully!");