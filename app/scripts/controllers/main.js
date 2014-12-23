'use strict';

/**
 * @ngdoc function
 * @name clanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clanApp
 */
angular.module('clanApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
