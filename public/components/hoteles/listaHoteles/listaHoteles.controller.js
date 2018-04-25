(() => {
    'use strict'

    angular
    .module('rankio')
    .controller('controladorListaHoteles', controladorListaHoteles);

    controladorListaHoteles.$inject = ['$state', '$stateParams', 'servicioSesion', 'servicioHoteles'];
    function controladorListaHoteles($state, $stateParams, servicioSesion, servicioHoteles){
        
        servicioHoteles.borrarSesion();
        
        const correoActivo = servicioSesion.usuarioActivo();
        
        let vm = this;

        vm.admin = servicioSesion.infoUsuarioActivo(correoActivo).admin;

        vm.retornarHoteles = servicioHoteles.retornarHoteles();

        vm.eliminarHotel = (photel) => {
            let eliminar = swal({
                title: '¿Desea eliminar este hotel',
                body: 'Si lo hace ya no podrá ser visualizado por los usuarios',
                buttons: ['Cancelar', 'Continuar'],
                icon: 'info'
            }).then((confirmacion) => {
                if(confirmacion){
                    servicioHoteles.eliminarHotel(photel);
                    $state.reload();
                }
            });
        }

        vm.editarHotel = (hotelEditar) => {
            let transfDatos = servicioHoteles.crearSesion(hotelEditar.codigo);

            if(transfDatos){
                $state.go('central.editarHotel');
            }
        };

        vm.perfilHotel = (hoteles) => {
            let transfDatos = servicioHoteles.crearSesion(hoteles.codigo);

            if(transfDatos){
                $state.go('central.perfilHotel');
            }
        }
    }
})();