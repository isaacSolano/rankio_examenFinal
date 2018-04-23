(() => {
    'use strict'



    angular
    .module('rankio')
    .controller('controladorListaHoteles', controladorListaHoteles);

    controladorListaHoteles.$inject = ['$state', '$stateParams', 'servicioSesion', 'servicioHoteles'];
    function controladorListaHoteles($state, $stateParams, servicioSesion, servicioHoteles){
        let vm = this;

        const correoActivo = servicioSesion.usuarioActivo();
        
        vm.infoUsuarioActivo = () => {
            let infoUsuarioActivo = servicioSesion.infoUsuarioActivo(correoActivo);

            return infoUsuarioActivo.admin
        }

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
    }
})();