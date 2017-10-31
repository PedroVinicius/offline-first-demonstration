var http = require('http');
var fs = require('fs');
var path = require('path');
var port = process.env.PORT || 3000;
var indexFilePath = path.resolve(path.join(__dirname, 'index.html'));

const server = http.createServer(function (request, response) {
  var url = request.url;
  var filePath = url === '/' ? indexFilePath : path.resolve(path.join(__dirname, url));

  fs.readFile(filePath, function(_, fileContents) {
    response.writeHead(200, {
      'Content-Length': Buffer.byteLength(fileContents),
      'Content-Type': 'text/html'
    });

    response.write(fileContents);
  })
});

server.listen(port, function(err) {
  if(err) throw err && process.exit(1);

  console.log('Server is listening at port ' + port);
});