const express = require('express');

const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

let jogadorDaVez = 0;

app.get('/', (req, res) => {
    const nomeDoJogador = jogadores[jogadorDaVez]
    
    jogadorDaVez++
    
    if (jogadorDaVez >= jogadores.length) {
    jogadorDaVez = 0;
    }
    
    return res.send(`É a vez de ${nomeDoJogador} jogar!`)
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
})