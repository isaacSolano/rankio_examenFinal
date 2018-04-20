(() => {
    'use strict'

    angular
    .module('rankio')
    .directive('headerContent', headerContent)

    function headerContent() {
        const content = {
            templateUrl: '/components/directives/header/header.view.html',
            restrict: 'EA'
        }
        return content
    }
})();