// gulpfile.js
const { src, dest, watch, series, parallel } = require('gulp');
const sass         = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS     = require('gulp-clean-css');
const concat       = require('gulp-concat');
const uglify       = require('gulp-uglify');
const imagemin     = require('gulp-imagemin');
const inject       = require('gulp-inject');
const browserSync  = require('browser-sync').create();

const paths = {
  html:    'src/index.html',
  styles:  'src/css/**/*.scss',
  scripts: 'src/js/**/*.js',
  images:  'src/img/**/*'
};

// 1) SCSS → CSS, autoprefixer, minify
function styles() {
  return src(paths.styles)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(concat('main.min.css'))
    .pipe(dest('dist/css'));
}

// 2) Concat + uglify JS
function scripts() {
  return src(paths.scripts)
    .pipe(concat('bundle.min.js'))
    .pipe(uglify())
    .pipe(dest('dist/js'));
}

// 3) Optimize images
function images() {
  return src(paths.images)
    .pipe(imagemin())
    .pipe(dest('dist/img'));
}

// 4) Inject CSS/JS into dist/index.html (remove 'dist' prefix from URLs)
function html() {
  const cssStream = src('dist/css/*.css', { read: false });
  const jsStream  = src('dist/js/*.js',  { read: false });

  return src(paths.html)
    .pipe(inject(cssStream, {
      ignorePath: 'dist',
      addRootSlash: false
    }))
    .pipe(inject(jsStream, {
      ignorePath: 'dist',
      addRootSlash: false
    }))
    .pipe(dest('dist'));
}

// 5) Serve from dist/, watch and rebuild on changes
function serve() {
  browserSync.init({
    server: { baseDir: 'dist' },
    port: 3000
  });

  watch(paths.styles, series(styles, html, reload));
  watch(paths.scripts, series(scripts, html, reload));
  watch(paths.images, series(images, html, reload));
  watch(paths.html, series(html, reload));
}

function reload(done) {
  browserSync.reload();
  done();
}

const build = series(
  parallel(styles, scripts, images),
  html
);

exports.build = build;
exports.serve = series(build, serve);
