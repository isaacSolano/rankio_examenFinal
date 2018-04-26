(() => {
    'use strict'

    angular
    .module('rankio')
    .factory('dataStorageFactory', dataStorageFactory);

    dataStorageFactory.$inject = [];
    function dataStorageFactory(){
        let dataAPI = {
            agregarUsuario: _agregarUsuario,
            retornarUsuarios: _retornarUsuarios,

            agregarHotel: _agregarHotel,
            retornarHoteles: _retornarHoteles,
            eliminarHotel: _eliminarHotel,
            actualizarHotel: _actualizarHotel,

            agregarCalificacionHotel: _agregarCalificacionHotel,

            registrarCalificaciones: _registrarCalificaciones,
            retornarCalificaciones: _retornarCalificaciones,
            eliminarCalificacion: _eliminarCalificacion,

            crearSesion: _crearSesion,
            eliminarSesion: _eliminarSesion,
            retornarSesionActiva: _retornarSesionActiva
        }
        return dataAPI

        function _agregarUsuario(data){
            let response;

            let peticion = $.ajax({
                url: 'http://localhost:4000/api/registrar_usuario',
                type: 'post',
                contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                dataType: 'json',
                async: false,
                data: {
                    'cedula': data.cedula,
                    'contrasena': data.contrasena,
                    'correo': data.correo,
                    'fecha': data.fecha,
                    'nombreCompleto': data.nombreCompleto,
                    'telefono': data.telefono,
                    'admin': data.admin,
                }
            });
            peticion.done((datos) => {
                response = datos.success;
            });
            peticion.fail((err) => {
                response = err
            });
            return response;
        }

        function _retornarUsuarios(){
            let usuariosBD = [];

            let peticion = $.ajax({
                url: 'http://localhost:4000/api/retornar_usuarios',
                type: 'get',
                contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                dataType: 'json',
                async: false,
                data: {}                
            });

            peticion.done((usuarios) => {
                usuariosBD = usuarios;
            });
            peticion.fail(() => {
                usuariosBD = [];
                console.log('Error en la petición');
            });
            return usuariosBD
        }

        function _agregarHotel(data){
            let response;

            let peticion = $.ajax({
                url: 'http://localhost:4000/api/registrar_hotel',
                type: 'post',
                contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                dataType: 'json',
                async: false,
                data: {
                    'canton': data.canton,
                    'latitud': data.latitud,
                    'longitud': data.longitud,
                    'correoAtencion': data.correoAtencion,
                    'correoReservaciones': data.correoReservaciones,
                    'direccion': data.direccion,
                    'distrito': data.distrito,
                    'foto': data.foto,
                    'nombre': data.nombre,
                    'provincia': data.provincia,
                    'telefonoAtencion': data.telefonoAtencion,
                    'telefonoReservaciones': data.telefonoReservaciones,
                    'codigo': data.codigo,
                    'calificaciones': data.calificaciones,
                }
            });
            peticion.done((datos) => {
                response = datos.success;
            });
            peticion.fail((err) => {
                response = err
            });
            return response;
        }

        function _retornarHoteles(){
            let hotelesBD = [];

            let peticion = $.ajax({
                url: 'http://localhost:4000/api/retornar_hoteles',
                type: 'get',
                contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                dataType: 'json',
                async: false,
                data: {}                
            });

            peticion.done((hoteles) => {
                hotelesBD = hoteles;
            });
            peticion.fail(() => {
                hotelesBD = [];
                console.log('Error en la petición');
            });
            return hotelesBD
        }

        function _eliminarHotel(data){
            let response;

            let peticion = $.ajax({
                url: 'http://localhost:4000/api/eliminar_hotel',
                type: 'post',
                contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                dataType: 'json',
                async: false,
                data: {
                    'canton': data.canton,
                    'latitud': data.latitud,
                    'longitud': data.longitud,
                    'correoAtencion': data.correoAtencion,
                    'correoReservaciones': data.correoReservaciones,
                    'direccion': data.direccion,
                    'distrito': data.distrito,
                    'foto': data.foto,
                    'nombre': data.nombre,
                    'provincia': data.provincia,
                    'telefonoAtencion': data.telefonoAtencion,
                    'telefonoReservaciones': data.telefonoReservaciones,
                    'codigo': data.codigo,
                    'calificaciones': data.calificaciones,
                }                
            });

            peticion.done((datos) => {
                response = datos.success;
            });
            peticion.fail((err) => {
                response = err
            });
            return response;
        }

        function _actualizarHotel(data){
            let response;

            let peticion = $.ajax({
                url: 'http://localhost:4000/api/actualizar_hotel',
                type: 'put',
                contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                dataType: 'json',
                async: false,
                data: {
                    'canton': data.canton,
                    'latitud': data.latitud,
                    'longitud': data.longitud,
                    'correoAtencion': data.correoAtencion,
                    'correoReservaciones': data.correoReservaciones,
                    'direccion': data.direccion,
                    'distrito': data.distrito,
                    'foto': data.foto,
                    'nombre': data.nombre,
                    'provincia': data.provincia,
                    'telefonoAtencion': data.telefonoAtencion,
                    'telefonoReservaciones': data.telefonoReservaciones,
                    'codigo': data.codigo,
                    'calificaciones': data.calificaciones,
                }
            });
            peticion.done((datos) => {
                response = datos.success;
            });
            peticion.fail((err) => {
                response = err
            });
            return response;
        }

        function _agregarCalificacionHotel(codigoHotel, codigoCalificacion){
            let response;
            let peticion = $.ajax({
              url: 'http://localhost:4000/api/agregar_calificacion_hotel',
              type: 'put',
              contentType: 'application/x-www-form-urlencoded; charset=utf-8',
              dataType: 'json',
              async: false,
              data: {
                codigoHotel : codigoHotel,
                codigoCalificacion : codigoCalificacion
              }
            });
      
            peticion.done((datos) => {
              response = datos.success;
              console.log('Petición realizada con éxito');
            });
            peticion.fail((error) => {
              response = error;
              console.log('Ocurrió un error con la calificacion');
            });
      
            return response;
        }

        function _registrarCalificaciones(data){
            let response;

            let peticion = $.ajax({
                url: 'http://localhost:4000/api/registrar_calificacion',
                type: 'post',
                contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                dataType: 'json',
                async: false,
                data: {
                    'codigo': data.codigo,
                    'codigoHotel': data.codigoHotel,
                    'comida': data.comida,
                    'atencion': data.atencion,
                    'habitaciones': data.habitaciones,
                    'infraestructura': data.infraestructura,
                    'limpieza': data.limpieza,
                    'general': data.general,
                }
            });
            peticion.done((datos) => {
                response = datos.success;
            });
            peticion.fail((err) => {
                response = err
            });

            return response
        }

        function _retornarCalificaciones(){
            let calificaionesBD = [];

            let peticion = $.ajax({
                url: 'http://localhost:4000/api/retornar_calificaciones',
                type: 'get',
                contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                dataType: 'json',
                async: false,
                data: {}                
            });

            peticion.done((calificaciones) => {
                calificaionesBD = calificaciones;
            });
            peticion.fail(() => {
                calificaionesBD = [];
                console.log('Error en la petición');
            });
            return calificaionesBD
        }

        function _eliminarCalificacion(data){
            let response;

            let peticion = $.ajax({
                url: 'http://localhost:4000/api/eliminar_calificacion',
                type: 'post',
                contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                dataType: 'json',
                async: false,
                data: {
                    'codigo': data
                }                
            });

            peticion.done((datos) => {
                response = datos.success;
            });
            peticion.fail((err) => {
                response = err
            });
            return response;
        }

        function _crearSesion(key, value){
            let exito = true;
            sessionStorage.setItem(key, JSON.stringify(value));

            return exito
        }

        function _eliminarSesion(key){
            sessionStorage.removeItem(key);
        }

        function _retornarSesionActiva(key){
            return JSON.parse(sessionStorage.getItem(key));
        }
    }
})();