/*

	GULPFILE.JS
	owebboy
*/

/* gulp and pluins ----------------------------------------- */
var gulp 				= require('gulp'),
  	stylus 			= require('gulp-stylus'),
  	cssmin 			= require('gulp-cssmin'),
  	rename 			= require('gulp-rename'),
  	webserver 	= require('gulp-webserver');

/* destinations -------------------------------------------- */
var stylusFile 	= './stylus/size.styl';

/* stylus to css to minifcation ---------------------------- */
gulp.task('stylus', function()
{
  gulp.src(stylusFile)
    .pipe(stylus())
    .pipe(gulp.dest('./css'))
    .pipe(cssmin())
    .pipe(rename(
    {
      suffix: '.min'
    }))
    .pipe(gulp.dest('./css'));
});

/* webserver ----------------------------------------------- */
gulp.task('webserver', function()
{
  gulp.src('./')
    .pipe(webserver(
    {
      livereload: false,
      directoryListing: false,
      open: true,
      port: 9000
    }));
});

/* default task -------------------------------------------- */
gulp.task('default', ['webserver', 'stylus'], function()
{
  gulp.watch(stylusFile, ['stylus']);
});