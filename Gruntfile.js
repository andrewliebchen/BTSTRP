module.exports = function (grunt) {
  "use strict";

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9000,
          keepalive: true,
          livereload: true
        }
      }
    },

    sass: {
      dist: {
        files: {
          'stylesheets/btstrp.css': 'stylesheets/btstrp.scss',
        },
        options: {
          style: 'expanded',
          cacheLocation: 'tmp/.sass-cache'
        }
      }
    },

    watch: {
      files: [
        'stylesheets/**/*'
      ],
      tasks: ['sass'],
      options: {
        spawn: false,
        livereload: true
      }
    },

    concurrent: {
      tasks: ['watch', 'connect'],
      options: {
        logConcurrentOutput: true
      }
    },
  });

  grunt.registerTask(
    'default',
    ['sass', 'concurrent']
  );
};
