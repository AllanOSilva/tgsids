
const gulp = require('gulp');
const less = require('gulp-less');
const htmlmin = require('gulp-htmlmin');

gulp.task('less', function() {
    return gulp.src('src/styles/main.less')
        .pipe(less())
        .pipe(gulp.dest('dist/styles'));
});


gulp.task('minify-html', function() {
    return gulp.src('src/*.html')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('dist'));
  });
  gulp.task('watch', function() {
    gulp.watch('src/styles/*.less', gulp.series('less'));
    gulp.watch('src/*.html', gulp.series('minify-html'))
});

gulp.task('default', gulp.series('minify-html','less', 'watch'));