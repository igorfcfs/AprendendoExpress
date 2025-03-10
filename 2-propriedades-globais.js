console.log(__dirname); // current directory name
console.log(__filename); // current file name
setInterval(() => {
    console.log('hello world');
}, 1000);

console.log(module); // info about the current module (file)
console.log(process); //info about env where the program is being executed
console.log(require); // function to use modules (CommonJS)