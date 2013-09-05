angular.module('myApp.directives', [])
.directive('newsListing', function(){
  var directiveObject = {
    templateUrl: '../templates/news_listing.html'
  };
  return directiveObject;
});