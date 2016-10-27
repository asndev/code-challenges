module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    watch: {
      js: {
        files: ['coderbyte/challanges/*.js', '*.js', '!Gruntfile'],
        options: {
          spawn: false
        }
      }
    },
    exec: {
      runTests: {
        cmd: function(file) {
          return 'node ' + file;
        }
      }
    }
  });

  grunt.event.on('watch', function(action, filepath, target) {
    grunt.task.run('exec:runTests:' + filepath);
  });

  grunt.registerTask('default', ['less', 'watch']);
};
