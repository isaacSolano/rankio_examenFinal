(() => {
    'use strict'

    angular
    .module('rankio')
    .service('servicioSesion', servicioSesion);

    servicioSesion.$inject = ['servicioUsuarios', 'dataStorageFactory'];

    function servicioSesion(servicioUsuarios, dataStorageFactory){
        let sessionAPI = {
            inicioSesion: _inicioSesion,
            cerrarSesion: _cerrarSesion,
            usuarioActivo: _usuarioActivo
        }
        return sessionAPI

        function _inicioSesion(pcredenciales){
            let usuariosBD = servicioUsuarios.retornarUsuarios(),
                exito = false;

            for(let i=0; i<usuariosBD.length; i++){
                if(usuariosBD[i].correo == pcredenciales.correo && usuariosBD[i].contrasena == pcredenciales.contrasena){
                    dataStorageFactory.crearSesion(usuariosBD[i].correo);
                    exito = true;
                }
            }
            return exito
        }

        function _cerrarSesion(){
            dataStorageFactory.eliminarSesion();
        }

        function _usuarioActivo(){
            let sesionActiva = dataStorageFactory.retornarSesionActiva(),
                correoActivo;

            if(!sesionActiva){
                correoActivo = undefined;
            }else{
                correoActivo = sesionActiva;
            }
            return correoActivo
        }

    }
})();