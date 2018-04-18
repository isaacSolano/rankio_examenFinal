(() => {
  'use strict';
  angular
    .module('appRoutes', ['ui.router', 'oc.lazyLoad', 'uiRouterTitle'])
    .config(routing);
  routing.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routing($stateProvider, $urlRouterProvider, $oclazyLoad) {

    $stateProvider
      .state('inicio', {
        url: '/',
        templateUrl: './components/inicio/inicio.view.html',
        data: {
          pageTitle: 'Rankio'
        }
      })

    $urlRouterProvider.otherwise('/');
  };
})();