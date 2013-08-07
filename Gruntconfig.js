var config = { jshint: getJshintOptions()
             }

function getJshintOptions() {
    return { options: { jshintrc: '.jshintrc' }
           , all: { src: ['Gruntfile.js', 'lib/**/*.js'] }
           }
}

module.exports = config