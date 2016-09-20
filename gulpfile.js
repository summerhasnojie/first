var gulp = require("gulp"),
	less = require("gulp-less"),
	mincss = require("gulp-clean-css"),
	connect = require("gulp-connect")
gulp.task("lessTest",function(){
	gulp.src("src/less/*.less").pipe(less()).pipe(mincss()).pipe(gulp.dest("css"));
	
});
gulp.task("watch",function(){
	gulp.watch("src/less/*.less",["lessTest"]);
	gulp.watch("page/*.html",["html"]);
});
gulp.task("server",function(){
	connect.server({
		root:"page",//配置默认目录
		port:804,//端口号
		livereload:true//是否自动刷新
	});
});
gulp.task("html",function(){
	gulp.src("page/*.html").pipe(connect.reload());
});

gulp.task("default",["watch","html","server"])

