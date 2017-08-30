const http = require('http');
const hostname = '127.0.0.1';
const port = 3001;
const fs = require('fs');

const buf1 = new Buffer('this is a test');
console.log(buf1.toString());

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Fuck the king!!');
});


//node 文件读取
fs.readFile('./file/text.txt', function(Error, data) {
    if (Error) { console.log(Error) };
    console.log('异步读取' + data, data.toString());
})

server.listen(port, hostname, () => {
    console.log(`服务器运行在 http://${hostname}:${port}/`, 'fuck the king!!!');
});