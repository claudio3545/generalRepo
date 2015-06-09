var moviesApp = angular.module('moviesApp',[])
moviesApp.controller('MovieListSpecCTRL',function(){
                this.list = 'MovieList';
                this.ownerFirstName = 'Claudio';
                this.ownerLastName = 'Acciani';
                this.lastUpdateData = "03/06/2015";
                this.moviesInList =  183;

                this.addMovieToList = function addMovieToList(moviesToAdd){
                        return moviesInList + moviesToAdd };
                
                        
            }
        );
moviesApp.controller('ListMovieDetails',function(){
                        this.title = '';
                        this.year ='';
                        this.plot ='';
                        this.type = '';
                        this.releaseDate='';
                        this.rating = '';
                        this.reviewNumber = "";

                    }
        );

moviesApp.controller('GreetingController', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
}]);

moviesApp.controller('DoubleController', ['$scope', function($scope) {
  $scope.double = function(value) { return value * 2; };
}]);

moviesApp.controller('scopeTest', ['$scope', function($scope) {
  $scope.pokemon = 'bulbasour';

   $scope.pikatchu = function() {
          $scope.pokemon = 'pikatchu';
      };
   $scope.squirtle = function() {
          $scope.pokemon = 'squirtle';
      };
}]);

