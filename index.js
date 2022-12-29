//const lodash = require('lodash');

//const array = [1,2,4,4,6,7,1];

//const arrayUnico = lodash.uniq(array);

//console.log(arrayUnico);

//console.log(lodash.uniq(array));

const {uniq} = require('lodash'); // importou a bib. lodash e desestruturou o método uniq

const array = require('./array') // imprtou o arquivo array.js para dentro do arquivo index.js
                                 // Nele, já foi exportada a constante array
console.log(array);

const arrayUnico = uniq(array);

console.log(arrayUnico); // Exibe o conteúdo da constante array, que é a mesma que foi exportada do arquivo array.js


