(function() {
    'use strict';
     angular.module('examplesApp',[])

    .controller('GreetingController', ['$scope', function($scope) {
      $scope.greeting = 'Hola!';
    }])

    .controller('DoubleController', ['$scope', function($scope) {
      $scope.double = function(value) { return value * 2; };
    }])

    /**
    *Controllers for Scope Versus This
    */

    .controller('scopeTest', ['$scope', function($scope) {
      $scope.pokemon = 'bulbasour';

       $scope.pikatchu = function() {
              $scope.pokemon = 'pikatchu';
          };
       $scope.squirtle = function() {
              $scope.pokemon = 'squirtle';
          };
    }])

    .controller('thisTest',function() {
          this.pokemon = 'bulbasour';

           this.pikatchu = function() {
                  this.pokemon = 'pikatchu';
              };
           this.squirtle = function() {
                  this.pokemon = 'squirtle';
              };
        })

 /**
    *Controllers nested scope explanation
    */
    .controller('MainController', ['$scope', function($scope) {
      $scope.timeOfDay = 'morning';
      $scope.name = 'Nikki';
    }])
    .controller('ChildController', ['$scope', function($scope) {
      $scope.name = 'Mattie';
    }])
    .controller('GrandChildController', ['$scope', function($scope) {
      $scope.timeOfDay = 'evening';
      $scope.name = 'Gingerbread Baby';
    }])



 /**
    *Controllers with submission 
    */
    .controller('MainCtrl', ['$scope',function ($scope){
      $scope.message = 'hello';

      $scope.updateMessage = function(message){
        $scope.message = message;
      };
    }]);



})();
