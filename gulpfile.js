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
    gulp.src('jade/*.jade')
    .pipe(data(function(file){
        return require('./data.json');
    }))
    .pipe(jade({
        pretty:true
    })).pipe(gulp.dest('build')).pipe(livereload())
});

gulp.task('css',function(){
    gulp.src(['css/*.css','sass/*.scss']).pipe(sass().on('error',sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('build/css'))
    .pipe(livereload())
});

gulp.task('images',function(){
    gulp.src(['images/*'])
    .pipe(gulp.dest('build/images'))
    .pipe(livereload())
})
    
gulp.task('js',function(){
    gulp.src(['js/**'])
    .pipe(gulp.dest('build/js'))
    .pipe(livereload())
})

gulp.task('watch',gulp.series(['build']),function(){
    livereload.listen();
    gulp.watch('jade/*.jade',gulp.series(['html']));
    gulp.watch('sass/*.sass',gulp.series(['css']));
    gulp.watch('images/*',gulp.series(['images']));
})


gulp.task('build',gulp.parallel(['html','css','images','js']));