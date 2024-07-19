// 5. Explore minimum 3 other core module from the documentation of NodeJS (B)
//OS MODULES
const op=require('os');
console.log("Platform: " + op.platform());
console.log("Architecture: " + op.arch());

// URL MODULEs
const ul=require('url');
adr = 'http://localhost:8080/default.htm?year=2017&month=february';
q = ul.parse(adr, true);
console.log("URL: " + q.host);
console.log("Path Name: " + q.pathname);
console.log("search :"+ q.search);

//EVENTS MODULES

events = require('events');
eventEmitter = new events.EventEmitter();

//Create an event handler:
myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');