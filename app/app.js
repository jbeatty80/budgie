'use strict';

// Declare app level module which depends on views, and components
angular.module('budgieApp', [
  'ngRoute',
  'ui.bootstrap',
  'budgieApp.register'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/register'});
}])
.service('crypt', require('./lib/crypt.js'));
