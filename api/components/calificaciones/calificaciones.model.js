const mongoose = require('mongoose');

var CalificacionSchema = new mongoose.Schema({
    codigo: {type: String, required: true},
    codigoHotel: {type: String, required: true}, 
    comida: {type: String, required: true}, 
    atencion: {type: String, required: true}, 
    habitaciones: {type: String, required: true}, 
    infraestructura: {type: String, required: true}, 
    limpieza: {type: String, required: true}, 
    general: {type: String, required: true},
});

module.exports = mongoose.model('Calificacion', CalificacionSchema);