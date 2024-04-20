const http = require('http');

http.createServer((req, res) => {
  res.write('SAMPLE_RESPONSE');
  res.end();
}).listen(8080);