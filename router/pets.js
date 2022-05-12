const express = require('express')
const router = express();

router.get('/pets', (req,res) => res.send('Lista de petes'));
router.get('/pets/:id', (req,res) => res.send('Detalhes do pet: ' + req.params.id));
router.post('/pets', (req,res) => res.send('Cadastro de  pet'));
router.put('/pets/:id', (req,res) => res.send('Atualizacao de pet: ' + req.params.id));
router.delete('/pets/:id', (req,res) => res.send('Exclusao de pet: ' + req.params.id));


module.exports = router;
