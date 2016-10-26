var gulp   = require('gulp');
var postcss = require('gulp-postcss');
var postcssImport = require('postcss-import')();
var postcssNested = require('postcss-nested')();
var postcssMixins = require('postcss-mixins')();
var postcssConditionals = require('postcss-conditionals')();
var postcssEach = require('postcss-each')();
var postcssFor = require('postcss-for')();
var postcssCustomMedia = require('postcss-custom-media')();
var postcssCustomProperties = require('postcss-custom-properties')();
var postcssCustomSelectors = require('postcss-custom-selectors')();
var postcssCalc = require('postcss-calc')();
var config = require('../config')();

var cssTask = () => {

  var processors = [
    postcssImport,
    postcssNested,
    postcssMixins,
    postcssConditionals,
    postcssEach,
    postcssFor,
    postcssCustomMedia,
    postcssCustomProperties,
    postcssCustomSelectors,
    postcssCalc
  ];

  return gulp
    .src(config.css)
    .pipe(postcss(processors))
    .pipe(gulp.dest('public/assets/css'));
};

gulp.task('css', cssTask);
module.exports = cssTask;