//const lodash = require('lodash');

//const array = [1,2,4,4,6,7,1];

//const arrayUnico = lodash.uniq(array);

//console.log(arrayUnico);

//console.log(lodash.uniq(array));

const {uniq} = require('lodash'); // importou a bib. lodash e desestruturou o método uniq

const {arrayLetras, arrayNumeros} = require('./array') // imprtou o arquivo array.js para dentro do arquivo index.js
                                 // Nele, já foi exportado o objeto contendo arrayNumeros e arrayLetras
//console.log(array);

console.log(arrayNumeros);
console.log(arrayLetras);

const arrayUnicoLetras = uniq(arrayLetras);
const arrayUnicoNumeros = uniq(arrayNumeros);

console.log(arrayUnicoLetras); // Exibe o conteúdo de um elemento do objeto que foi exportado
                               //do arquivo array.js

console.log(arrayUnicoNumeros);
//console.log(arrayUnico); 

