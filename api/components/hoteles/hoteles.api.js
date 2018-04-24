const HotelModel = require('./hoteles.model');

module.exports.registrar = (req, res) => {
    var newHotel = new HotelModel({
        canton: req.body.canton,
        latitud: req.body.latitud,
        longitud: req.body.longitud,
        correoAtencion: req.body.correoAtencion,
        correoReservaciones: req.body.correoReservaciones,
        direccion: req.body.direccion,
        distrito: req.body.distrito,
        foto: req.body.foto,
        nombre: req.body.nombre,
        provincia: req.body.provincia,
        telefonoAtencion: req.body.telefonoAtencion,
        telefonoReservaciones: req.body.telefonoReservaciones,
        codigo: req.body.codigo,
        calificaciones: req.body.calificaciones,
    });

    newHotel.save((err) => {
        if(err){
            res.json({success:false, msj: 'Problemas en la petición' + err});
        }else{
            res.json({success:true, msj: 'Se registro correctamente'});
        }
    });
}

module.exports.retornar = (req, res) => {
    HotelModel.find().then((hoteles) => {
        res.send(hoteles);
    })
}

module.exports.eliminar = (req, res) => {
    HotelModel.deleteOne({codigo: req.body.codigo}, (err) => {
        if(err){
            res.json({success:false, msj: 'Problemas en la petición' + err});
        }else{
            res.json({success:true, msj: 'Se registro correctamente'});
        }
    });
}

module.exports.actualizar = (req, res) => {
    HotelModel.update({codigo: req.body.codigo}, req.body, (err, hotel) => {
        if (err){
            res.json({success:false,msg:'No se ha actualizado.' + handleError(err)});
          } else{
            res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
          }
    });
}