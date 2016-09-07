var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// LOGGER
var logFactory = require('./log.js');
var logger = logFactory.create("rest");

app.get('/', function(req, res){
    var params = req.query;
    logger.info("Received GET params " + JSON.stringify(params) );

    res.json(params);
});
app.post('/', function(req, res){
    var json = req.body;
    logger.info("Received POST body " + JSON.stringify(json) );
    res.json(json);
});

app.listen(8988);

logger.info("Rest API started on port 8988");
