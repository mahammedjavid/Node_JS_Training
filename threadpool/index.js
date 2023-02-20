const { Console } = require('console');
const crypto = require('crypto');

const start_date  = Date.now(); 
// !Synchronous
// crypto.pbkdf2Sync("password", "salt",10000,512, "sha512")
// crypto.pbkdf2Sync("password", "salt",10000,512, "sha512")
// console.log("Time taken", Date.now()-start_date)
// !Asynchronous
const limit = 16
const OS = require('os')
process.env.UV_THREADPOOL_SIZE = OS.cpus().length // 8 core
// console.log(OS.cpus().length) // 8
for(let i = 0; i <limit ; i++) {
    crypto.pbkdf2("password", "salt",10000,512, "sha512", ()=>{
        console.log("Time taken", Date.now()-start_date)
    })
}

// ! Checking async for https module

const https = require('https')

for(let i = 0; i < limit; i++) {
    https.request("https://google.com"),(res)=>{
        res.on('data', ()=>{})
        res.on('end', ()=>{
            console.log
        })
    }
}