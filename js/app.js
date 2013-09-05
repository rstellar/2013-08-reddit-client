angular.module('myApp', ['ngRoute', 'myApp.controllers'])
.config(['$routeProvider', function($routeProvider) {
  // Setup our routes here
  $routeProvider.when( '/', {
    templateUrl: '../templates/home.html',
    controller: 'MainController'
  }).when('/login', {
    templateUrl: '../templates/login.html',
    controller: 'LoginController'
  }).otherwise({redirectTo: '/'});
}]);
