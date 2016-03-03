var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('default', ['styles'],function() {
  // place code for your default task here

});


/**
 * styles
 * @param  {[type]} 'styles'  [description]
 * @param  {[type]} function( [description]
 * @return {[type]}           [description]
 */
gulp.task('styles', function(){

gulp.src('dev/sass/**/*.scss')
    //pipe sass to convert scss to css
    .pipe(sass({outputStyle:'compressed'})
        //on sass error, don't break the build, just log an error
        .on('error', sass.logError))
    //pipe autoprefixer
    .pipe(autoprefixer({
        browsers:['last 2 versions']
    }))
    //save css to css folder
    .pipe(gulp.dest('assets/css'))
});
