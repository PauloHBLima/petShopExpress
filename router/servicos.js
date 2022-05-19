const express = require('express');
const router = express.Router()

router.get('/servicos', (req,res) => res.send('Lista de servicos'));
router.get('/servicos/:id', (req,res) => res.send('Detalhes do servicos: ' + req.params.id));
router.post('/servicos', (req,res) => res.send('Cadastro de  servicos'));
router.put('/servicos/:id', (req,res) => res.send('Atualizacao de servicos: ' + req.params.id));
router.delete('/servicos/:id', (req,res) => res.send('Exclusao de servicos: ' + req.params.id));

module.exports = router;