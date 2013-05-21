module.exports = function(grunt) {
	'use strict';
	var gruntConfig = {
		pkg: grunt.file.readJSON('package.json'),
		rsync: {
			dist: {
				src: './src/',
				dest: './dist',
				recursive: true,
				syncDest: true,
				exclude: ['main.*']
			},
			deploy: {
				src: './dist/',
				dest: '/home/fabriciolo2/public_html',
				host: 'fabriciolo2@fabriciolo.com',
				recursive: true,
				syncDest: false
			}
		}
	};
	grunt.initConfig(gruntConfig);

	var keys = Object.keys(gruntConfig);
	var tasks = [];

	for(var i = 1, l = keys.length; i < l; i++) {
		tasks.push(keys[i]);
	}

	grunt.loadNpmTasks('grunt-rsync');
	grunt.registerTask('default', tasks);
};