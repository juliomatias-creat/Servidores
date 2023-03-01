const express = require('express');

const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

let jogadorDaVez = 0; // Inicia um contador em 0 para pegar a posição do primeiro jogador

app.get('/', (req, res) => {
    const nomeDoJogador = jogadores[jogadorDaVez] // nomeDoJogador armazena a 1° posição 
    
    jogadorDaVez++ // Pimeiro incremento, passa a valer 1 
    
    if (jogadorDaVez >= jogadores.length) {
    jogadorDaVez = 0;
    }
    
    return res.send(`É a vez de ${nomeDoJogador} jogar!`)
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
})