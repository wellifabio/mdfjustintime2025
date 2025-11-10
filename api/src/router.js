const express = require('express');
const router = express.Router();

const Usuario = require('./controllers/usuario');
const Produto = require('./controllers/produto');
const Producao = require('./controllers/producao');

router.get('/', (req, res) => {
    res.json({ titulo: 'API Just in Time em execução', version: '1.0.0' });
});

router.post('/usuarios', Usuario.create);
router.get('/usuarios', Usuario.readAll);
router.post('/login', Usuario.login);
router.delete('/usuarios/:id', Usuario.del);

router.post('/produtos', Produto.create);
router.get('/produtos', Produto.readAll);
router.patch('/produtos/:id', Produto.update);
router.delete('/produtos/:id', Produto.del);

router.post('/producoes', Producao.create);
router.get('/producoes', Producao.readAll);

module.exports = router;