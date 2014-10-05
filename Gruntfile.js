"use strict";
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    protractor_webdriver: {
      test: {
        options: {
          command: 'webdriver-manager start'
        }
      }
    },

    protractor: {
      options: {
        configFile: "protractor.config.js",
        keepAlive: true,
        noColor: false
      },
      all: {}
    },

    connect: {
      server: {
        options: {
          port: 8000,
          hostname: '*'
        }
      }
    },
    jshint: {
      options: {
        jshintrc: true
      },
      all: ['Gruntfile.js', 'mirka-content.js']
    }
  });

  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-protractor-webdriver');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');


  grunt.registerTask('test', ['jshint', 'connect', 'protractor']);
};