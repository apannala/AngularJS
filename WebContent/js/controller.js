'use strict';

angular.module('myApp.controllers', [])
  .controller('myCtrl', ['$scope', function($scope) {
//    $scope.formInfo = {};
    $scope.saveData = function() {
 console.log($scope.formInfo);
    };
  }]);
  