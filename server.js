var app = require('express')();

app.use(express.static(__dirname + '/public'));

var server = app.listen(5000, function(){
  console.log("[Server] Listening at %s", server.address().port);
});
