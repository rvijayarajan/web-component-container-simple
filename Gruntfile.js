module.exports = function (grunt) {
	grunt.initConfig({
		ngtemplates: {
			myApp: {
				options: {
					module: 'wcContainerSimpleTemplates',
					standalone: true
				},
				cwd: '.',
				src: ['container-simple.html'],
				dest: 'wccontainersimpletemplates.js'
			}
		},
		concat: {
		    options: {
		    },
		    dist: {
		      src: ['wccontainersimpletemplates.js', 'index.js'],
		      dest: 'dist/wccontainersimple.js',
		    },
		  },
	});

	grunt.loadNpmTasks('grunt-angular-templates');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default',['ngtemplates','concat']);
};