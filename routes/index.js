var express = require('express');
var router = express.Router();
var http = require("http");
var url ="app.ticketmaster.com";

router.get('/',function(req,res){
    res.send('Test index');
});

router.get('/newsfeed',function(req,res){
    res.send('Test newsfeed');
    var options = {
        host: url,
        path: "/discovery/v2/events.json?keyword=kanye&apikey=FXtcvJb7gP7JHkHApAMrS8zToFfbqSYR",
        method: 'GET'
    };

    http.request(options, function(res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('BODY: ' + chunk);
        });
    }).end();
});

module.exports = router; 