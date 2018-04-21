const mongoose = require('mongoose');

var UsuarioSchema = new mongoose.Schema({
    cedula: {type: String, required: true},
    contrasena: {type: String, required: true},
    correo: {type: String, required: true},
    fecha: {type: String, required: true},
    nombreCompleto: {type: String, required: true},
    telefono: {type: String,  required: true}
});

module.exports = mongoose.model('Usuario', UsuarioSchema);