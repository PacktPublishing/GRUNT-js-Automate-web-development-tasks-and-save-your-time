/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        autoprefixer: 
        {
            options: {
               browsers: ['> 1%', 'last 2 versions']
            },
            dist: {
               src: 'css/style.css',
               dest: 'css/styleprefixed.css'
            }
        },
        watch:
        {
            autoprefixer:
            {
               files: ['css/style.css'], 
               tasks: ['autoprefixer', 'cssmin']
            },
            jscompressor:
            {
               files: ['js/*.js'], 
               tasks: ['uglify']
            }
            
        },
        cssmin:
        {
            target:
            {
                files: 
                {
                  'css/styleprefixed.min.css': ['css/styleprefixed.css']
                }
            }
        },
        uglify:
        {
            target:
            {
                files: 
                {
                  'js/output.min.js': ['js/script.js', 'js/script2.js']
                }
            }
        },
        imagemin:
        {
            dynamic:
            {
                options:
                {
                  optimizationLevel: 7  
                },
                files:[
                {
                    expand: true,
                    cwd: 'images/', //current working directory
                    src: ['**/*.{jpg,png,gif}', '!build/**/*.{jpg,png,gif}'],
                    dest: 'images/build'
                }]
            }
        }
    });

    grunt.registerTask("default", ['autoprefixer', 'watch']);
    
    grunt.registerTask("minifyNewImages", 'newer:imagemin');
   
};
