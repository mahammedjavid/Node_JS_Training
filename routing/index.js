const http = require('http');
 
let server = http.createServer((req,res)=>{
    if(req.url=="/home"){
        res.writeHead(200,{'content-type': 'text/plain'});
    res.end("Home Page");
    }else if (req.url=="/json"){
            res.writeHead(200,{'content-type': 'text/plain'});
        res.end("Json Page");
    }else{
        res.writeHead(404,{'content-type': 'text/plain'});
        res.end("Not Found", req.url);
    }
})

server.listen(1234, ()=>[
    console.log('listening on port')
])