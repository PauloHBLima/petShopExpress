const express = require('express');
const app = express();
const petsRouter = express('./routes/pets');

app.use(petsRouter);


app.get('/', (req, res) => {
res.send('Olá mundo!');
})


// rotas dos serviços



/*
URL Base: http://localhost:3000/(nome_da_rota)
GET - /pets - Listar todos os pets -                  metodos http
GET - /pets/:id - Listar um pet por ID
POST - /pets - Criar um novo pet
PUT- /pets/:id - Atualizar um pet por ID (/pets/1)
DELETE - /pets/:id - Deleter um pet por ID (/pets/1)
URI - <=> endpoint
*/

app.listen(3000, () => console.log('rodando...'));
