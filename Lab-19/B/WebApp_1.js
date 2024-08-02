// 2. Create a webapp with 5 pages like about, contact etc.. using ExpressJS. (B)
const express = require('express');
const app= express();

app.get('/login', function(req, res){
    res.send('this is my login page');
});
app.get('/home', function(req, res){
    res.send('this is my home page');
});
app.get('/about', function(req, res){
    res.send('this is my about page');
});
app.get('/contact', function(req, res){
    res.send('this is my contact page');
});
app.get('/help', function(req, res){
    res.send('this is my help page');
});

app.listen(3001,function(){
    console.log('Server listening on 3001');
});
