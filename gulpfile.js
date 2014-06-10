var gulp = require('gulp'),
	//sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css'),
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
	rename = require('gulp-rename'),
	clean = require('gulp-clean'),
	concat = require('gulp-concat'),
	notify = require('gulp-notify'),
	cache = require('gulp-cache'),
	livereload = require('gulp-livereload'),
	lr = require('tiny-lr'),
	nodemon = require('gulp-nodemon'),
	open = require('gulp-open'),
	fs = require('fs'),
	server = lr();

var source = require('vinyl-source-stream');
var watchify = require('watchify');
var concat = require('gulp-concat-sourcemap');
var bower = require('wiredep')({});

var lrport = 35729;


gulp.task('styles', function() {
  return gulp.src('client/styles/style.css')
	.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
	.pipe(gulp.dest('public/styles'))
	.pipe(gulp.dest('.tmp/styles'))
	.pipe(rename({suffix: '.min'}))
	.pipe(minifycss())
	.pipe(gulp.dest('public/styles'))
	.pipe(livereload(server))
});

gulp.task('scripts', function() {
  return gulp.src('routes/*.js')
	.pipe(jshint('.jshintrc'))
	.pipe(jshint.reporter('jshint-stylish'))
	.pipe(livereload(server))
});


gulp.task('script', function() {
  return gulp.src('client/js/index.js')
		.pipe(uglify())
	  .pipe(gulp.dest('./public/js'))
	  .pipe(livereload(server))
});

gulp.task('libs', function() {
  gulp.src(bower.js)
     .pipe(concat('libs.js'))
     //.pipe(uglify('libs.js'))
     .pipe(gulp.dest('public/js'));
});

gulp.task('images', function() {
  return gulp.src('client/images/**/*')
	.pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
	.pipe(gulp.dest('public/images'))
	.pipe(livereload(server))
});

gulp.task('views', function() {
  return gulp.src('views/**/*')
	.pipe(livereload(server))
});

gulp.task('clean', function() {
	return gulp.src(['public/js'], {read: false})
		.pipe(clean());
});

gulp.task('watch', function() {
	//gulp.watch('styles/*.css', ['styles']);
	// server
	gulp.watch('routes/*.js', ['scripts']);
	// browser
	gulp.watch('client/js/index.js', ['script']);
	//gulp.watch('client/images/**/*', ['images']);
	gulp.watch('views/**/*', ['views']);
});

gulp.task('listen', function() {
  server.listen(lrport);
});

gulp.task('serve', function () {
  nodemon({ script: 'server.js', watch: ['./client/**'],  })
    .on('restart', function() {
    	// there doesn't seem to be a way to trigger a livereload event outside
    	// of .pipe() and we have no way to capture the files that caused the nodemon restart (i think)
    	// SO: crappy hack to send out notification that server files have changed - write to a
    	// file included in a watch task
    	setTimeout(function() {
        	fs.writeFileSync('views/rebooted', 'rebooted');
      }, 1000)
    })
});

gulp.task('default', ['clean'], function() {
	gulp.start('styles', 'scripts', 'images', 'serve', 'watch');
});

gulp.task('dev', ['clean'], function() {
	gulp.start('libs', 'script', 'serve', 'listen', 'watch');
});


