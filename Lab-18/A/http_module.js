// 1. Create a hello world webapp using “http” core module in NodeJS. (A)
const http = require('http');
const server=http.createServer((req, res) => {
    res.end("Hello world")
});
server.listen(8080,() => {
    console.log("Server Started");
});
