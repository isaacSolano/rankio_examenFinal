(() => {
    'use strict';
    angular
    .module('rankio')
    .directive("subirFoto", subirFoto);
  
    function subirFoto() {
  
      const subirFoto = {
        restrict: 'A',
        require: "ngModel",
        link: function postLink(scope,elem,attrs,ngModel) {
          elem.on("change", function(e) {
            let files = elem[0].files;
            ngModel.$setViewValue(files);
          });
        }
      };
  
      return subirFoto;
  
    };
  })();