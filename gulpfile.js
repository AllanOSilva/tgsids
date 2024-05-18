
const gulp = require('gulp');
const less = require('gulp-less');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify');

gulp.task('less', function() {
    return gulp.src('src/styles/main.less')
        .pipe(less())
        .pipe(gulp.dest('src/styles'));
});

gulp.task('scripts', function() {
    return gulp.src('src/scripts/*.js')  // Fonte dos arquivos JS
        .pipe(uglify())                // Minificar o JS concatenado
        .pipe(gulp.dest('dist/scripts'));   // Destino do arquivo processado
});

gulp.task('minify-html', function() {
    return gulp.src('*.html')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('dist'));
  });
  gulp.task('watch', function() {
    gulp.watch('src/styles/*.less', gulp.series('less'));
    gulp.watch('*.html', gulp.series('minify-html'));
    gulp.watch('src/scripts/*.js', gulp.series('scripts'));
});

gulp.task('default', gulp.series('minify-html','less','scripts'));