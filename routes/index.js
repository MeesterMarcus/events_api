var express = require('express');
var http = require("http");
var rp = require('request-promise');

var router = express.Router();
var url ="https://app.ticketmaster.com/discovery/v2/events.json?keyword=kanye&apikey=FXtcvJb7gP7JHkHApAMrS8zToFfbqSYR";

router.get('/',function(req,res){
    res.send('Test index');
});

router.get('/newsfeed',function(req,res){
    // res.send("newsfeed");
    var options = {
        uri: url,
        headers: {
         'User-Agent': 'Request-Promise'
     },
     json: true // Automatically parses the JSON string in the response 
     };

    return rp(options)
    .then(function(response){
        res.send(response);
        console.log(response);
    });
});

module.exports = router; 