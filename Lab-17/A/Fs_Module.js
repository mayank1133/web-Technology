// Demonstrate “fs” core module in NodeJS. (A)
const fs = require('fs');

// File paths
const filePath = 'example.txt';
const dirPath = 'testDir';

// Reading a file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(`File content:\n${data}`);

  // Writing to a file asynchronously
  const newData = 'New content added!';
  fs.writeFile(filePath, newData, 'utf8', err => {
    if (err) throw err;
    console.log('Data written to file.');

    // Appending data to a file asynchronously
    const appendData = '\nAdditional content.';
    fs.appendFile(filePath, appendData, 'utf8', err => {
      if (err) throw err;
      console.log('Data appended to file.');

      // Deleting a file asynchronously
      fs.unlink(filePath, err => {
        if (err) throw err;
        console.log('File deleted.');

        // Creating a directory asynchronously
        fs.mkdir(dirPath, err => {
          if (err) throw err;
          console.log('Directory created.');

          // Removing a directory asynchronously
          fs.rmdir(dirPath, err => {
            if (err) throw err;
            console.log('Directory removed.');

            // Reading a directory asynchronously
            fs.readdir('.', (err, files) => {
              if (err) throw err;
              console.log('Current directory files:');
              files.forEach(file => {
                console.log(file);
              });

              // Checking file stats asynchronously
              fs.stat(filePath, (err, stats) => {
                if (err) throw err;
                console.log(`File stats: ${JSON.stringify(stats, null, 2)}`);
              });
            });
          });
        });
      });
    });
  });
});

  
