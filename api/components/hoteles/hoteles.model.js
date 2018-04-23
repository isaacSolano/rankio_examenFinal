const mongoose = require('mongoose');

var HotelSchema = new mongoose.Schema({
    canton: {type: String, required: true},
    latitud: {type: String, required: true},
    longitud: {type: String, required: true},
    correoAtencion: {type: String, required: true},
    correoReservaciones: {type: String, required: true},
    direccion: {type: String, required: true},
    distrito: {type: String, required: true},
    foto: {type: String, required: true},
    nombre: {type: String, required: true},
    provincia: {type: String, required: true},
    telefonoAtencion: {type: String, required: true},
    telefonoReservaciones: {type: String, required: true},
    codigo: {type: String, required: true},
    calificaciones: {type: Array, required: false},
});

module.exports = mongoose.model('Hotel', HotelSchema);