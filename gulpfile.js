var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var minifyJS = require('gulp-minify');

gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('js', function(){
  return gulp.src('./src/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(minifyJS())
    .pipe(gulp.dest('./public/javascripts'))
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});

gulp.task('js:watch', function () {
  gulp.watch('./src/js/**/*.js', ['js']);
});

gulp.task('default', ['sass', 'js']);