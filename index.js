const express = require('express');

const aplicativo = new express();

aplicativo.get('/',(req, res) => {
    res.sendFile(__dirname + '/bem-vindo/index.html')
});

aplicativo.get('/sobre',(req, res) => {
    res.send("Sobre")
});


aplicativo.listen(8081);