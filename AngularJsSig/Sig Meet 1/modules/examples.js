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
      $scope.default = 'bulbasour';

       $scope.pikatchu = function() {
              $scope.pokemon = 'pikatchu';
          };
       $scope.squirtle = function() {
              $scope.pokemon = 'squirtle';
          };
    }])

    .controller('thisTest',function() {
          this.default = 'bulbasour';

           this.pikatchu = function() {
                  this.pokemon = 'pikatchu';
              };
           this.squirtle = function() {
                  this.pokemon = 'squirtle';
              };
        })

    .controller('MainCtrl', function ($scope){
      $scope.message = 'hello';

      $scope.updateMessage = function(message){
        $scope.message = message;
      };
    });



})();
