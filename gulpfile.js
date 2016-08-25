const gulp = require('gulp');
const git = require('gulp-git');
const argv = require('yargs').argv;
const utilityTool = require('loot-ytilitu');

// Git Release Tasks

gulp.task('addAll', () => {
  utilityTool.debug('Hey! You are adding all!', {}, 1);

  return gulp.src('./')
    .pipe(git.add({ args: '-A' }));
});

gulp.task('commit', ['addAll'], () => {
  if (argv.m) {
    utilityTool.debug('Yo! You are committing', {}, 1);

    return gulp.src('./')
      .pipe(git.commit(argv.m));
  }

  utilityTool.debug('--m was not given to the gulp cmd, but it must be the commit message', {}, 0);

  return false;
});

gulp.task('push', ['commit'], () => {
  if (argv.b) {
    utilityTool.debug('Push it real good!', {}, 1);

    git.push('origin', `${argv.b}:release`, (err) => {
      if (err) throw err;
    });
  }

  utilityTool.debug('--b was not given to the gulp cmd, but it must be the feature branch', {}, 0);

  return false;
});

// DEBUG=true gulp release --b "autoVerBump" --m ""
gulp.task('release', ['push'], () => {
  utilityTool.debug('You are doing everything!', {}, 1);
});

// Default task
gulp.task('default', [], () => {
  utilityTool.debug('Just a default Gulp task!', {}, 1);
});
