angular.module('myApp.directives', [])
.directive('newsListing', function(){
  return {
    templateUrl: '../templates/news_listing.html'
  };
}).directive('ratingButtons', function() {
  return {
    templateUrl: '../templates/rating_buttons.html'
  };
});