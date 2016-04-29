var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('hackathon.db');


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/queue', function (req, res, next) {
    var queue = [];

    db.serialize(function () {

        db.each("SELECT user, message, timestamp from queue", function (err, row) {
            queue.push({
                User: row.user,
                Message: row.message,
                TimeStamp: row.timestamp
            });
        });
        res.json(queue);
    });
    db.close();
});

module.exports = router;
