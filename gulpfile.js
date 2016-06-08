const gulp = require('gulp'),
	exec = require('gulp-exec'),
	nodemon = require('gulp-nodemon'),
	postMortem = require('gulp-postmortem'),
	jshint = require('gulp-jshint'),
	jshintStylish = require('jshint-stylish'),
	mocha = require('gulp-mocha'),
	util = require('gulp-util');

require('shelljs/global');

gulp.task('lint', function () {
  gulp.src('./server.js')
    .pipe(jshint())
    .pipe(jshint.reporter(jshintStylish));
})

gulp.task('default', ['lint'], () => {
	nodemon({
		script: 'server.js', 
		watch: ['server.js', '**/*.js'],
		tasks: ['lint'],
		env: { 
			'NODE_ENV': 'development' 
		}
	});
});

gulp.task('test', ['nodemon-test', 'mocha-test']);

gulp.task('nodemon-test', function(cb) {
	nodemon({
		script: 'server.js',
		env: { 
			'NODE_ENV': 'test' 
		}
	})
	.on('start', function() {
		cb();
	})
});

gulp.task('mocha-test', ['nodemon-test'], function() {
	setTimeout(() => {
		process.env.NODE_ENV = 'test';
		return gulp.src('tests/*_test.js', { read: false })
			.pipe(mocha({
				reporter: 'spec',
				timeout: 10000
			}))
			.once('error', () => {
				exit(1);
			})
			.once('end', () => {
				exit(1);
			});
	}, 1000);
	
});
