const {dest, src} = require('gulp');
const cleanCSS = require('gulp-clean-css');
const sassProcessor = require('gulp-sass')(require('sass'));

// We want to be using canonical Sass, rather than node-sass
sassProcessor.compiler = require('sass');

// Flags wether we compress the output etc
const isProduction = process.env.NODE_ENV === 'production';

const sass = () => {
  return src('./src/scss/*.scss')
    .pipe(sassProcessor().on('error', sassProcessor.logError))
    .pipe(
      cleanCSS(
        isProduction
          ? {
              level: 2
            }
          : {}
      )
    )
    .pipe(dest('./dist/css', {sourceMaps: !isProduction}));
};

module.exports = sass;