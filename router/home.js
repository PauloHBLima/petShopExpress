const express = require('express')
const router = express.Router();
const homeController = require('../Controllers/homeController')


router.get('/', homeController.index)
router.get('/sobre', homeController.sobre)
router.get('/servicos', homeController.servicos)
router.get('/login', homeController.login)


module.exports= router;