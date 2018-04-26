(() => {
    'use strict'

    angular
    .module('rankio')
    .controller('controladorRegistroHoteles', controladorRegistroHoteles)

    controladorRegistroHoteles.$inject = ['$state', '$http', 'servicioSubirImagen', 'servicioHoteles', 'Upload'];

    function controladorRegistroHoteles($state, $http, servicioSubirImagen, servicioHoteles, Upload){
        let vm = this;

        vm.provincias = $http({
            method: 'GET',
            url: './sources/data/provincias.json'
          }).then((success) => {
            vm.provincias = success.data;
          }, (error) => {
          });
      
          // Funcion que rellena los los cantones
          vm.rellenarCantones = (pidProvincia) => {
            vm.cantones = $http({
              method: 'GET',
              url: './sources/data/cantones.json'
            }).then((success) => {
              let cantones = [];
              for (let i = 0; i < success.data.length; i++) {
                if (pidProvincia == success.data[i].idProvincia) {
                  cantones.push(success.data[i]);
                }
              }
              vm.cantones = cantones;
            }, (error) => {
            });
          }
      
          vm.rellenarDistrito = (pidCanton) => {
            vm.distritos = $http({
              method: 'GET',
              url: './sources/data/distritos.json'
            }).then((success) => {
              let distritos = [];
              for (let i = 0; i < success.data.length; i++) {
                if (pidCanton == success.data[i].idCanton) {
                  distritos.push(success.data[i]);
                }
              }
              vm.distritos = distritos;
            }, (error) => {
            });
        }

        vm.nube = servicioSubirImagen.retornarConfig();

        vm.ubicacion = ($event) => {
            vm.lat = $event.latLng.lat();
            vm.lng = $event.latLng.lng();
        }

        vm.preRegistrarHotel = (pnuevoHotel) => {
            pnuevoHotel.latitud = vm.lat;
            pnuevoHotel.longitud =  vm.lng;

            vm.nube.data.file = pnuevoHotel.foto[0];
            Upload.upload(vm.nube).success((data) => {

                vm.registroHotel(pnuevoHotel, data.url);
            });
        }

        vm.registroHotel = (pnuevoHotel, urlFoto) => {
            let nuevoHotel = new Hotel (pnuevoHotel.canton.name, pnuevoHotel.latitud, pnuevoHotel.longitud, pnuevoHotel.correoAtencion, pnuevoHotel.correoReservaciones, pnuevoHotel.direccion, pnuevoHotel.distrito.name, urlFoto, pnuevoHotel.nombre, pnuevoHotel.provincia.name, pnuevoHotel.telefonoAtencion, pnuevoHotel.telefonoReservaciones, pnuevoHotel.codigo);

            let exito = servicioHoteles.registrarHotel(nuevoHotel);

            if(!exito){
                swal({
                    title: 'El hotel no se pudo registrar',
                    text: 'Intente más tarde',
                    icon: 'error',
                    button: 'Aceptar'
                });
            }else{
                swal({
                    title: 'Hotel registrado',
                    text: 'Ahora podrá ser visto por los visitantes',
                    icon: 'success',
                    button: 'Aceptar'
                });
                $state.go('central.listaHoteles')
            }
        }
    }
})();