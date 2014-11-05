var express = require('express');

var app = express();

app.use(function(req, res, next){
  console.log("[%s] %s -> %s", 
	      Date().slice(0, 24), 
	      req.method, 
	      req.url);
  next();
});

app.use(express.static(__dirname + '/public'));

var server = app.listen(80, function() {
  console.log("[Server] Listening at %s", server.address().port);
});
