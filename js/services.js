angular.module('myApp.services', [])
.factory('$reddit', ['$http',function($http){
  return $http({
    method: 'JSONP',
    url: 'http://api.reddit.com/new?jsonp=JSON_CALLBACK'
  });
}]);
