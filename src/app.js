'use strict';

function trackPageView(pageURL) {
  // console.log(pageURL);
  _hmt.push(['_trackPageview', pageURL]);
}

var myApp = angular.module('myApp', ['ui.router', 'ngAnimate']);

myApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'src/pages/home.html',
      onEnter: function () {
        trackPageView('/home');
      }
    })
    .state('transportationAndHotel', {
      url: '/transportation-and-hotel',
      templateUrl: 'src/pages/transportation-and-hotel.html',
      onEnter: function () {
        trackPageView('/transportation-and-hotel');
      }
    })
    .state('spectators', {
      url: '/spectators',
      templateUrl: 'src/pages/spectators.html',
      onEnter: function () {
        trackPageView('/spectators');
      }
    })
    .state('contactUs', {
      url: '/contact-us',
      templateUrl: 'src/pages/contact-us.html',
      onEnter: function () {
        trackPageView('/contact-us');
      }
    })
    .state('aboutUs', {
      url: '/about-us',
      templateUrl: 'src/pages/about-us.html',
      onEnter: function () {
        trackPageView('/about-us');
      }
    })
    .state('ultraTrailCourse', {
      url: '/ultra-trail/course',
      templateUrl: 'src/pages/ultra-trail-course.html',
      onEnter: function () {
        trackPageView('/ultra-trail/course');
      }
    })
    .state('ultraTrailRegulation', {
      url: '/ultra-trail/regulation',
      templateUrl: 'src/pages/ultra-trail-regulation.html',
      onEnter: function () {
        trackPageView('/ultra-trail/regulation');
      }
    })
    .state('ultraTrailRegistration', {
      url: '/ultra-trail/registration',
      templateUrl: 'src/pages/ultra-trail-registration.html',
      onEnter: function () {
        trackPageView('/ultra-trail/registration');
      }
    })
    .state('ultraTrailSchedule', {
      url: '/ultra-trail/schedule',
      templateUrl: 'src/pages/ultra-trail-schedule.html',
      onEnter: function () {
        trackPageView('/ultra-trail/schedule');
      }
    })
    .state('ultraTrailResult', {
      url: '/ultra-trail/result',
      templateUrl: 'src/pages/ultra-trail-result.html',
      onEnter: function () {
        trackPageView('/ultra-trail/result');
      }
    })
    .state('ninghaiTrail', {
      url: '/ninghai-trail',
      template: '<h1>Coming soon.</h1>',
      onEnter: function () {
        trackPageView('/ninghai-trail');
      }
    })
    .state('news', {
      url: '/news',
      template: '<h1>Coming soon.</h1>',
      onEnter: function () {
        trackPageView('/news');
      }
    })
    .state('gallery', {
      url: '/gallery',
      template: '<h1>Coming soon.</h1>',
      onEnter: function () {
        trackPageView('/gallery');
      }
    });
}]);