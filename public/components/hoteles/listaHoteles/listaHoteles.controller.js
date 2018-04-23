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
    }
})();