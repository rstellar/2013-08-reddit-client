angular.module('myApp', ['ngRoute', 'myApp.services', 'myApp.directives', 'myApp.controllers'])
.constant('serverRoute', 'http://localhost:3000')
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
