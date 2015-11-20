var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var cssmin = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

gulp.task('styles', function() {
  return gulp.src('assets/scss/*.scss')
  .pipe(sass({
    'sourcemap=none': true
  }))
  .pipe(prefix())
  .pipe(cssmin({
    compatibility: 'ie8'
  }))
  .pipe(gulp.dest('dist'));
});

gulp.task('jsmin', function() {
  return gulp.src('assets/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch('assets/scss/*.scss', ['styles']);
  gulp.watch('assets/js/*.js', ['jsmin']);
});

gulp.task('default', ['styles', 'jsmin', 'watch']);
