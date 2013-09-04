angular.module('myApp.controllers', [])
.controller('MainController', ['$scope','$http', function($scope,$http){
  $scope.foo = 'bar';
  $http({
    method: 'JSONP',
    url: 'http://api.reddit.com/new?jsonp=JSON_CALLBACK'
  }).success(function(data,status,headers,config){
    $scope.articles = data;
  }).error(function(data,status,headers,config){
    console.log("JSON Error in Controller.js");
    console.log(data,status,headers,config);
  });
}]);