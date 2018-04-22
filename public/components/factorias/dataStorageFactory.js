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

        function _crearSesion(value){
            sessionStorage.setItem('session', JSON.stringify(value));
        }

        function _eliminarSesion(){
            sessionStorage.removeItem('session');
        }

        function _retornarSesionActiva(){
            return JSON.parse(sessionStorage.getItem('session'));
        }
    }
})();