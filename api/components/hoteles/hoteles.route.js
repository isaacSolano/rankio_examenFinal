const express = require('express'),
        router = express.Router(),
        hoteles = require('./hoteles.api');

router.param('id', (req, res, next, id) => {
    req.body.id = id;
    next();
});

// se definen las rutas
router.route('/registrar_hotel')
    .post((req, res) => {
        hoteles.registrar(req, res)
    });

router.route('/retornar_hoteles')
    .get((req, res) => {
        hoteles.retornar(req, res)
    });

router.route('/eliminar_hotel')
    .post((req, res) => {
        hoteles.eliminar(req, res)
    });

module.exports = router;