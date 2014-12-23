'use strict';

/**
 * @ngdoc function
 * @name clanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clanApp
 */
angular.module('clanApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
