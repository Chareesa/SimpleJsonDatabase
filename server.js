/*jshint node: true*/
'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');

var port = process.env.PORT || 3500;

var path = __dirname + '/data/';

app.get('/file/:name', function(req, res) {
  console.log(req);
  var fileName = path + req.params.name + '.json';
  fs.readFile(fileName, function(err, data) {
    if (err) return res.status(500).send('Sorry, we\'ve encountered an error! :\'(');
    if (data) {
      res.json(JSON.parse(data));
    }
  });
});

app.post('/file/:name', bodyParser.json(), function(req, res) {
  console.log('Inside post!');
  var fileName = path + req.params.name + '.json';
  fs.writeFile(fileName, JSON.stringify(req.body), function(err) {
    if (err) return res.status(500).send('Sorry, we\'ve encountered an error! :\'(');
    res.json(req.body);
  });
});

app.listen(port, function() {
  console.log('server running on port: %d', port);
});
