const http = require('http');
const hostname = '127.0.0.1';
const port = process.env.PORT || 3001;
const fs = require('fs');
const express = require('express');

const app = express();

app.get('./', function(req, res) {
    res.send('nodejs文件操作')
})

const buf1 = new Buffer('this is a test');
console.log(buf1.toString());

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Fuck the king!!');
});


//node 文件读取
fs.readFile('./src/text.txt', function(Error, data) {
    if (Error) { console.log(Error) };
    console.log('异步读取' + data, data.toString() + '\n');
})
fs.writeFile('./src/write.txt', '通过代码写入的内容' + new Date() + Math.random(), function(Error, data) {
    if (Error) { return console.error(error) };
    console.log(data);
    console.log('数据写入成功');
    fs.readFile('./src/write.txt', function(Error, data) {
        if (Error) { return console.error(Error) };
        console.log('读取文件' + data.toString());
    })
})

server.listen(port, hostname, () => {
    console.log(`服务器运行在 http://${hostname}:${port}/`, 'fuck the king!!!');
});