const UsuarioModel = require('./usuarios.model');

module.exports.registrar = (req, res) => {

    var newUsuario = new UsuarioModel({
        cedula: req.body.cedula,
        contrasena: req.body.contrasena,
        correo: req.body.correo,
        fecha: req.body.fecha,
        nombreCompleto: req.body.nombreCompleto,
        telefono: req.body.telefono,
        admin: req.body.admin
    });

    newUsuario.save((err) => {
        if(err){
            res.json({success:false, msj: 'Problemas en la petición' + err});
        }else{
            res.json({success:true, msj: 'Se registro correctamente'});
        }
    });
}

module.exports.retornar = (req, res) => {
    UsuarioModel.find().then((usuarios) => {
        res.send(usuarios);
    })
}