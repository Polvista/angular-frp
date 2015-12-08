var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    vinylPaths = require('vinyl-paths'),
    browserify = require('browserify'),
    transform = require('vinyl-transform'),
    source   = require('vinyl-source-stream'),
    uglify   = require('gulp-uglify'),
    streamify = require('gulp-streamify'),
    concat = require('gulp-concat'),
    del = require('del');

gulp.task('default', ['typescript'], function(){
    return browserify( {entries: ['temp/module.js']} )
        .bundle()
        .pipe(source('angular-frp.js'))
        .pipe(gulp.dest('dist'))
        .pipe(streamify(uglify()))
        .pipe(streamify(concat('angular-frp.min.js')))
        .pipe(gulp.dest('dist'));
});

gulp.task('typescript', ['clear-build'], function(){
    return gulp.src('src/**/*.ts', {base: 'src'})
        .pipe(ts({
            module: 'commonJs'
        }))
        .pipe(gulp.dest('temp'));
});

gulp.task('clear-build', function(){
    return gulp.src(['temp', 'dist'])
        .pipe(vinylPaths(del));
});