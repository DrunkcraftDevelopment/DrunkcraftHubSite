module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-jshint')
    grunt.loadNpmTasks('grunt-contrib-concat')
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-contrib-clean')
    grunt.loadNpmTasks('grunt-contrib-copy')
    grunt.loadNpmTasks('grunt-concat-css')

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        'copy': {
            'main': {
                'files': [
                    {
                        'expand': true,
                        'cwd' : 'src/',
                        'src': ['**', '!javascript/**', '!styles/**', '!test/**'],
                        'dest': 'dist/'
                    }, {
                        'expand': true,
                        'cwd' : 'bower_components/',
                        'src': ['**'],
                        'dest': 'dist/lib'
                    }
                ]
            }
        },
        'clean': ['dist/*'],
        'jshint': {
            'beforeconcat': ['src/**/*.js'],
            'options': {
                'asi': true
            }
        },
        'concat': {
            'dist': {
                'src': ['src/**/*.js'],
                'dest': 'dist/javascript/<%= pkg.name %>-<%= pkg.version %>.js'
            }
        },
        'concat_css': {
            'all': {
                'src': ['src/styles/**/*.css'],
                'dest': 'dist/styles/<%= pkg.name %>-<%= pkg.version %>.css'
            }
        },
        'uglify': {
            'options': {
                'mangle': false
            },
            'dist': {
                'files': {
                    'dist/javascript/<%= pkg.name %>-<%= pkg.version %>.min.js' : ['dist/javascript/<%= pkg.name %>-<%= pkg.version %>.js']
                }
            }
        }
    })

    grunt.registerTask('build', ['clean', 'jshint', 'concat', 'concat_css', 'uglify', 'copy'])
    grunt.registerTask('default', ['build'])
}
