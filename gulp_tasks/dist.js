const gulp = require('gulp');
const connect = require('gulp-connect');

gulp.task('connect:dist', () => {
  connect.server({
    name: 'Berlin Clock',
    root: ['dist'],
    port: process.env.PORT || 5000,
    livereload: false
  });
});
