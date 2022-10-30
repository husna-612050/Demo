var events = require('events');
// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();
// Create an event handler as follows
var connectHandler = function connected() {
console.log('Husna, your connection was successfully established.');
// Fire the data_received event 
eventEmitter.emit('data_received');
}
// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);
// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function() {
console.log('Husna, your data was received after successfull establishment of the connection.');
});
// Fire the connection event 
eventEmitter.emit('connection');
console.log("Your connection was fired/emitted.");