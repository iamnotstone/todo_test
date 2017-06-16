var gulp = require('gulp');
var rename = require('gulp-rename');
var webpack = require('webpack-stream');
var del = require('del');

gulp.task('clean',function(cb){
	del(['./dist/*.js'] ,cb);

});

gulp.task('build',function(){
	return gulp.src('src/index.js')
	.pipe(webpack(require('./webpack.config.js')))
	.pipe(gulp.dest('./dist/'));
})
