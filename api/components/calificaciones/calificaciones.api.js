const CalificacionModel = require('./calificaciones.model');

module.exports.registrar = (req, res) => {
    var newCalificacion = new CalificacionModel({
        codigo: req.body.codigo,
        codigoHotel: req.body.codigoHotel, 
        comida: req.body.comida, 
        atencion: req.body.atencion, 
        habitaciones: req.body.habitaciones, 
        infraestructura: req.body.infraestructura, 
        limpieza: req.body.limpieza, 
        general: req.body.general,
    });

    newCalificacion.save((err) => {
        if(err){
            res.json({success:false, msj: 'Problemas en la petición' + err});
        }else{
            res.json({success:true, msj: 'Se registro correctamente'});
        }
    });
}

module.exports.retornar = (req, res) => {
    CalificacionModel.find().then((calificaciones) => {
        res.send(calificaciones);
    })
}

module.exports.eliminar = (req, res) => {
    CalificacionModel.deleteMany({codigoHotel: req.body.codigo}, (err) => {
        if(err){
            res.json({success:false, msj: 'Problemas en la petición' + err});
        }else{
            res.json({success:true, msj: 'Se elimino correctamente'});
        }
    })

}