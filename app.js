var express = require("express");
var app = express();
var utility = require('utility');

app.get('/', function(req, res) {
    res.send("fuck the king!!!");
});

app.get('/getMd5', function(req, res) {
    let q = req.query.q || 0;
    let md5Value = utility.md5(q);
    res.send(md5Value);
});

app.post('./', function(req, res) {
    res.send('Got a post request');
});

app.put('./user', function(req, res) {
    res.send('Got a Put request at /user');
});

app.delete('./user', function(req, res) {
    res.send('Got a DELETE request at /user');
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('example app listening at http://%s:%s', host, port);
});