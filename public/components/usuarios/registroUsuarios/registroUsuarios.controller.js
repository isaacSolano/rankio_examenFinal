(() => {
    'use strict'

    angular
    .module('rankio')
    .controller('controladorRegistroUsuarios', controladorRegistroUsuarios);

    controladorRegistroUsuarios.$inject = ['servicioUsuarios'];
    
    function controladorRegistroUsuarios(servicioUsuarios){
        let vm = this;

        vm.registrarUsuario = (pusuarioRegistar) => {
            let edadValida = verificarEdad(pusuarioRegistar.fecha),
                contrasenasValidas = validarContrasenias(pusuarioRegistar.contrasena, pusuarioRegistar.confContrasena);

            if(!edadValida || !contrasenasValidas){
                swal({
                    title: 'No se puede registrar',
                    text: 'Hay problemas con la edad o las contrasenas no coinciden',
                    icon: 'error',
                    button: 'Aceptar'
                });
            }else{
                let nuevoRegistroUsuario = new Usuario(pusuarioRegistar.cedula, pusuarioRegistar.contrasena, pusuarioRegistar.correo, pusuarioRegistar.fecha, pusuarioRegistar.nombreCompleto, pusuarioRegistar.telefono);

                let exito = servicioUsuarios.agregarUsuario(nuevoRegistroUsuario);

                if(!exito){
                    swal({
                        title: 'No se pudo registrar',
                        text: 'El usuario no puede ser registrado, intente más tarde',
                        icon: 'error',
                        button: 'Aceptar'
                    });
                }else{
                    swal({
                        title: 'Usuario agregado',
                        text: 'El usuario se agregó al sistema',
                        icon: 'success',
                        button: 'Aceptar'
                    });
                }
            }
        }

        function verificarEdad(pnacimiento){
            let menor = false,
                edadMs = new Date() - pnacimiento;
      
            if(edadMs/31536000000<18){
              menor = true
            }
            return !menor
          }
      
          function validarContrasenias(pcontrasena, pconfirmarContrasena){
            let diferentes = false;
      
            if(pcontrasena != pconfirmarContrasena){
              diferentes = true
            }
      
            return !diferentes
          }
    }
})();