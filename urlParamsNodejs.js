//write a node js program that takes url module to parse values at browser end and print the values.

var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  /*Use the url module to turn the querystring into an object:*/
  var q = url.parse(req.url, true).query;
  /*Return the year and month from the query object:*/
  var txt = q.year + " " + q.month+" "+q.name;
  res.end(txt);
}).listen(8080);

//http://localhost:8080/?year=2023&month=march&name=Bhumi