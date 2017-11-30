var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope, $log) {
  $log.log('Hello World');
  $log.info('This is info');
  $log.warn('Warning');
  $log.debug('Some issues');
  $log.error('That was an error.')
});