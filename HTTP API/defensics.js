var http = require('http');
var options = {
  host: '192.168.56.101',
  port: '8080',
  path: '/monitor/get-available-plans'
};
callback = function(response) {
  var str = '';
  response.on('data', function (chunk) {
    str += chunk;
  });
  response.on('end', function () {
    console.log(str);
  });
}
http.request(options, callback).end();