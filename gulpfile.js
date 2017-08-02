const   gulp        = require('gulp'),
        browserSync = require('browser-sync').create(),
        sass        = require('gulp-sass');

const supported = [
  'last 2 versions',
  'safari >= 8',
  'ie >= 10',
  'ff >= 20',
  'ios 6',
  'android 4'
];    

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

  browserSync.init({
      server: "./"
  });

  gulp.watch("./scss-workit/**/*.scss", ['sass']);
  gulp.watch("index.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./scss-workit/**/*.scss")
      .pipe(sass())
        .pipe(gulp.dest("./dist/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);