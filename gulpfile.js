
const gulp = require('gulp');
const less = require('gulp-less');

gulp.task('less', function() {
    return gulp.src('src/styles/main.less')
        .pipe(less())
        .pipe(gulp.dest('dist/styles'));
});

gulp.task('watch', function() {
    gulp.watch('src/styles/*.less', gulp.series('less'));
});

gulp.task('default', gulp.series('less', 'watch'));