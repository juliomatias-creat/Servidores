const express = require('express'); // Instaciei uma instância do express dentro do arquivo index.js

const app = express(); //Coloquei essa instância dentro da constante app

// Utilizo o método get, onde ele cria uma rota que tem uma função que recebe uma requisição que foi solicitada e manda uma resposta de volta.
app.get('/home', (requisicao, resposta) => {
resposta.send('Olá... Esse é o meu primeiro servidor com o express');
});

app.get('/', (requisicao, resposta) => {
    resposta.send('Essa é minha rota principal');
    });

    app.get('/array', (requisicao, resposta) => {
       const array = [1, 2, 3, 4, 5];
        resposta.send(array);
        });
    

app.listen(3000); // A comunicação é feita através da porta 3000 do meu servidor...