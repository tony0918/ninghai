const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminOptipng = require('imagemin-optipng');
module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9001,
          keepalive: true
        }
      },
      prod: {
        options: {
          port: 9002,
          keepalive: true,
          base: 'dist'
        }
      }
    },
    clean: {
      build: ['dist']
    },
    copy: {
      dev: {
        files: [
          {
            expand: true, cwd: 'node_modules', dest: 'libs',
            src: [
              'bootstrap/dist/css/bootstrap.min.css',
              'bootstrap/dist/fonts/**/*',
              'bootstrap/dist/js/bootstrap.min.js',
              'angular/angular.min.js',
              'angular-aria/angular-aria.min.js',
              'angular-animate/angular-animate.min.js',
              'angular-ui-router/release/angular-ui-router.min.js',
              'jquery/dist/jquery.min.js'
            ]
          }
        ]
      },
      prod: {
        files: [
          {
            expand: true, dest: 'dist',
            src: [
              'libs/**/*',
              'index.html',
              'css/**/*',
              'src/**/*',
              'download.php',
              'fonts/**/*'
            ]
          }
        ]
      }
    },
    imagemin: {
      options: {                       // Target options
        optimizationLevel: 3,
        use: [imageminMozjpeg(), imageminOptipng()]
      },
      dynamic: {                         // Another target
        files: [{
          expand: true,
          src: ['imgs/**/*', 'assets/**/*'],
          dest: 'dist/'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('install', ['copy:dev']);
  grunt.registerTask('server', ['connect:server']);
  grunt.registerTask('package', ['clean', 'copy', 'imagemin', 'connect:prod']);
};