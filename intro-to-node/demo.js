// // const path=require('path');
// // var pathfile = path.parse(__filename);
// // console.log(pathfile);
// const os = require('os');
// var free = os.freemem();
// var fre = os.totalmem();
// console.log(free,fre);


// const EventEmitter = require('events');
// const emitter =new EventEmitter();

// emitter.on('message logged', (arg) =>{
// console.log('Listener Called');

// });
// emitter.emit('message logged');


var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the eventhandler to an event:
eventEmitter.on('demo', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('demo');