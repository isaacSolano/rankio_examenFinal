(() => {
    'use strict'

    angular
    .module('rankio')
    .service('servicioSesion', servicioSesion);

    servicioSesion.$inject = ['servicioUsuarios', 'dataStorageFactory'];

    function servicioSesion(servicioUsuarios, dataStorageFactory){
        const key = 'session';

        let sessionAPI = {
            inicioSesion: _inicioSesion,
            cerrarSesion: _cerrarSesion,
            usuarioActivo: _usuarioActivo,
            infoUsuarioActivo: _infoUsuarioActivo
        }
        return sessionAPI

        function _inicioSesion(pcredenciales){
            let usuariosBD = servicioUsuarios.retornarUsuarios(),
                exito = false;

            for(let i=0; i<usuariosBD.length; i++){
                if(usuariosBD[i].correo == pcredenciales.correo && usuariosBD[i].contrasena == pcredenciales.contrasena){
                    dataStorageFactory.crearSesion(key ,usuariosBD[i].correo);
                    exito = true;
                }
            }
            return exito
        }

        function _cerrarSesion(){
            dataStorageFactory.eliminarSesion(key);
        }

        function _usuarioActivo(){
            let sesionActiva = dataStorageFactory.retornarSesionActiva(key),
                correoActivo;

            if(!sesionActiva){
                correoActivo = undefined;
            }else{
                correoActivo = sesionActiva;
            }
            return correoActivo
        }

        function _infoUsuarioActivo(pcorreo){
            let usuariosBD = servicioUsuarios.retornarUsuarios(),
                infoUsuarioActivo = [];

            for(let i=0; i<usuariosBD.length; i++){
                if(usuariosBD[i].getId() == pcorreo){
                    infoUsuarioActivo = usuariosBD[i];
                }
            }
            return infoUsuarioActivo
        }

    }
})();