const EventEmitter = require('events');

//create class
class MyEmitter extends EventEmitter {}

//init object
const myEmitter = new MyEmitter();

//event listener
myEmitter.on('event', () => console.log('Event Fired'));

//INIT EVENT
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
