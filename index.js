const express = require('express');


// Inicia o express

const app = express();

// Define o local dos arquivos html 

app.use(express.static(__dirname + '/pages'));

// Começa a receber requests

app.listen(8080);

// Retorna os requests para as páginas criadas

app.get('/', (req, res) => {

    res.sendFile(__dirname + '/pages/index.html');
});

app.get('/sobre', (req, res) => {

    res.sendFile(__dirname + '/pages/about.html');
});

app.get('/contato', (req, res) => {

    res.sendFile(__dirname + '/pages/contact-me.html');
});

// Retorna qualquer outro tipo de request pra uma página 404

app.use((req, res, next) => {
    res.sendFile(__dirname + '/pages/404.html');
});