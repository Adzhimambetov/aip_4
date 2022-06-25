var MongoClient = require("mongodb").MongoClient
var data = require("./data.js").data

MongoClient.connect("mongodb://localhost:27017/all",
    function (err, db) {
        if (err) throw err
        var collection = db.collection('hero')
        collection.insertMany(data, function (err, result) {
            db.close()
        })
    })