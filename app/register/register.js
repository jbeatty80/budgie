'use strict';

angular.module('myApp.register', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/register', {
    templateUrl: 'register/register.html',
    controller: 'RegisterCtrl'
  });
}])

.controller('RegisterCtrl', ['$scope', function($scope) {
  $scope.createUser = function() {
    console.log('submitted');
    console.log('username', $scope.username);
  };

  $scope.passwordIsValid = false;
  $scope.passwordMatches = false;
  $scope.validationFailMessage;

  $scope.validatePassword = function() {
    var password = $scope.inputPassword;
    console.log('password', $scope.inputPassword);
    if (password.length > 5) {
      $scope.passwordIsValid = false;
    } else {
      $scope.validationFailMessage = 'Password must be 6 characters or longer';
      $scope.passwordIsValid = true;
    }
  };

  $scope.confirmPassword = function() {
    $scope.passwordMatches = ($scope.inputPassword === $scope.inputPasswordConfirm);
  };

}]);
