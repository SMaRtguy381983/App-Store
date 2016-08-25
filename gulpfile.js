const gulp = require('gulp');
const git = require('gulp-git');
const argv = require('yargs').argv;
const utilityTool = require('loot-ytilitu');

gulp.task('addAll', () => {
  return gulp.src('./*')
    .pipe(git.add());
});

gulp.task('commit', () => {
  // place code for your default task here
  return gulp.src('./gulpfile.js')
    .pipe(git.commit('auto commit message'));
});

gulp.task('release', () => {

});

gulp.task('default', [], () => {
  utilityTool.debug('Just a default Gulp task!' {}, 1);
});
