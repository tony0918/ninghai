module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9001,
          keepalive: true
        }
      }
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
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('install', ['copy:dev']);
  grunt.registerTask('server', ['connect']);
};