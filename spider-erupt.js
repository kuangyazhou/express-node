var express = require("express");
var app = express();

var superagent = require('superagent');
var cheerio = require('cheerio');
var eventproxy = require('eventproxy');

var url = require('url');

var baseUrl = 'https://cnodejs.org/';

app.get('/', function(req, response, next) {
    superagent.get(baseUrl)
        .end(function(err, res) {
            if (err) {
                return console.log(err);
            }
            let items = [];
            let data = [];
            let $ = cheerio.load(res.text);
            $('#topic_list .topic_title').each(function(index, e) {
                let $e = $(e);
                let href = url.resolve(baseUrl, $e.attr('href'));
                items.push(href);
            });
            var ep = new eventproxy();
            ep.after('topic_html', items.length, function(item) {
                item = item.map(function(e) {
                    var topicUrl = e[0];
                    var topicHtml = e[1];
                    var $ = cheerio.load(topicHtml);
                    return ({
                        title: $('.topic_full_title').text().trim(),
                        href: topicUrl,
                        comment1: $('.reply_content').eq(0).text().trim()
                    });
                });
                // console.log('final');
                // console.log(item);
                data.push(item);
                response.send(data)
            });
            items.forEach(function(topicUrl) {
                superagent.get(topicUrl).end(function(err, success) {
                    // console.log('fetch', topicUrl + 'successful');
                    ep.emit('topic_html', [topicUrl, success.text]);
                })
            });
            // console.log(items);
        });
})

var server = app.listen(2333, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('爬虫 app listening at http://%s:%s', host, port);
});