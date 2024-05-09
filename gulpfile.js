const gulp = require('gulp');
const less = require('gulp-less');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function comprimeImagens(){
    return gulp.src('./src/imagens/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/imagens'));
}

gulp.task('less', function() {
    return gulp.src('src/styles/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css'));
});

exports.default = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}