//const lodash = require('lodash');

//const array = [1,2,4,4,6,7,1];

//const arrayUnico = lodash.uniq(array);

//console.log(arrayUnico);

//console.log(lodash.uniq(array));

const {uniq} = require('lodash'); // importou a bib. lodash e desestruturou o método uniq

//const array = require('./array') // imprtou o arquivo array.js para dentro do arquivo index.js
                                 // Nele, já foi exportado o objeto contendo arrayNumeros e arrayLetras
// console.log(array.arrayNumeros);
// para acessar uma propriedade usa-se .nome
// console.log(array.arrayLetras);  

const {arrayLetras, arrayNumeros} = require('./array');
// Agora é possivel desestruturar o objeto para usar os dados separados, ignorando .nome

console.log(arrayLetras); 
console.log(arrayNumeros);

const arrayNumeroUnico = uniq(arrayNumeros);
const arrayLetraUnica = uniq(arrayLetras);

console.log(arrayNumeroUnico);
console.log(arrayLetraUnica); 

// Exibe o retorno da função uniq, que é salvo nessa constante. Um elemento do objeto que foi exportado
                               //do arquivo array.js

