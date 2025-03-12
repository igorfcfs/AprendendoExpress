const path = require('path');

console.log(path.sep);

const filePath = path.join('9-path-module.js');

const base = path.basename(filePath);
console.log(base);