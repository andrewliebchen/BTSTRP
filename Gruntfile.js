module.exports = function (grunt) {
  "use strict";

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    connect: {
      kss: {
        options: {
          port: 9000,
          base: 'styleguide',
          keepalive: true,
          livereload: true
        }
      }
    },

    sass: {
      kss: {
        files: {
          'stylguide/application.css': 'assets/stylesheets/**/*',
        },
        options: {
          style: 'expanded',
          cacheLocation: 'tmp/.sass-cache'
        }
      }
    },

    kss: {
      options: {
        template: 'template/',
        includeType: 'sass'
      },
      dist: {
        files: {
          'styleguide': ['assets/stylesheets/**'],
        }
      }
    },

    watch: {
      files: [
        'assets/stylesheets/**/*',
        'template/**/*',
        'assets/stylesheets/styleguide.md'
      ],
      tasks: ['kss'],
      options: {
        spawn: false,
        livereload: true
      }
    },

    concurrent: {
      kss: {
        tasks: ['watch', 'connect:kss'],
        options: {
          logConcurrentOutput: true
        }
      }
    },

    scsslint: {
      allFiles: [
        'assets/stylesheets/**/*.scss'
      ],
      options: {
        config: '.scss-lint.yml',
        colorizeOutput: true,
        compact: true
      }
    }
  });

  grunt.registerTask(
    'default',
    ['kss', 'concurrent:kss']
  );

  grunt.registerTask(
    'lint',
    ['scsslint']
  );
};
