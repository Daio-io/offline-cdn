var Express = require('express');
var static = require('express-static');
var app = Express();
var http = require('http');

app.use(static(__dirname + '/node_modules'));

http.createServer(app).listen(5000, function () {

    console.log('CDN started on port ' + 5000);

});
