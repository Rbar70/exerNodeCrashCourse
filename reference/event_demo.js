const EvenEmitter = require('events');
const { EventEmitter } = require('stream');

// Crt Class
class MyEmitter extends EventEmitter {}

// init object
const myEmitter = new MyEmitter();

//Evt listener
myEmitter.on('event', () => console.log('Event Fired!'));


myEmitter.emit('event');

myEmitter.emit('event');

myEmitter.emit('event');

myEmitter.emit('event');