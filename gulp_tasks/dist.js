const gulp = require('gulp');
const connect = require('gulp-connect');

gulp.task('connect:dist', () => {
  connect.server({
    name: 'Berlin Clock',
    root: ['dist']
    // port: 8000,
    // livereload: true
  });
});
