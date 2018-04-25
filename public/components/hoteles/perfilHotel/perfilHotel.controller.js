(() => {
    'use strict'
    
    angular
    .module('rankio')
    .controller('controladorPerfilHotel', controladorPerfilHotel);

    controladorPerfilHotel.$inject = ['$state', 'servicioHoteles'];

    function controladorPerfilHotel($state, servicioHoteles){

        const hotelCodigo = servicioHoteles.hotelActivo();

        let hotelActivoInfo = servicioHoteles.obtenerInfoHotel(hotelCodigo);

        let calificaciones = servicioHoteles.retornarCalificacionesHotel(hotelCodigo);

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
        
        vm.comida = calcularComida(calificaciones);

        vm.atencion = calcularAtencion(calificaciones);

        vm.habitaciones = calcularHabitaciones(calificaciones);

        vm.infraestructura = calcularInfraestructura(calificaciones);
        
        vm.limpieza = calcularLimpieza(calificaciones);


        function calcularComida(calificaciones){
            let total = 0,
                promedio = 0,
                valorGrafico = 0;

            calificaciones.forEach(obj => {
                total += Number(obj.comida);
            });
            promedio = (total / calificaciones.length);
            valorGrafico = promediarValorGrafico(Math.round(promedio) );

            return valorGrafico
        }

        function calcularAtencion(calificaciones){
            let total = 0,
                promedio = 0,
                valorGrafico = 0;

            calificaciones.forEach(obj => {
                total += Number(obj.atencion);
            });
            promedio = (total / calificaciones.length);
            valorGrafico = promediarValorGrafico(Math.round(promedio) );

            return valorGrafico
        }

        function calcularHabitaciones(calificaciones){
            let total = 0,
                promedio = 0,
                valorGrafico = 0;

            calificaciones.forEach(obj => {
                total += Number(obj.habitaciones);
            });
            promedio = (total / calificaciones.length);
            valorGrafico = promediarValorGrafico(Math.round(promedio) );

            return valorGrafico
        }

        function calcularInfraestructura(calificaciones){
            let total = 0,
                promedio = 0,
                valorGrafico = 0;

            calificaciones.forEach(obj => {
                total += Number(obj.infraestructura);
            });
            promedio = (total / calificaciones.length);
            valorGrafico = promediarValorGrafico(Math.round(promedio) );

            return valorGrafico
        }

        function calcularLimpieza(calificaciones){
            let total = 0,
                promedio = 0,
                valorGrafico = 0;

            calificaciones.forEach(obj => {
                total += Number(obj.limpieza);
            });
            promedio = (total / calificaciones.length);
            valorGrafico = promediarValorGrafico(Math.round(promedio) );

            return valorGrafico
        }

        function promediarValorGrafico(ppromedio){
            switch (ppromedio){
                case 1:
                    return  25
                break;

                case 2: 
                    return 50
                break;

                case 3:
                    return 75
                break;

                case 4:
                    return 100
                break;
            }
        }

    }
})();