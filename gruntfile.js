module.exports = function(grunt) {
  
  grunt.initConfig({
      connect: {
        server: {
          options: {
            hostname: 'localhost',
            port: 1111,
            keepalive: true,
            open:true
          }
        }
      }
  });


  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default' ,['connect']);

}