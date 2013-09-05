angular.module('myApp.controllers', [])
.controller('MainController', ['$scope','$http', function($scope,$http){
  $http({
    method: 'JSONP',
    url: 'http://api.reddit.com/new?jsonp=JSON_CALLBACK'
  }).success(function(data,status,headers,config){
    $scope.articles = data.data.children;
  }).error(function(data,status,headers,config){
    console.log("JSON Error in Controller.js");
    console.log(data,status,headers,config);
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