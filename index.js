var Express = require('express');
var staticFolder = require('express-static');
var app = Express();
var http = require('http');

app.use(staticFolder(__dirname + '/static', { maxAge: 86400000 }));

http.createServer(app).listen(5000, function () {

    console.log('CDN started on port ' + 5000);

});
