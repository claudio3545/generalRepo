(function() {
    'use strict';

angular.module('moviesApp',[])
.controller('MovieListSpecCTRL',function(){
                this.listName = 'MovieList';
                this.ownerFirstName = 'Claudio  ';
                this.ownerLastName = 'Acciani ';
                this.lastUpdateData = "03/06/2015";
       }  )
//.controller('movieListController',['$http',function(){
//  var restEndpoint = "https://yts.to/api/v2/list_movies.json?limit=10&minimum_rating=8";
//    this.list = [];
//    this.movie = {};
//
//    $http({method: 'GET', url: restEndpoint}).
//    success(function (data){
//      this.list = data;
//    })
//
//    this.addMovieToList = function(submitted){
//      this.list.push(this.movie)
//      this.movie = {};
//    }
//
//  }])

.controller('ListMovieDetails',function(){
                        this.title = '';
                        this.year ='';
                        this.plot ='';
                        this.type = '';
                        this.releaseDate='';
                        this.rating = '';
                        this.reviewNumber = "";
                    }
        )


.controller('ListCtrl', function (messages){
  var self = this;

  self.messages = messages.list;
})

.controller('PostCtrl', function (messages){
  var self = this;
  self.newMessage = 'Hello World!';

  self.addMessage = function(message){
    messages.add(message);
    self.newMessage = '';
  };
});


})();


