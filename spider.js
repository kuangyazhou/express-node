var express = require("express");
var app = express();
var superagent = require('superagent');
var cheerio = require('cheerio');

app.get('/', function(req, res, next) {
    superagent.get('https://cnodejs.org/')
        .end(function(err, success) {
            if (err) {
                return next(err);
            }
            let $ = cheerio.load(success.text);
            var items = [];
            $('#topic_list .topic_title').each(function(index, element) {
                let $e = $(element);
                items.push({
                    title: $e.attr('title'),
                    href: $e.attr('href')
                })
            })
            res.send(items)
        });
})

var server = app.listen(2333, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('example app listening at http://%s:%s', host, port);
});