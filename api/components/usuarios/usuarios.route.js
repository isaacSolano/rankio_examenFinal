const express = require('express'),
        router = express.Router(),
        usuarios = require('./usuarios.api');

router.param('id', (req, res, next, id) => {
    req.body.id = id;
    next();
});

// se definen las rutas
router.route('/registrar_usuario')
    .post((req, res) => {
        usuarios.registrar(req, res)
    });

router.route('/retornar_usuarios')
    .get((req, res) => {
        usuarios.retornar(req, res)
    });

module.exports = router;