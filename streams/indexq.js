const fs = require('fs');

const readablestream = fs.createReadStream('./data.txt',{ encoding : 'utf8', highWaterMark : 2})

let writeablestream = fs.createWriteStream('./dataTwo.txt')

// !: 1)
// using stream but we can do it better by using pipe
// readablestream.on('data', (chunck)=>{
//     console.log(chunck)
//     writeablestream.write(chunck)
// })

// !Pipe

// here we can enable the chaining
// !: 2)
readablestream.pipe(writeablestream)

// Chaining with the zlib module

const zlib = require('zlib')

const gzib = zlib.createGzip()

let writableStreamTwo = fs.createWriteStream('./data.txt.gz')

readablestream.pipe(gzib).pipe(writableStreamTwo)