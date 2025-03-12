//CommonJS - every file in Node is module

const names = require('./4-exportar-nomes');
const {igor, felipe} = require('./4-exportar-nomes');
const sayHi = require('./5-exportar-funcao-lambda');
const {items, singlePerson} = require('./6-formas-alternativas-de-exportar');
require('./7-module-executa-automatico-sem-atribuir-require-a-constante');


console.log(names);

sayHi('Jorge');
sayHi(names.igor);
sayHi(felipe);


console.log(items);
console.log(singlePerson);