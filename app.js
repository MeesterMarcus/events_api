var express = require('express');
var app = express();
var routes = require('./routes/index');

var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/events_db';

// Use connect method to connect to the server
MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    insertUsers(db, function () {
        db.close();
    });

    insertEvents(db, function () {
        db.close();
    });
});

var insertUsers = function (db, callback) {
    // Get the documents collection
    var collection = db.collection('users');
    // Insert some documents
    collection.insertMany([
        {
            firstName: "Jim",
            lastName: "Smith",
            email: "jimsmith@aol.com",
            username: "smithyjimmy",
            password: "abc123",
            eventIds: [],
            genres: ["Pop"],
            userIds: []
        }
    ], function (err, result) {
        callback(result);
    });
}

var insertEvents = function (db, callback) {
    // Get the documents collection
    var collection = db.collection('events');
    // Insert some documents
    collection.insertMany([
        {
            description: "Kanye Concert",
            street: "123 Some Street",
            city: "San Antonio",
            state: "TX",
            zip: "78204",
            genres: ["Rap", "Hip-hop"],
            attendees: [],
            date: "12/12/12"


        }
    ], function (err, result) {
        callback(result);
    });
}

app.use('/', routes);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});