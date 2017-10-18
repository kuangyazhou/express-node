const fs = require('fs');
const path = require('path');

const filename = path.join(__dirname, '/src');

function travel(params, callback) {
    fs.readdirSync(params).forEach(function(file) {
        let pathname = path.join(params, file);
        if (fs.statSync(pathname).isDirectory()) {
            travel(pathname, callback);
        } else {
            callback(pathname);
        }
    });
}
// console.log(filename);
travel('G:/Learn/express-node/src', function(e) {
    console.log(e);
})