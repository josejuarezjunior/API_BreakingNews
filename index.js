const express = require('express');
const app = express();

/*
ROTA
    1) Método HTTP: 
        GET - Pega uma info, 
        POST - Cria uma info,
        PUT - Altera toda a info,
        PATCH - Altera parte da info,
        DELETE - Apaga uma info

    2) Nome - Um identificador da rota. Ex: '/home'

    3) Function (Callback) - Responsável por executar algum comando.
*/

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(3000);