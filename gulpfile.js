const {parallel, watch} = require('gulp');

const sass = require('./gulp-tasks/sass.js');
const font = require('./gulp-tasks/font.js');
const images = require('./gulp-tasks/images.js');

const watcher = () => {
  watch('./src/scss/**/*.scss', {ignoreInitial: true}, sass);
  watch('./src/images/**/*', {ignoreInitial: true}, images);
};

exports.default = parallel(sass, font, images);

exports.watch = watcher;
