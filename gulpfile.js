var argv         = require('minimist')(process.argv.slice(2)),
    autoprefixer = require('gulp-autoprefixer'),
    concat       = require('gulp-concat'),
    gulp         = require('gulp'),
    gulpif       = require('gulp-if'),
    jade         = require('gulp-jade-php'),
    livereload   = require('gulp-livereload'),
    plumber      = require('gulp-plumber'),
    sass         = require('gulp-sass'),
    uglify       = require('gulp-uglify');


// Enable only for production deployment
var enabled = {
    failCheck:!argv.production,
    prettyPug: !argv.production,
    uglify: argv.production
};


// Styles for the theme
gulp.task('styles', function() {
    gulp.src('themes/bthree/src/styles/**/*.sass')
        .pipe(gulpif(enabled.failCheck, plumber()))
        .pipe(sass({
            outputStyle: 'compressed'}
            ))
        .pipe(autoprefixer("last 3 version", "safari 5", "ie 8", "ie 9"))
        .pipe(gulp.dest('themes/bthree'))
        .pipe(livereload());
});

// Templates
gulp.task('templates', function() {
    gulp.src('themes/bthree/src/templates/**/*.jade')
        .pipe(gulpif(enabled.failCheck, plumber()))
        .pipe(jade({
            pretty: enabled.prettyPug
        }))
        .pipe(gulp.dest('themes/bthree/'))
        .pipe(livereload());
});


/*
 * Collection of scripts in src/scripts/tutti/ to merge into tutti.min.js
 * Since it's always loaded, it's only for functions that we want site-wide
 */
gulp.task('scripts_tutti', function() {
    gulp.src('themes/bthree/src/scripts/tutti/**/*.js')
        .pipe(gulpif(enabled.failCheck, plumber()))
        .pipe(concat("tutti.min.js"))
        .pipe(gulpif(enabled.uglify, uglify()))
        .pipe(gulp.dest('themes/bthree/assets/js/generated/'))
        .pipe(livereload());
});


gulp.task('reload_theme', function() {
    gulp.src('themes/bthree/')
        .pipe(livereload());
});


// While developing, run 'gulp watch'
gulp.task('watch',function() {
    // Only reload the pages if we run with --livereload
    if (argv.livereload){
        livereload.listen();
    }

    gulp.watch('themes/**/*.sass',['styles']);
    gulp.watch('themes/bthree/assets_shared/sass/**/*.sass', ['styles']);

    gulp.watch('themes/bthree/src/templates/**/*.jade',['templates']);
    gulp.watch('themes/**/*.php', ['reload_theme']);

    gulp.watch('themes/bthree/src/scripts/tutti/*.js',['scripts_tutti']);
});


// Run 'gulp' to build everything at once
gulp.task('default', ['styles', 'scripts_tutti', 'templates']);
