var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.send('Test index');
});

router.get('/newsfeed',function(req,res){
    res.send('Test newsfeed');
});

module.exports = router; 