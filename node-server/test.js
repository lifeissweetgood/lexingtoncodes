var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    console.log("Request: " + req.url);
    /*if( req.url == "/index") {
        fs.readFile("index.html", function(err, text) {
            res.setHeader("Content-Type", "text/html");
            res.end(text);
        });
    }*/
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><body>');
    res.write('<form>');
    res.write('<input type="text" name="username" maxlength="20"/>');
    res.write('<input type="submit" value="Submit"/>');
    res.write('</form></body></html>');
    res.end('Hello World\n');
}).listen(1337, "127.0.0.1");
console.log('Server running at http://127.0.0.1:1337/');
