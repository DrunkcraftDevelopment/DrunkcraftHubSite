module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-jshint')
    grunt.loadNpmTasks('grunt-contrib-concat')
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-contrib-clean')
    grunt.loadNpmTasks('grunt-contrib-copy')
    grunt.loadNpmTasks('grunt-concat-css')
    grunt.loadNpmTasks('grunt-karma')

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        'copy': {
            'main': {
                'files': [
                    {
                        'expand': true,
                        'cwd' : 'src/',
                        'src': ['**', 'scripts/**', 'styles/**', '!spec/**', '!views/index.html'],
                        'dest': 'dist/'
                    }, {
                        'expand': true,
                        'cwd' : 'bower_components/',
                        'src': ['**'],
                        'dest': 'dist/scripts/vendor'
                    }, {
                        'src': ['src/views/index.html'],
                        'dest': 'dist/index.html'
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
                'dest': 'dist/scripts/<%= pkg.name %>-<%= pkg.version %>.js'
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
                    'dist/scripts/<%= pkg.name %>-<%= pkg.version %>.min.js' : ['dist/scripts/<%= pkg.name %>-<%= pkg.version %>.js']
                }
            }
        },
        karma: {
            unit: {
                configFile: 'drunkcraft.conf.js'
            }
        }
    })

    grunt.registerTask('updateJson', function() {
        var pkg = grunt.file.readJSON('package.json')
        var configFile = 'config/config.json'
        var destFile = 'dist/config/config.json'

        if (!grunt.file.exists(configFile)) {
            grunt.log.error('Config file not found at ' + configFile) 
            return false
        }    
        var config = grunt.file.readJSON(configFile)
        var appVersion = pkg.version 

        config['version'] = appVersion

        grunt.file.write(destFile, JSON.stringify(config, null, 2))
    })

    grunt.registerTask('test', ['jshint', 'karma'])
    grunt.registerTask('build', ['clean', 'jshint', 'concat_css', 'copy', 'updateJson'])
    grunt.registerTask('default', ['build'])
}
