(function() {
    'use strict';

angular.module('moviesApp',[])
.controller('MovieListSpecCTRL',function(){
                this.list = 'MovieList';
                this.ownerFirstName = '';
                this.ownerLastName = '';
                this.lastUpdateData = "03/06/2015";
                this.moviesInList =  183;

                this.addMovieToList = function addMovieToList(moviesToAdd){
                        return moviesInList + moviesToAdd };
            }
        )
.controller('movieListController',['$http',function(){
  var restEndpoint = "https://yts.to/api/v2/list_movies.json?limit=10&minimum_rating=8";
    this.list = [];
    this.movie = {};

    $http({method: 'GET', url: restEndpoint}).
    success(function (data){
      this.list = data;
    })

    this.addMovieToList = function(submitted){
      this.list.push(this.movie)
      this.movie = {};
    }

  }])

.controller('ListMovieDetails',function(){
                        this.title = '';
                        this.year ='';
                        this.plot ='';
                        this.type = '';
                        this.releaseDate='';
                        this.rating = '';
                        this.reviewNumber = "";
                    }
        );


})();


