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

      .state('registroUsuarios', {
        url: '/registroUsuarios',
        templateUrl: './components/usuarios/registroUsuarios/registroUsuarios.view.html',
        data: {
          pageTitle: 'Rankio | Registro usuarios'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/usuarios/registroUsuarios/registroUsuarios.controller.js')
          }]
        },
        controller: 'controladorRegistroUsuarios',
        controllerAs: 'vm'
      })

    $urlRouterProvider.otherwise('/');
  };
})();