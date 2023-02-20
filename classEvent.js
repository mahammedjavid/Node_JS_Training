const events = require('events');
class Event extends events{
    constructor(){
        super()
        this.eventCount = 0;
    }

    incrementCount(first,second){
        this.eventCount++
        this.emit("increment",first,second);

    }
    getEventCount(){
        console.log("Current Event Count",this.eventCount)
    }
}

module.exports = Event