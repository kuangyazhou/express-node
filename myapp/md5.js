var crypto = require('crypto');
var md5 = crypto.createHash('md5');

var result = md5.update('123456').digest('hex');
console.log(result);