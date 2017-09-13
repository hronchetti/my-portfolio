// Storing which gulp packages to use
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
// Gulp task for sass
gulp.task('styles', function() {
    // What happens inside the Gulp task
    return gulp.src('./sass/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 4 versions']
        }))
        .pipe(gulp.dest('./css'));
});
// Gulp task watching for any changes in .scss files and runnin 'sass' task if there are
gulp.task('watch', function(){
    gulp.watch('./sass/*.scss',['styles']);
});
// Creating a default task for Gulp to run, run on 'gulp' instead of 'gulp sass'
gulp.task('default', ['styles','watch']);