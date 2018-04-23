(() => {
    'use strict'

    angular
    .module('rankio')
    .service('servicioSubirImagen', servicioSubirImagen);

    servicioSubirImagen.$inject = ['$http'];
    function servicioSubirImagen($http){
        const nube = {
            url: 'https://api.cloudinary.com/v1_1/rankio/image/upload',
            data: {
                upload_preset: 'upload-rankio',
                tags: 'Any',
                context: 'photo=test'
            }
        };

        const uploadAPI = {
            retornarConfig: _retornarConfig
        };
        return uploadAPI

        function _retornarConfig(){
            return nube
        }
    };
})();