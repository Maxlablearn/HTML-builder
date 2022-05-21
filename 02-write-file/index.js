const fs = require('fs');
const path = require('path');

const outputStream = fs.createWriteStream(path.resolve(__dirname, 'text.txt'));

console.log('Write a text:');

process.stdin.on('data', (data) => {
  const text = data.toString();
  if (text.startsWith('exit')) {
    console.log('Bye');
    outputStream.close();
    process.exit();
  } else {
    outputStream.write(text);

  } 
});
process.on('SIGINT', () => {
  console.log('Bye!');
  outputStream.close();
  process.exit();
});
