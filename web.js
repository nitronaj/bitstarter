var express = require('express');

var fs = require('fs');


var outfile = "index.html";
var string = fs.readFileSync(outfile);
var buffer = new Buffer(string, string.length);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buffer.toString("utf-8"));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
