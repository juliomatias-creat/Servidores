const express = require('express');

const app = express();

app.get('/usuarios', (req, res) => {
    const lista = 
[{id: 11, nome: 'Joao', idade: 23},
{id: 2, nome:'Maria', idade: 18},
{id: 4, nome: 'Ana', idade: 30,},
{id: 1, nome: 'Rodrigo', idade: 17},
{id: 123, nome: 'Rodrigo', idade: 17}];

res.send(lista);
});

app.listen(3000, () => {
    console.log('Servidor inicializado na porta 3000');
});