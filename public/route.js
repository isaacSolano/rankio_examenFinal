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

      .state('inicioSesion', {
        url: '/inicioSesion',
        templateUrl: './components/usuarios/inicioSesion/inicioSesion.view.html',
        data: {
          pageTitle: 'Rankio | Inicio sesión'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/usuarios/inicioSesion/inicioSesion.controller.js')
          }]
        },
        controller: 'controladorInicioSesion',
        controllerAs: 'vm'
      })

      .state('central', {
        url: '/central',
        templateUrl: './components/central/central.view.html',
        data: {
          pageTitle: 'Rankio | Inicio'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/central/central.controller.js')
          }]
        },
        controller: 'controladorCentral',
        controllerAs: 'vm'
      })

      .state('central.listaHoteles', {
        url: '/listaHoteles',
        templateUrl: './components/hoteles/listaHoteles/listaHoteles.view.html',
        data: {
          pageTitle: 'Rankio | Lista de hoteles'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/hoteles/listaHoteles/listaHoteles.controller.js')
          }]
        },
        controller: 'controladorListaHoteles',
        controllerAs: 'vm'
      })

      .state('central.registrarHoteles', {
        url: '/registrarHoteles',
        templateUrl: './components/hoteles/registroHoteles/registroHoteles.view.html',
        data: {
          pageTitle: 'Rankio | Registro de hoteles'
        },
        resolve: {
          load: ['$ocLazyLoad', ($ocLazyLoad) => {
            return $ocLazyLoad.load('./components/hoteles/registroHoteles/registroHoteles.controller.js')
          }]
        },
        controller: 'controladorRegistroHoteles',
        controllerAs: 'vm'
      })

    $urlRouterProvider.otherwise('/');
  };
})();