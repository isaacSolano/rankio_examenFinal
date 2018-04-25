(() => {
    'use strict'
    
    angular
    .module('rankio')
    .controller('controladorPerfilHotel', controladorPerfilHotel);

    controladorPerfilHotel.$inject = ['servicioHoteles'];

    function controladorPerfilHotel(servicioHoteles){

        const hotelCodigo = servicioHoteles.hotelActivo();

        let hotelActivoInfo = servicioHoteles.obtenerInfoHotel(hotelCodigo);

        if(hotelCodigo == undefined){
            $state.go('central.listaHoteles');
        }

        let vm = this;

        vm.infoHotel = hotelActivoInfo;

        vm.coordenadas = [hotelActivoInfo.latitud, hotelActivoInfo.longitud];

        vm.registroCalificacion = () => {
            let calificacionesBD = servicioHoteles.retornarCalificaciones(),
                codigoCalificacion = calificacionesBD.length,
                general = calcularPromedio(vm.calificacion);

            let calificacion = new Calificacion(codigoCalificacion, hotelCodigo, vm.calificacion.comida, vm.calificacion.atencion, vm.calificacion.habitaciones, vm.calificacion.infraestructura, vm.calificacion.limpieza, general);

            let exito = servicioHoteles.registrarCalificaciones(calificacion);
            
            if(exito){
                swal({
                    title: 'Gracias',
                    text: 'Esta evaluación nos ayudará',
                    button: 'Aceptar',
                    icon: 'success'
                });
                $state.reload();
            }else{
                swal({
                    title: 'Error',
                    text: 'Tuvimos problemas registrando su evaluación, intenta de nuevo',
                    button: 'Aceptar',
                    icon: 'error'
                })
            }
        }

        function calcularPromedio(pcalificaciones){
            let calificacionTotal = Number(pcalificaciones.comida) + Number(pcalificaciones.atencion) + Number(pcalificaciones.habitaciones) + Number(pcalificaciones.infraestructura) + Number(pcalificaciones.limpieza),
            promedio = calificacionTotal / 5;

            return promedio
        }
        
        vm.comida = calcularComida();

        vm.atencion = 50;

        vm.habitaciones = 75;

        vm.infraestructura = 75;
        
        vm.limpieza = 100;

        function calcularComida(){
            let calificaciones = servicioHoteles.retornarCalificacionesHotel(hotelCodigo);

            console.log(calificaciones);
        }

    }
})();