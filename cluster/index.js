// !CLUSTER MOTHOD TO MAKING USE OF OUR OS CORE TO HANDLE THE WORK PARLALLY

// const cluster = require('cluster');
// const http = require('http');

// if(cluster.isMaster){
//     console.log(`Master is running at ${process.pid}`) 
//     cluster.fork()
//     cluster.fork()
// }else{
//     let server = http.createServer((req,res)=>{
//         if(req.url == "/home"){
//             res.end("Home page")
//         }else if(req.url == "/slow"){
//             for(let i=0; i<600000000;i++){}
//             res.end("Slow page")
//         }
//     })
//     server.listen(3000, ()=>{
//         console.log("Master is running at 3000")
//     })
// }

//!Worker Threads

const http = require('http')
const { Worker } = require('worker_threads');

let server = http.createServer((req,res)=>{
    if(req.url == "/home"){
        res.end("Home page")
    }else if(req.url == "/slow"){

        //! passing thif file to anothe file 
        // let j= 0
        // for(let i=0; i<600000000;i++){
        //     j++
        // }
        const worker = new Worker('./work_thread.js')
        worker.on("message", (j)=>{
            res.end(`Slow page ${j}`)
        })
    }
})
server.listen(3000, ()=>{
    console.log("server is running at 3000")
})