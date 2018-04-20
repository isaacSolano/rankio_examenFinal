(() => {
    'use strict'

    angular
    .module('rankio')
    .directive('footerContent', footerContent);

    function footerContent(){
        const content = {
            templateUrl: '/components/directives/footer/footer.view.html',
            restrict: 'EA'
        }
        return content
    }
})();