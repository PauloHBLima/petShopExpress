
const db = require('../db.json')

const homeController = {
    index: (req, res) => {
        const tittle = 'minha primeira aplicação com ejs';
        res.render('home', { title });
    },
    sobre: (req, res) => {
        res.render('home/sobre');
    },
    servicos: (req, res) => {
        const servico = db.servicos;
        res.render('home/servicos', { servico });
    },
    login: (req, res) => {
        res.send('login');


    }

}

module.exports = homeController;
