var http = require('express');
var show = require('./module')

http.createServer(function(request,response){
    //response.statusCode = 200;  
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write('Tong la : ' + show.date());
    //response.cookie('name','test');
    response.sendDate('sample');
    response.end();
}).listen(3000);