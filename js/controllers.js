angular.module('myApp.controllers', [])
.controller('MainController', ['$scope','$reddit', function($scope,$reddit){
  $reddit.then(function(result) {
    $scope.articles = result.data.data.children;
  });

  $scope.vote = function(increment){
    if(increment === 1 || increment === -1){
      this.article.data.score += increment;
    }
  };

}])
.controller('LoginController', ['$scope', '$location', function($scope, $location){
  $scope.login = function(){
    console.log('fake login, redirecting');
    $location.path('/loggedin');
  };
}]);