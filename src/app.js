'use strict';

var myApp = angular.module('myApp', ['ui.router', 'ngAnimate']);

myApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'src/pages/home.html'
    })
    .state('transportationAndHotel', {
      url: '/transportation-and-hotel',
      templateUrl: 'src/pages/transportation-and-hotel.html'
    })
    .state('spectators', {
      url: '/spectators',
      templateUrl: 'src/pages/spectators.html'
    })
    .state('contactUs', {
      url: '/contact-us',
      templateUrl: 'src/pages/contact-us.html'
    });
}]);