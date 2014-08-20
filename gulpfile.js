var gulp   = require('gulp');
var path   = require('path');
var less   = require('gulp-less');
var concat = require('gulp-concat');
var fs     = require('fs');

gulp.task('less-component', function() {
  return gulp.src('./stylesheets/components/**/*.less')
    .pipe(concat('component.less'))
    .pipe(gulp.dest('./stylesheets/'));
});

// gulp.task('less-controller', function() {
//   return gulp.src('./stylesheets/controllers/**/*.less')
//     .pipe(concat('controller.less'))
//     .pipe(gulp.dest('./stylesheets/'));
// });

gulp.task('less', ['less-component'], function() {
  return gulp.src('./stylesheets/style.less')
    .pipe(less({ paths: [path.join(__dirname, 'less', 'includes')] }))
    .pipe(gulp.dest('./stylesheets/'));
});

gulp.task('js', function() {
  return gulp.src([
      './javascripts/app.js',
      //'./javascripts/filters.js',
      './javascripts/controllers/**/*.js'//,
      //'./javascripts/directives/*.js'
    ])
    .pipe(concat('script.js'))
    .pipe(gulp.dest('./javascripts/'));
});

gulp.task('watch', ['less', 'js'], function() {
  gulp.watch('./stylesheets/**/*.less', ['less']);
  gulp.watch('./javascripts/**/*.js',   ['js']);
});

gulp.task('default', ['less', 'js']);
