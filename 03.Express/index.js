const http = require('http');

const express = require('express');

const app = express();


app.get((req,res,next)=>{
    console.log('hello world');
 next()
});

app.get((req,res)=>{
    res.send('<h1>hello world again</h1>');
});

const server = http.createServer(app);
server.listen(3002);