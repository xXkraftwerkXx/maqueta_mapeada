var gulp         = require("gulp"),
    concat       = require("gulp-concat"),
    cssnano      = require("gulp-cssnano"),
    uglify       = require("gulp-uglify"),
    sass         = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    watch        = require("gulp-watch");

var thirdPartyModules = {
    jquery: 'node_modules/jquery/dist/*.min.js'
};

var sources = {
    js: 'src/js/**/*.js',
    css: '../css/**/*.css'
};
var dist = {
    js: 'dist/js/',
    css: 'dist/css/'
};

gulp.task('js', function () {
    gulp.src([thirdPartyModules.jquery, sources.js])
        .pipe(uglify())
        .pipe(concat('cartera.js'))
        .pipe(gulp.dest(dist.js));    
});

gulp.task('css', function () {
    gulp.src([sources.css])
        .pipe(cssnano())
        .pipe(concat('app.css'))
        .pipe(gulp.dest(dist.css));
});
