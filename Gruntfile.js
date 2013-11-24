module.exports = function(grunt) {
    initialize()
    loadTasks()
    describeGoals()


    function initialize() {
        var config = require('./Gruntconfig.js')
        grunt.initConfig(config)
    }

    function loadTasks() {
        grunt.loadNpmTasks('grunt-contrib-jshint')
    }

    function describeGoals() {
        grunt.registerTask('test', ['jshint'])
        grunt.registerTask('default', 'test')
    }
}