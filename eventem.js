const { EventEmitter } = require('events');
//creating event emitters
const timerEventEmitter = new EventEmitter();
timerEventEmitter.emit("update");
let currentTime = 0;
// This will trigger the update event each passing second
setInterval(() => {
currentTime++;
timerEventEmitter.emit('update', currentTime);
}, 1000);
//subscribing to once event listner to the event emitter
timerEventEmitter.once('update', (time) => {
console.log('Message Received from Husna.');
console.log(`${time} seconds passed since the program started`);
});
console.log('EVENT EMIITER program successfully executed. ')