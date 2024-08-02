// 3. Create a webapp in NodeJS which reads ƒles like about.txt, contact.txt and display it
// using express (C )
const express = require('express');
const app = express();
 const fs = require('fs');
 
 app.use('/', (req, res) => {
    fs.readFile('abc.txt',(err, data) => {
      if (err) console.log(err) ;
      else res.send(data.toString());
    });
 });
 app.listen(3002, (req, res) => {
    console.log('Server is running on port 3002');
 });