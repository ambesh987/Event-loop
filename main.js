const http =require('http');
const express= require('express');
const res= require('express/lib/response');
const app =res();
const fs = require(fs);

const data= JSON.parse(fs.readFileSync('./db.json','utf-8'));

const server= http.createServer((req,res)=>{
    if(req.url=='/Books'){
        res.writeHead(200,{"Content-Type":"application/json"});
        res.write(JSON.stringify(data));
        res.end();
    }else{
        res.writeHead(200,{"Content-Type":"text/HTML"});
        res.write("Hello from server");
        res.end();

    }
});

const PORT=8000;
server.listen(PORT,()=>{
    console.log("your server started");
})