(() => {
    'use strict'

    angular
    .module('rankio')
    .service('servicioHoteles', servicioHoteles);

    servicioHoteles.$inject = ['dataStorageFactory'];
    function servicioHoteles(dataStorageFactory){
        const key = 'hotel';
        const publicAPI = {
            registrarHotel: _registrarHotel,
            retornarHoteles: _retornarHoteles,
            eliminarHotel: _eliminarHotel,
            actualizarHotel: _actualizarHotel,

            crearSesion: _crearSesion,
            hotelActivo: _hotelActivo,
            borrarSesion: _borrarSesion,

            obtenerInfoHotel: _obtenerInfoHotel
        }
        return publicAPI

        function _registrarHotel(pnuevoRegistro){
            let hotelesBD = _retornarHoteles(),
                repetido = false;

            for(let i=0; i<hotelesBD.length; i++){
                if(hotelesBD[i].getId() == pnuevoRegistro.getId()){
                    repetido = true;
                }
            }
            if(!repetido){
                dataStorageFactory.agregarHotel(pnuevoRegistro)
            }
            return !repetido
        }

        function _retornarHoteles(){
            let hotelesBD = dataStorageFactory.retornarHoteles(),
                todosLosHoteles = [];

            if(hotelesBD.length == 0){
            }else{
                hotelesBD.forEach(obj => {
                    let objHotel = new Hotel (obj.canton, obj.latitud, obj.longitud, obj.correoAtencion, obj.correoReservaciones, obj.direccion, obj.distrito, obj.foto, obj.nombre, obj.provincia, obj.telefonoAtencion, obj.telefonoReservaciones, obj.codigo); 
                    
                    obj.calificaciones.forEach(calificacionTemp => {
                            let objCalificacion = new Calificacion(calificacionTemp.codigo);

                            objCalificacion.setCalificacion(objCalificacion);
                        });
                        todosLosHoteles.push(objHotel);
                });
            }
            return todosLosHoteles
        }

        function _eliminarHotel(photel){
            let exito = dataStorageFactory.eliminarHotel(photel);

            return exito
        }

        function _crearSesion(pcodigo){
            let exito = dataStorageFactory.crearSesion(key, pcodigo);

            return exito
        }

        function _actualizarHotel(photel){
            let exito = dataStorageFactory.actualizarHotel(photel);
            return exito
        }

        function _hotelActivo(){
            let sesionActiva = dataStorageFactory.retornarSesionActiva(key),
                codigoActivo;

            if(!sesionActiva){
                codigoActivo = undefined;
            }else{
                codigoActivo = sesionActiva;
            }
            return codigoActivo
        }

        function _obtenerInfoHotel(pcodigo){
            let hotelesBD = _retornarHoteles(),
                hotelActivo = [];

            for(let i=0; i<hotelesBD.length; i++){
                if(hotelesBD[i].getId() == pcodigo){
                    hotelActivo = hotelesBD[i];
                }
            }
            return hotelActivo
        }

        function _borrarSesion(){
            dataStorageFactory.eliminarSesion(key);
        }
    }
})();