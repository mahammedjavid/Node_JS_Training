const eventEmitter = require('events')

const event = new eventEmitter()

event.on('message', (arg1, arg2) => {
    console.log(`Function called with ${arg1} and ${arg2} as arguments`)
}
)

event.emit("message", "Second Parameter", "Third Paramter")