const gulp = require('gulp');
const less = require('gulp-less');


// Tarefa para compilar arquivos Less para CSS
gulp.task('less', function() {
    return gulp.src('src/styles/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist/styles'));
});



// Tarefa para assistir mudanças nos arquivos Less e imagens
gulp.task('watch', function() {
    gulp.watch('src/styles/*.less', gulp.series('less'));
    
});

// Tarefa padrão do Gulp
gulp.task('default', gulp.series('less'));