(() => {
    'use strict'

    angular
    .module('rankio')
    .controller('controladorCentral', controladorCentral);

    controladorCentral.$inject = ['$state', '$stateParams', 'servicioSesion'];

    function controladorCentral($state, $stateParams, servicioSesion) {

        const correoActivo = servicioSesion.usuarioActivo();

        if(correoActivo == undefined){
            $state.go('inicioSesion');
        }

        let vm = this;

        vm.admin = servicioSesion.infoUsuarioActivo(correoActivo).admin;

        vm.cerrarSesion = () => {
            swal({
                title: '¿Desea cerrar sesión?',
                text: 'Se cerrará la sesión',
                buttons: ['Cancelar', 'Continuar']
            }).then((cerrar) => {
                if(cerrar){
                    servicioSesion.cerrarSesion();
                    $state.go('inicio');
                }
            });
        
        }
    }
})();