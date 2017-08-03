var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = 5000;

var greeting = 'hello world';

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get('/hello', function(req,res){
    res.send(greeting);
});

app.post('/hello', function(req,res){
    var newGreeting = req.body.newGreeting;
    // console.log('data type:', typeof(req.body.newGreeting));
    // console.log('newGreeting:', req.body.newGreeting);
    
    if (newGreeting === ''){
        res.sendStatus(400);
    } else if (typeof(newGreeting) != 'string') {
        res.sendStatus(401);
    } else {
        greeting = newGreeting;
        res.sendStatus(201);
    }
});

app.post('/add-to-greeting', function(req,res){
    var stringToAdd = req.body.stringToAdd;
    // console.log('data type:', typeof(req.body.newGreeting));
    // console.log('newGreeting:', req.body.newGreeting);
    
    if (stringToAdd === ''){
        res.sendStatus(400);
    } else if (typeof(stringToAdd) != 'string') {
        res.sendStatus(401);
    } else {
        greeting += stringToAdd;
        res.sendStatus(201);
    }
});

app.post('/pumpup', function(req,res){
    greeting += '!';
    res.sendStatus(201);
});

app.listen(port, function(){
    console.log('listening on port', port);
    
});