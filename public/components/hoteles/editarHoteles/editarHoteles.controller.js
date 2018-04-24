(() => {
    'use strict'

    angular
    .module('rankio')
    .controller('controladorEdicionHoteles', controladorEdicionHoteles)

    controladorEdicionHoteles.$inject = ['$state', '$http', 'servicioSubirImagen', 'servicioHoteles', 'Upload'];

    function controladorEdicionHoteles($state, $http, servicioSubirImagen, servicioHoteles, Upload){

        const hotelEditarCodigo = servicioHoteles.hotelActivo();

        if(hotelEditarCodigo == undefined){
            $state.go('central.listaHoteles');
        }
        let vm = this;

        let hotelActivoInfo = servicioHoteles.obtenerInfoHotel(hotelEditarCodigo);

        vm.hotel = {
            nombre: hotelActivoInfo.nombre,
            codigo: Number(hotelActivoInfo.codigo),
            foto: hotelActivoInfo.foto,
            direccion: hotelActivoInfo.direccion,
            telefonoReservaciones: Number(hotelActivoInfo.telefonoReservaciones),
            correoReservaciones: hotelActivoInfo.correoReservaciones,
            telefonoAtencion: Number(hotelActivoInfo.telefonoAtencion),
            correoAtencion: hotelActivoInfo.correoAtencion
        }

        vm.coordenadas = [hotelActivoInfo.latitud, hotelActivoInfo.longitud];

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

        vm.preEditarHotel = (peditarHotel) => {
            peditarHotel.latitud = vm.lat;
            peditarHotel.longitud =  vm.lng;

            vm.nube.data.file = peditarHotel.foto[0];
            Upload.upload(vm.nube).success((data) => {

                vm.editarHotel(peditarHotel, data.url);
            });
        }

        vm.editarHotel = (peditarHotel, urlFoto) => {
            let nuevoHotel = new Hotel (peditarHotel.canton.name, peditarHotel.latitud, peditarHotel.longitud, peditarHotel.correoAtencion, peditarHotel.correoReservaciones, peditarHotel.direccion, peditarHotel.distrito.name, urlFoto, peditarHotel.nombre, peditarHotel.provincia.name, peditarHotel.telefonoAtencion, peditarHotel.telefonoReservaciones, peditarHotel.codigo);

            let exito = servicioHoteles.actualizarHotel(nuevoHotel);

            if(!exito){
                swal({
                    title: 'El hotel no se pudo registrar',
                    text: 'Intente más tarde',
                    icon: 'error',
                    button: 'Aceptar'
                });
            }else{
                swal({
                    title: 'Hotel editado',
                    text: 'Ahora la nueva informacion podrá ser vista por los visitantes',
                    icon: 'success',
                    button: 'Aceptar'
                });
                borrarSesion();
            }
        }

        vm.borrarSesion = () => {borrarSesion()}


        function borrarSesion(){
            $state.go('central.listaHoteles');
        }
    }
})();