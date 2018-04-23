(() => {
    'use strict'

    angular
    .module('rankio')
    .service('servicioHoteles', servicioHoteles);

    servicioHoteles.$inject = ['dataStorageFactory'];
    function servicioHoteles(dataStorageFactory){
        const publicAPI = {
            registrarHotel: _registrarHotel,
            retornarHoteles: _retornarHoteles
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
    }
})();