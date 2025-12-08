const { src, dest, watch, parallel, series } = require('gulp');

// Всі необхідні плагіни
const sass = require('gulp-sass')(require('sass'));
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const fileInclude = require('gulp-file-include');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

const bootstrapSassPath = 'node_modules/bootstrap/scss';


// Таска для HTML
const html_task = () => {
  return src('src/app/*.html')
    .pipe(fileInclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(dest('dist/'))
    .pipe(browserSync.stream());
}

// Таска для JS
const js_task = () => {
  return src([
    'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
    'src/app/js/*.js'
  ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('dist/js/'))
    .pipe(browserSync.stream());
}

const json_task = () => {
  return src('src/app/*.json')
    .pipe(dest('dist/'))
}

// Таска для SCSS
const scss_task = () => {
  return src('src/app/scss/style.scss')
    .pipe(sass({includePaths: [bootstrapSassPath]}).on('error', sass.logError))
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min', extname: '.css' }))
    .pipe(dest('dist/css/'))
    .pipe(browserSync.stream());
};

// Таска для IMG
const img_task = () => {
  return src('src/app/imgs/**/*.{png,jpg,jpeg,svg}', {encoding: false})
    .pipe(imagemin())
    .pipe(dest('dist/imgs/'));
}

// Таска для Bootstrap
const bootstrapCSS = () => {
  return src('node_modules/bootstrap/dist/css/bootstrap.min.css')
    .pipe(dest('dist/css'));
}

const bootstrapJS = () => {
  return src('node_modules/bootstrap/dist/js/bootstrap.bundle.min.js')
    .pipe(dest('dist/js'));
}

// Таска BrowserSync
const browsersync_task = () => {
  browserSync.init({
    server: {
      baseDir: "dist/"
    },
    notify: false
  });
}

// Таска watch
const watch_task = () => {
  watch('src/app/**/*.html', html_task);
  watch('src/app/js/**/*.js', js_task);
  watch('src/app/scss/**/*.scss', scss_task);

  watch('src/app/img/**/*.{png,jpg,jpeg,svg}', series(img_task, browserSync.reload));
}

// Таска build
const build = series(html_task, parallel(scss_task, js_task, json_task, img_task, bootstrapCSS, bootstrapJS));

// Експортуємо таску build
exports.build = build;

// Таска default
exports.default = series(
  build,
  parallel(browsersync_task, watch_task)
);