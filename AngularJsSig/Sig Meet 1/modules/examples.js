(function() {
    'use strict';


    angular.module('examplesApp',[])

    .controller('GreetingController', ['$scope', function($scope) {
      $scope.greeting = 'Hola!';
    }])

    .controller('DoubleController', ['$scope', function($scope) {
      $scope.double = function(value) { return value * 2; };
    }])

    .controller('scopeTest', ['$scope', function($scope) {
      $scope.pokemon = 'bulbasour';

       $scope.pikatchu = function() {
              $scope.pokemon = 'pikatchu';
          };
       $scope.squirtle = function() {
              $scope.pokemon = 'squirtle';
          };
    }]);

})();
