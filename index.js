const sum = require('./module.js')
// console.log(sum(2))
const json = require('./data.json')
// console.log(json)


// !Path Module
// console.log(__filename)
// console.log(__dirname)
const path = require('path')
// console.log(path.basename(__filename))
// console.log(path.basename(__dirname))
// console.log(path.extname(__filename))
// console.log(path.parse(__filename)); //returns ext, name, dir, root 
// console.log(path.format(path.parse(__filename))); //return path 

// console.log(path.isAbsolute(__filename));
// console.log(path.isAbsolute("./data.json"));

// !Join
// console.log(path.join("folder1","folder2","index.js"))
// console.log(path.join("/folder1","folder2","index.js"))
// console.log(path.join("/folder1","folder2","../index.js"))
// console.log(path.join(__dirname, '/data.json'))
// !resolve
// console.log(path.resolve("folder1","folder2","index.js"))
// console.log(path.resolve("/folder1","folder2","index.js"))
// console.log(path.resolve("/folder1","folder2","../index.js"))
// console.log(path.resolve(__dirname, '/data.json'))

// !Event Emitter Extended

// ?Basic event is in events.js

const eventExtended = require('./classEvent')
const newExtendedEvent = new eventExtended()



newExtendedEvent.on("increment",(first,second)=>{
    console.log(`increment event called and this two are arguments ${first} and ${second}`)

})
newExtendedEvent.incrementCount("firstArgument","SecondArgument")
newExtendedEvent.incrementCount("firstArgument","SecondArgument")
newExtendedEvent.getEventCount()
