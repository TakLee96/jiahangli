var express = require('express');

var app = express();

app.use(function(req, res, next){
  console.log(req.method, req.url);
  next();
});

app.use(express.static(__dirname + '/public'));

var server = app.listen(5000, function() {
  console.log("[Server] Listening at %s", server.address().port);
});
