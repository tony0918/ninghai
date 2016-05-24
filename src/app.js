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
    })
    .state('aboutUs', {
      url: '/about-us',
      templateUrl: 'src/pages/about-us.html'
    })
    .state('ultraTrailCourse', {
      url: '/ultra-trail/course',
      templateUrl: 'src/pages/ultra-trail-course.html'
    })
    .state('ultraTrailRegulation', {
      url: '/ultra-trail/regulation',
      templateUrl: 'src/pages/ultra-trail-regulation.html'
    })
    .state('ninghaiTrail', {
      url: '/ninghai-trail',
      template: '<h1>Coming soon.</h1>'
    });
}]);