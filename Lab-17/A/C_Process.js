// . Demonstrate “child_process” core module in NodeJS (A)
const childProcess = require('child_process');
childProcess.exec('"C:/Users/student/Desktop/Mayank/Lab-5/A/Graphical Calculator.html"',(err,stdout,stdin)=>{
    console.log(stdout)
});