(() => {
    'use strict'

    angular
    .module('rankio')
    .controller('controladorInicioSesion', controladorInicioSesion);
    
    controladorInicioSesion.$inject = ['$state', '$stateParams', 'servicioSesion'];

    function controladorInicioSesion($state, $stateParams, servicioSesion){
        let vm = this;

        vm.iniciarSesion = (pcredenciales) => {
            let exito = servicioSesion.inicioSesion(pcredenciales);

            if(!exito){
                swal({
                    title: 'Por favor revise sus datos',
                    text: 'El usuario o contrasena no coincide con nuestros datos',
                    icon: 'error',
                    button: 'Aceptar'
                })
            }else{
                $state.go('central')
            }
        }
    }
})();