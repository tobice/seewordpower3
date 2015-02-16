module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        assemble: {
            options: {
                assets: 'public/',
                partials: ['templates/partials/**/*.hbs'],
                layout: ['templates/layouts/default.hbs'],
                flatten: true,
                helpers: ['./dev/helpers/withHash.js']
            },
            site: {
                src: ['templates/*.hbs'],
                dest: 'public'
            }
        },

        less: {
            options: {
                paths: ['node_modules', 'node_modules/bootstrap/less'],
                cleancss: true
            },
            default: {
                files: {
                    'public/styles/styles.css': 'assets/stylesheets/index.less'
                }
            }
        },

        browserify: {
            devel: {
                options: {
                    debug: true,
                    watch: true,
                    keepAlive: true
                },
                files: {
                    'public/scripts/scripts.js': 'assets/scripts/index.js'
                }
            },
            build: {
                options: {
                    debug: false,
                    transform: [['uglifyify', {global: true}]]
                },
                files: {
                    'public/scripts/scripts.js': 'assets/scripts/index.js'
                }
            }
        },

        watch: {
            styles: {
                files: 'assets/stylesheets/**/*',
                tasks: ['less:default'],
                options: {interrupt: true}
            },
            templates: {
                files: 'templates/**/*',
                tasks: ['assemble'],
                options: {interrupt: true}
            }
        },

        copy: {
            all: {
                files: [{
                    expand: true,
                    cwd: 'assets/images/',
                    src: '**',
                    dest: 'public/images/'
                }]
            }
        },

        concurrent: {
            main: {
                tasks: ['browserify:devel', 'watch'],
                options: {logConcurrentOutput: true}
            }
        }
    });

    grunt.loadNpmTasks('assemble');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.registerTask('build', ['browserify:build', 'less', 'assemble', 'copy']);
    grunt.registerTask('devel', ['less', 'assemble', 'copy', 'concurrent']);
};
