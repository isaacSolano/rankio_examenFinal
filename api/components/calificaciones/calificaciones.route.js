const express = require('express'),
        router = express.Router(),
        calificaciones = require('./calificaciones.api');

router.param('id', (req, res, next, id) => {
    req.body.id = id;
    next();
});

// se definen las rutas
router.route('/registrar_calificacion')
    .post((req, res) => {
        calificaciones.registrar(req, res)
    });

router.route('/retornar_calificaciones')
    .get((req, res) => {
        calificaciones.retornar(req, res)
    });

module.exports = router;