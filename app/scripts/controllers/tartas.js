'use strict';

/**
 * @ngdoc function
 * @name clanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clanApp
 */
angular.module('clanApp')
  .controller('TartasCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
