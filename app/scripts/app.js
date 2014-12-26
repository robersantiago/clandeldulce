'use strict';

/**
 * @ngdoc overview
 * @name clanApp
 * @description
 * # clanApp
 *
 * Main module of the application.
 */
angular
  .module('clanApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/tartas', {
        templateUrl: 'views/tartas.html',
        controller: 'TartasCtrl'
      })
      .when('/cupcakes', {
        templateUrl: 'views/cupcakes.html',
        controller: 'CupcakesCtrl'
      })
      .when('/pasoapaso', {
        templateUrl: 'views/pasoapaso.html',
        controller: 'PasoCtrl'
      })
      .when('/contacto', {
        templateUrl: 'views/contacto.html',
        controller: 'ContactoCtrl'
      })
      .when('/ideas', {
        templateUrl: 'views/ideas.html',
        controller: 'IdeasCtrl'
      })
      .when('/error', {
        templateUrl: 'views/ideas.html',
        controller: 'IdeasCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
