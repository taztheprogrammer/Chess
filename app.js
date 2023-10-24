var http = require('http');


//this is how to create a basic server using node
http.createServer(function(req, res) {
    res.writeHead(200, {'content-type' : 'text/html'})
    res.end('hi');
}).listen(8080);