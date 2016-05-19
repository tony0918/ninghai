'use strict';

var myApp = angular.module('myApp', ['ui.router', 'ngAnimate']);

myApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider
    .state(
      'home', {
        url: '/home',
        template: '<h2>Hello World!!!!</h2>'
      })
    .state(
      'event', {
        url: '/event',
        template: '<h3>Event</h3>'
      }
    );
}]);