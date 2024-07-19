// . Demonstrate “child_process” core module in NodeJS (A)
// Importing child_process module
const { spawn } = require('child_process');

// Command to execute
const command = 'ls';
const args = ['-lh', '/usr'];

// Spawning a child process
const child = spawn(command, args);

// Handling stdout data event
child.stdout.on('data', (data) => {
  console.log(`stdout:\n${data}`);
});

// Handling stderr data event
child.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

// Handling close event
child.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
