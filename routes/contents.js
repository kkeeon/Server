var express = require('express'); 

var mysql = require('mysql');

var router = express.Router();

var connection = mysql.createConnection({

'host' : '', 'user' : '', 'password' : '', 'database' : '',

});

router.get('/:content_id', function(req, res, next) { con

nection.query('select * from board where id=?;',

[req.params.content_id], function (error, cursor) {

if (cursor.length > 0) 

res.json(cursor[0]);

else

res.status(503).json({ result : false, reason : "Cannot find selected article" });

});

});

router.post('/', function(req, res, next) {

connection.query('insert into board(title, content) values (?, ?);', [req.bod

if (error == null){

connection.query('select * from board where id=?;',

y.title, req.body.content], function (error, info) {

[info.insertId], function (error, cursor) {

if (cursor.length > 0) { 

res.json({

result : true, id : cursor[0].id, title : cursor[0].title, 

timestamp : cursor[0].timestamp,

});

res.status(503).json({ result : false, reason : "Cannot post article" });

}

else

});

}

else

res.status(503).json(error);

});

});

module.exports = router;