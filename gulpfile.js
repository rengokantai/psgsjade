var gulp = require('gulp'),
sass = require('gulp-sass'),
concat = require('gulp-concat'),
livereload = require('gulp-livereload'),
express = require('express'),
app = express(),
gutil = require('gulp-util'),
path = require('path'),
data = require('gulp-data'),
jade = require('gulp-jade');
//rename = require('rename');

app.use(express.static(path.resolve('./build')));
app.listen('8080',function(){
    gutil.log('listening 8080');
})

gulp.task('html',function(){
    gulp.src('jade/*.jade').pipe(jade({
        pretty:true
    })).pipe(gulp.dest('build'))
});


gulp.task('watch',function(){
    gulp.watch('jade/*.jade',gulp.series(['html']));
})