var gulp = require('gulp');
var sass = require('gulp-sass');

// Compile SCSS
gulp.task('sass:compile', function() {
  return gulp.src('Swag/static/scss/**/*.scss')
    .pipe(sass.sync({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(gulp.dest('Swag/static/css'))
});
