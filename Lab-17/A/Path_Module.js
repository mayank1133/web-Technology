// 2. Demonstrate “path” core module in NodeJS. (A)
const path = require('path');
console.log(path.basename('C:/Users/student/Desktop/Mayank/Lab-17/A/Path_Module.js'));
console.log(path.dirname('C:/Users/student/Desktop/Mayank/Lab-17/A/Path_Module.js'));
console.log(path.extname('C:/Users/student/Desktop/Mayank/Lab-17/A/Path_Module.js'));
const filePath = path.join('C:/Users/student/Desktop/Mayank/Lab-17/A/Path_Module.js');
console.log(filePath);
const relPath=path.relative('/Documents','/Mayank/Lab-7')
console.log(relPath);