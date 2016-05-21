var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task('thor', function(){
	return gulp.src('./source/sass/*.scss')
				 .pipe(sass({compressed:true}))
				 .pipe(gulp.dest('./dist/css'))
});

gulp.task('buildjs', function(){
	return gulp.src([
		'./source/components/jquery/dist/jquery.js',
		'./source/components/jquery-mobile/jquery.mobile.custom.js'
		])
		.pipe(gulp.dest('./dist/js'))
});


gulp.task('aquaman', function(){
	return gulp.src('./source/js/*.js')
				 .pipe(gulp.dest('./dist/js/'));
});

gulp.task('demolidor', function(){
	gulp.watch('./source/sass/**/*.scss',['thor']);
	gulp.watch('./source/js/**/*.js',['aquaman']);
});

gulp.task('default',['buildjs','thor','aquaman','demolidor']);