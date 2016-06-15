var express = require('express');
var server = express();


server.use(express.static(__dirname+'/public'));
console.log(__dirname+'/public');


server.get('/', function(request, response){
  response.sendFile('public/html/index.html', {root: __dirname});
});

server.get('/about', function(request, response){
  response.sendFile('public/html/about.html', {root: __dirname});
});

server.get('/contact', function(request, response){
  response.sendFile('public/html/contact.html', {root: __dirname});
});

server.listen(8080, function(){
  console.log('Now listening on port 8080');
});
