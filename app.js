var http = require('http');
var fs = require('fs');
var path = require('path');


function getContentType(filePath) {

    switch(path.extname(filePath)){
        case('./html'):
            return 'text/html';
        case ('./css'):
            return 'text/css';
        case ('./js'):
            return 'text/javascript';
        default:
            return 'text/plain';
        }
}


http.createServer(function(req, res) {

    var path = '.' + req.url;
    var contentType = '';

    if (path === './') {
        path += 'Website/index.html';
        contentType = getContentType(path);
    } else {
        path = '.' + req.url;
        contentType = getContentType(path);
    }
    
    res.write('urlpath : ' + path + "\n" + 'contentType : ' + contentType);
    return res.end();
    /*
    fs.readFile(path, function(err, data) {
        if (err) {
            console.log(err);
            return res.end("Error reading the file");
        }
        res.writeHead(200, {'content-type' : 'text/html'})
        res.write(req.url);
        return res.end();
    });
    */

}).listen(8080);