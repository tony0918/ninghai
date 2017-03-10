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
        // .state('contactUs', {
        //   url: '/contact-us',
        //   templateUrl: 'src/pages/contact-us.html',
        //   onEnter: function () {
        //     trackPageView('/contact-us');
        //     $('.page-content')[0].scrollTop = 0;
        //   }
        // })
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
        .state('news', {
            url: '/news',
            templateUrl: 'src/pages/news.html',
            onEnter: function () {
                trackPageView('/news');
                $('.page-content')[0].scrollTop = 0;
            }
        })
        .state('newsItem1', {
            url: '/news/1',
            templateUrl: 'src/pages/news/news1.html',
            onEnter: function () {
                trackPageView('/news/1');
                $('.page-content')[0].scrollTop = 0;
            }
        })
        .state('newsItem2', {
            url: '/news/2',
            templateUrl: 'src/pages/news/news2.html',
            onEnter: function () {
                trackPageView('/news/2');
                $('.page-content')[0].scrollTop = 0;
            }
        })
        .state('newsItem3', {
            url: '/news/3',
            templateUrl: 'src/pages/news/news3.html',
            onEnter: function () {
                trackPageView('/news/3');
                $('.page-content')[0].scrollTop = 0;
            }
        })
        .state('newsItem4', {
            url: '/news/4',
            templateUrl: 'src/pages/news/news4.html',
            onEnter: function () {
                trackPageView('/news/4');
                $('.page-content')[0].scrollTop = 0;
            }
        })
        .state('newsItem5', {
            url: '/news/5',
            templateUrl: 'src/pages/news/news5.html',
            onEnter: function () {
                trackPageView('/news/5');
                $('.page-content')[0].scrollTop = 0;
            }
        })
        .state('gallery', {
            url: '/gallery',
            templateUrl: 'src/pages/gallery.html',
            onEnter: function () {
                trackPageView('/gallery');
                $('.page-content')[0].scrollTop = 0;
            }
        })
        .state('galleryNinghaiTrail', {
            url: '/gallery-ninghai-trail',
            templateUrl: 'src/pages/gallery-ninghai-trail.html',
            onEnter: function () {
                trackPageView('/gallery-ninghai-trail');
                $('.page-content')[0].scrollTop = 0;
            }
        })
        .state('voluntary', {
            url: '/voluntary',
            templateUrl: 'src/pages/voluntary.html',
            onEnter: function () {
                trackPageView('/voluntary');
                $('.page-content')[0].scrollTop = 0;
            }
        })
        .state('ultraTrailFaq', {
            url: '/ultra-trail/faq',
            templateUrl: 'src/pages/ultra-trail-faq.html',
            onEnter: function () {
                trackPageView('/ultra-trail/faq');
                $('.page-content')[0].scrollTop = 0;
            }
        })
        .state('ninghaiTrail', {
            url: '/ninghai-trail',
            templateUrl: 'src/pages/ninghaitrail/ninghai-trail-course.html',
            onEnter: function () {
                trackPageView('/ninghai-trail');
                $('.page-content')[0].scrollTop = 0;
            }
        })
        .state('ninghaiTrailResult', {
            url: '/ninghai-trail/result',
            templateUrl: 'src/pages/ninghaitrail/ninghai-trail-result.html',
            onEnter: function () {
                trackPageView('/ninghai-trail/result');
                $('.page-content')[0].scrollTop = 0;
            }
        })
        // .state('ninghaiTrailSpectators', {
        //     url: '/ninghai-trail/spectators',
        //     templateUrl: 'src/pages/ninghaitrail/ninghai-trail-spectators.html',
        //     onEnter: function () {
        //         trackPageView('/ninghai-trail/spectators');
        //         $('.page-content')[0].scrollTop = 0;
        //     }
        // })
        .state('ninghaiTrailRegistration', {
            url: '/ninghai-trail/registration',
            templateUrl: 'src/pages/ninghaitrail/ninghai-trail-registration.html',
            onEnter: function () {
                trackPageView('/ninghai-trail/registration');
                $('.page-content')[0].scrollTop = 0;
            }
        })
        .state('ninghaiTrailSchedule', {
            url: '/ninghai-trail/schedule',
            templateUrl: 'src/pages/ninghaitrail/ninghai-trail-schedule.html',
            onEnter: function () {
                trackPageView('/ninghai-trail/schedule');
                $('.page-content')[0].scrollTop = 0;
            }
        })
        .state('ninghaiTrailRegulation', {
            url: '/ninghai-trail/regulation',
            templateUrl: 'src/pages/ninghaitrail/ninghai-trail-regulation.html',
            onEnter: function () {
                trackPageView('/ninghai-trail/regulation');
                $('.page-content')[0].scrollTop = 0;
            }
        })
        .state('ninghaiTrailTransportationAndHotel', {
            url: '/ninghai-trail/transportation-and-hotel',
            templateUrl: 'src/pages/ninghaitrail/ninghai-trail-transportation-and-hotel.html',
            onEnter: function () {
                trackPageView('/ninghai-trail/transportation-and-hotel');
                $('.page-content')[0].scrollTop = 0;
            }
        })
        .state('ninghaiTrailVoluntary', {
            url: '/ninghai-trail/voluntary',
            templateUrl: 'src/pages/ninghaitrail/ninghai-trail-voluntary.html',
            onEnter: function () {
                trackPageView('/ninghai-trail/voluntary');
                $('.page-content')[0].scrollTop = 0;
            }
        })
        .state('lijiangSkyviewCourse', {
            url: '/lijiang/course',
            templateUrl: 'src/pages/lijiang/lijiang-skyview-course.html',
            onEnter: function () {
                trackPageView('/lijiang/course');
                $('.page-content')[0].scrollTop = 0;
            }
        })
        .state('lijiangSkyviewUltra50k', {
            url: '/lijiang/ultra50k',
            templateUrl: 'src/pages/lijiang/lijiang-skyview-ultra50k.html',
            onEnter: function () {
                trackPageView('/lijiang/ultra50k');
                $('.page-content')[0].scrollTop = 0;
            }
        })
        .state('lijiangSkyviewSkyrace21k', {
            url: '/lijiang/skyrace21k',
            templateUrl: 'src/pages/lijiang/lijiang-skyview-skyrace21k.html',
            onEnter: function () {
                trackPageView('/lijiang/skyrace21k');
                $('.page-content')[0].scrollTop = 0;
            }
        })
        .state('lijiangSkyviewAccomodation', {
            url: '/lijiang/accomodation',
            templateUrl: 'src/pages/lijiang/lijiang-skyview-accomodation.html',
            onEnter: function () {
                trackPageView('/lijiang/accomodation');
                $('.page-content')[0].scrollTop = 0;
            }
        })
        .state('lijiangSkyviewSponsor', {
            url: '/lijiang/sponsor',
            templateUrl: 'src/pages/lijiang/lijiang-skyview-sponsor.html',
            onEnter: function () {
                trackPageView('/lijiang/sponsor');
                $('.page-content')[0].scrollTop = 0;
            }
        })
        .state('galleryLijiang', {
            url: '/lijiang/gallery',
            templateUrl: 'src/pages/lijiang/lijiang-skyview-gallery.html',
            onEnter: function () {
                trackPageView('/lijiang/gallery');
                $('.page-content')[0].scrollTop = 0;
            }
        });
}]);