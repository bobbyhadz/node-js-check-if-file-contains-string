// Check if a File contains a String in Node.js

import {readFileSync, promises as fsPromises} from 'fs';

// 👇️ if using CommonJS syntax
// const {promises: fsPromises} = require('fs');

// ✅ read file ASYNCHRONOUSLY
async function checkIfContainsAsync(filename, str) {
  try {
    const contents = await fsPromises.readFile(
      filename,
      'utf-8',
    );

    const result = contents.includes(str);
    console.log(result);

    return result;
  } catch (err) {
    console.log(err);
  }
}

// 👇️ true
checkIfContainsAsync('./example.txt', 'hello');
