var gulp = require('gulp'),
jade = require('gulp-jade');
//rename = require('rename');

gulp.task('html',function(){
    gulp.src('jade/*.jade').pipe(jade()).pipe(gulp.dest('build'))
});


gulp.task('watch',function(){
    gulp.watch('jade/*.jade',gulp.parallel(['html']));
})