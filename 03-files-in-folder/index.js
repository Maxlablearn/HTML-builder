const fs = require('fs');
const path = require('path');

fs.readdir(path.resolve(__dirname, 'secret-folder'), { withFileTypes: true }, (error, files) => {
  if (error) {
    console.error(error.message);
  } else {
    files.forEach((file) => {
      if (!file.isDirectory()) {
        const fileName = file.name;
        const fileExtname = path.extname(path.resolve(__dirname, 'secret-folder', file.name)).substring(1);
        const fileNameNoExt = fileName.slice(0, - (fileExtname.length + 1));
        
        fs.stat(path.resolve(__dirname, 'secret-folder', file.name), (error, fileStat) => {
          if (error) console.error(error.message);
          const fileSize = fileStat.size / 1000 + 'kb';
          console.log(fileNameNoExt, ' - ', fileExtname, ' - ', fileSize);
        });
      }
    });
  }
});
