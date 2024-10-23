const EventEmitter = require('./EventEmitter');
const emitter = new EventEmitter();

//Listener function
const greet = (name)=>{
    console.log(`Hello ${name}`);
}

//Subscribe to the 'greet' event
emitter.on('greet',greet);

//Emit the 'greet' event
emitter.emit('greet','Aylon');

//Unsubscribe from the 'greet' event
emitter.off('greet',greet);

//Emit again (no output since the listener has been remove)
console.log("Trying to emit...");
emitter.emit('greet','Aylon');

//Using once method
emitter.once('greet',greet);
emitter.emit('greet','Aylon');
//Emit again (no output since the listener has been remove)
console.log("Trying to emit...");
emitter.emit('greet','Aylon');