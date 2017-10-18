const http = require('http');
const path = require('path');
const fs = require('fs');


// function copy(src, dst) {
//     fs.writeFileSync(dst, fs.readFileSync(src));
// }

// function main(argv) {
//     copy(argv[0], argv[1]);
// }

// main(process.argv.slice(2));

//数据流操作

const rs = fs.createReadStream(pathname);
rs.on('data', function(chunk) {
    doSomething(chunk);
})

rs.on('end', function() {
    cleanUp();
})

const fileName = 'text.txt';
const sourceFile = path.join(__dirname, '/src/', fileName);
const destPath = path.join(__dirname, fileName);

// let readStream = fs.createReadStream(sourceFile);
// let writeStream = fs.createWriteStream(destPath);

fs.rename(sourceFile, destPath, function(err) {
    if (err) throw err;
    fs.stat(destPath, function(err, status) {
        if (err) throw err;
        console.log('status:' + JSON.stringify(status))
    })
})

// readStream.pipe(writeStream);
// console.log('ok', __dirname, __filename);