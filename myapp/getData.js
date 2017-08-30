var express = require('express');

var app = express();


//获取Json中的数据;
var goodsData = require('./goods.json');

app.get('/', function(req, res) {
    goodsData.status = "200"
    res.json(goodsData);
    // res.send('hello json');
});


var server = app.listen(8888, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('example app listening at http://%s:%s', host, port);
});