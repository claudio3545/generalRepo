(function() {
    'use strict';

angular.module('moviesApp',[])
.controller('MovieListSpecCTRL',function(){
                this.list = 'MovieList';
                this.ownerFirstName = 'Claudio';
                this.ownerLastName = 'Acciani';
                this.lastUpdateData = "03/06/2015";
                this.moviesInList =  183;

                this.addMovieToList = function addMovieToList(moviesToAdd){
                        return moviesInList + moviesToAdd };
                
                        
            }
        )
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


