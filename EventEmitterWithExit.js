const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('Message',()=>{
    console.log('Hello I am Emitter, Emiiting messages using Event emitter');
});

setInterval(()=>{
    emitter.emit('Message');
        setTimeout(()=>{
            console.log('Terminating the message application');
            process.exit();
        },10000);
},1000);


