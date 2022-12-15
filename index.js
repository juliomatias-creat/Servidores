
 //const lodash = require("lodash"); // Uso da biblioteca inteira.
 // require importa uma biblioteca ou arquivo, passamos o nome da biblioteca entre parênteses.
 // Armazenamos essa importação dentro da constante com o mesmo nomde da biblioteca.

 //const array = [1,2,4,4,6,7,1];

//const arrayUnico = lodash.uniq(array);
// Armazenamos o retorno do método uniq(retorna um cópia do array sem elementos repetidos)
// na constante arrayUnico

 //console.log(arrayUnico);
 // Exibe o retorno do arrayUnico sem elementos repetidos...

 // COM DESESTRUTURAÇÃO:
 
 const { uniq } = require("lodash"); // Seleciona apenas os métodos epecíficos
	
 const array = [1, 2, 4, 4, 6, 7, 1];

 const arrayUnico = uniq(array);

 console.log(arrayUnico);