const fs = require('fs');
const path = require('path');

const newFilesDir = path.resolve(__dirname, 'files-copy');
const oldFilesDir = path.resolve(__dirname, 'files');

fs.readdir(newFilesDir, (error) => {
  if (error) {
    // console.log('Created new directory');
    fs.mkdir(newFilesDir, (error) => {
      if (error) {
        console.error(error.message);
      }
    });
  }

  fs.readdir(oldFilesDir, { withFileTypes: true }, (error, files) => {
    if (error) {
      console.error(error.message);
    } else {
      files.forEach((file) => {
        fs.copyFile(path.resolve(oldFilesDir, file.name), path.resolve(newFilesDir, file.name), (error) => {
          if (error) {
            console.error(error.message);
          }
        });
      });
    }
  });
});
