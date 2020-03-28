var express = require('express');
var bodyParser = require('body-parser');

var urlencodeParser = bodyParser.urlencoded({extended:false});

var app = express();

app.get('/',function(req,res){
    var response = {
        _tdn:req.query._tdn,
        _mk:req.query._mk,
    };
    console.log(response);
    res.end(JSON.stringify(response));
})
app.post('/post',urlencodeParser,function(req,res){
    var response = {
        _tdn:req.body._tdn,
        _mk:req.body._mk,
    };
    console.log(response);
    res.end(JSON.stringify(response));
}).listen(8000);