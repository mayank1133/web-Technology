// 1. Demonstrate the use of middleware in Express. (A)
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('Request received at /');
    res.send('Hello from Express!');
});
const temp=(req, res, next) => {
    console.log('Middleware 1 executed');
    next();
}
app.use('/',temp);
app.listen(3003, (req, res) => {
    console.log('Server started at port 3003');
})