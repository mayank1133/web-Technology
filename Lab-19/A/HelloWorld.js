// 1. Create a hello world webapp using ExpressJS. (A)
const express= require('express');
const app=express();
app.get('/', function(req, res){
    res.send('Hello World');
});
app.listen(3000,function(){
    console.log('Server is running on port 3000');
});