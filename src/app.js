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
        $('.page-content')[0].scrollTop = 0;
      }
    })
    .state('transportationAndHotel', {
      url: '/transportation-and-hotel',
      templateUrl: 'src/pages/transportation-and-hotel.html',
      onEnter: function () {
        trackPageView('/transportation-and-hotel');
        $('.page-content')[0].scrollTop = 0;
      }
    })
    .state('spectators', {
      url: '/spectators',
      templateUrl: 'src/pages/spectators.html',
      onEnter: function () {
        trackPageView('/spectators');
        $('.page-content')[0].scrollTop = 0;
      }
    })
    .state('contactUs', {
      url: '/contact-us',
      templateUrl: 'src/pages/contact-us.html',
      onEnter: function () {
        trackPageView('/contact-us');
        $('.page-content')[0].scrollTop = 0;
      }
    })
    .state('aboutUs', {
      url: '/about-us',
      templateUrl: 'src/pages/about-us.html',
      onEnter: function () {
        trackPageView('/about-us');
        $('.page-content')[0].scrollTop = 0;
      }
    })
    .state('ultraTrailCourse', {
      url: '/ultra-trail/course',
      templateUrl: 'src/pages/ultra-trail-course.html',
      onEnter: function () {
        trackPageView('/ultra-trail/course');
        $('.page-content')[0].scrollTop = 0;
      }
    })
    .state('ultraTrailRegulation', {
      url: '/ultra-trail/regulation',
      templateUrl: 'src/pages/ultra-trail-regulation.html',
      onEnter: function () {
        trackPageView('/ultra-trail/regulation');
        $('.page-content')[0].scrollTop = 0;
      }
    })
    .state('ultraTrailRegistration', {
      url: '/ultra-trail/registration',
      templateUrl: 'src/pages/ultra-trail-registration.html',
      onEnter: function () {
        trackPageView('/ultra-trail/registration');
        $('.page-content')[0].scrollTop = 0;
      }
    })
    .state('ultraTrailSchedule', {
      url: '/ultra-trail/schedule',
      templateUrl: 'src/pages/ultra-trail-schedule.html',
      onEnter: function () {
        trackPageView('/ultra-trail/schedule');
        $('.page-content')[0].scrollTop = 0;
      }
    })
    .state('ultraTrailResult', {
      url: '/ultra-trail/result',
      templateUrl: 'src/pages/ultra-trail-result.html',
      onEnter: function () {
        trackPageView('/ultra-trail/result');
        $('.page-content')[0].scrollTop = 0;
      }
    })
    .state('ninghaiTrail', {
      url: '/ninghai-trail',
      templateUrl: 'src/pages/ninghai-trail.html',
      onEnter: function () {
        trackPageView('/ninghai-trail');
        $('.page-content')[0].scrollTop = 0;
      }
    })
    .state('news', {
      url: '/news',
      template: '<h1>Coming soon.</h1>',
      onEnter: function () {
        trackPageView('/news');
        $('.page-content')[0].scrollTop = 0;
      }
    })
    .state('gallery', {
      url: '/gallery',
      template: '<h1>Coming soon.</h1>',
      onEnter: function () {
        trackPageView('/gallery');
        $('.page-content')[0].scrollTop = 0;
      }
    });
}]);