const express = require('express');


// Inicia o express

const app = express();

// Começa a receber requests

app.listen(8080);

// Retorna os requests para as páginas criadas

app.get('/', (req, res) => {

    res.render('./pages/index.html');
});

app.get('/sobre', (req, res) => {

    res.render('./pages/about.html');
});

app.get('/contato', (req, res) => {

    res.render('/pages/contact-me.html');
});

// Retorna qualquer outro tipo de request pra uma página 404

app.use((req, res, next) => {
    res.render('./pages/404.html');
});