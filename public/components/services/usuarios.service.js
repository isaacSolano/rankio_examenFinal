(() => {
    'use strict'

    angular
    .module('rankio')
    .service('servicioUsuarios', servicioUsuarios);

    servicioUsuarios.$inject = ['dataStorageFactory'];

    function servicioUsuarios(dataStorageFactory){
        let publicAPI = {
            agregarUsuario: _agregarUsuario,
            retornarUsuarios: _retornarUsuarios
        }
        return publicAPI

        function _agregarUsuario(pusuarioAgregar){
            let usuariosBD = _retornarUsuarios(),
                repetido = false;

            for(let i=0; i<usuariosBD.length; i++){
                if(usuariosBD[i].getId() == pusuarioAgregar.getId()){
                    repetido = true;
                }
            }

            if(!repetido){
                dataStorageFactory.agregarUsuario(pusuarioAgregar)
            }
            return !repetido
        }

        function _retornarUsuarios(){
            let usuariosBD = dataStorageFactory.retornarUsuarios(),
                todosLosUsuarios = [];

            if(usuariosBD.length == 0){
            }else{
                usuariosBD.forEach(obj => {
                    let nuevoRegistroUsuario = new Usuario(obj.cedula, obj.contrasena, obj.correo, obj.fecha, obj.nombreCompleto, obj.telefono, obj.admin);
                    todosLosUsuarios.push(nuevoRegistroUsuario);
                });
            }
            return todosLosUsuarios
        }
    }
})();