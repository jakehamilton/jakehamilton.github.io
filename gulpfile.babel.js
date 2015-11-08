const gulp = require('gulp');
const sass = require('gulp-sass');
const jade = require('gulp-jade');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const plumber = require('gulp-plumber');
const imagemin = require('gulp-imagemin');
const uglifycss = require('gulp-uglifycss');
const minifyhtml = require('gulp-minify-html');
const browserSync = require('browser-sync').create();
const autoPrefixer = require('gulp-autoprefixer');

gulp.task('serve', ['jade', 'sass', 'img', 'js'], () => {
  browserSync.init({
    server: {
      baseDir: './app'
    }
  });
});

gulp.task('watch', () => {
  gulp.watch('./src/jade/**/*.jade', ['jade']);
  gulp.watch('./src/sass/**/*.scss', ['sass']);
  gulp.watch('./src/img/*', ['img'], () => { browserSync.reload() });
  gulp.watch('./src/js/*', ['js'], () => { browserSync.reload() });
});

gulp.task('jade', () => {
  gulp.src('./src/jade/*.jade')
    .pipe(plumber())
    .pipe(jade())
    .pipe(minifyhtml())
    .pipe(gulp.dest('./app/'))
    .pipe(browserSync.stream());
});

gulp.task('sass', () => {
  gulp.src('./src/sass/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoPrefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(uglifycss({
      "max-line-len": 80
    }))
    .pipe(gulp.dest('./app/assets/css'))
    .pipe(browserSync.stream());
});

gulp.task('img', () => {
  gulp.src('./src/img/*')
    .pipe(plumber())
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(gulp.dest('./app/assets/img'));
});

gulp.task('js', () => {
  gulp.src('./src/js/*.js')
    .pipe(plumber())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./app/assets/js/'));
});

gulp.task('default', ['serve', 'watch']);
