const EventEmitter = require('events');
const uuid = require('uuid');

// uuid
console.log(uuid.v4());

class Logger extends EventEmitter {
  log(msg) {
    // call event
    this.emit('message', { id: uuid.v4(), msg});
  }
}

// module.exports = Logger;

const logger = new Logger();

logger.on('message', (data) => console.log(`Called Listener: ${data}`));

logger.log('hello world');
logger.log('hello');
logger.log('world');
