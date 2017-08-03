var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = 5000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get('/hello', function(req,res){
    res.send('hello world');
});

app.listen(port, function(){
    console.log('listening on port', port);
    
});