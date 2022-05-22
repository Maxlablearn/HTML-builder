const fs = require('fs');
const path = require('path');

const resultDir = path.resolve(__dirname, 'project-dist');
const styesDir = path.resolve(__dirname, 'styles');

fs.readdir(styesDir, { withFileTypes: true }, (error, files) => {
  if (error) console.error(error.message);
  const outputStream = fs.createWriteStream(path.resolve(resultDir, 'bundle.css'));

  files.sort((a,b) => b.name - a.name).forEach((file) => {
    if (path.extname(path.resolve(styesDir, file.name)).substring(1) === 'css') {
      const stream = fs.createReadStream(path.resolve(styesDir, file.name), 'utf-8');
      stream.on('data', (chunk) => {
        outputStream.write(chunk + '\n');
      });
    }
  });
});