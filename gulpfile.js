const gulp = require('gulp');
const less = require('gulp-less');
const imagemin = require('gulp-imagemin');
const watch = require('gulp-watch');

// Tarefa para compilar arquivos Less para CSS
gulp.task('less', function() {
    return gulp.src('src/styles/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist/styles'));
});

// Tarefa para otimizar imagens
gulp.task('imagemin', function() {
    return gulp.src('src/imagens/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/imagens'));
});

// Tarefa para assistir mudanças nos arquivos Less e imagens
gulp.task('watch', function() {
    gulp.watch('src/styles/*.less', gulp.series('less'));
    gulp.watch('src/imagens/**/*', gulp.series('imagemin'));
});

// Tarefa padrão do Gulp
gulp.task('default', gulp.series('less', 'imagemin', 'watch'));