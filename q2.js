var fs = require("fs");
fs.readFile('input', function (err, data) {
if (err) return console.error(err);
console.log(data.toString());
});
console.log("Q1 OF PRAC12- NON BLOCKING EXECUTED SUCCESSFULLY!!");