var express = require('express');
var app = express();

var logger = require('./logger');

app.use(logger);

app.use(express.static('public'));

app.listen(80, function () {
  console.log("[Server] Listening on port %s\n", this.address().port);
});
