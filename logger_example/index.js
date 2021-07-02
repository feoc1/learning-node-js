const Logger = require('./logger')

// Instantiating a logger:
const logger = new Logger()

logger.on('message', data =>
  console.log('Called Listener: ', data)
)

logger.log('Hello World')
