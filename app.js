var myApp = angular.module('myApp', ['ngMessages']);

myApp.controller('mainController', function($scope, $log, $filter) {
  $scope.name = 'John';
  //Filters Making $scope.name uppercase
  $scope.formattedname = $filter('uppercase')($scope.name);
  $log.info($scope.name);
  $log.info($scope.formattedname);

});