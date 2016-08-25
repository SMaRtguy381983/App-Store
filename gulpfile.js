const gulp = require('gulp');
const git = require('gulp-git');
const argv = require('yargs').argv;
const utilityTool = require('loot-ytilitu');
const jsonfile = require('jsonfile');

// Git Release Tasks
gulp.task('doVersion', () => {
  if (argv.type) {
    const file = 'package.json';

    jsonfile.readFile(file, (err, obj) => {
      const version = utilityTool.incVersion(obj.version, argv.type);

      const tempObj = obj;
      tempObj.version = version;

      jsonfile.writeFile(file, tempObj, { spaces: 2 }, (err2) => {
        if (err2) {
          utilityTool.debug(err2, {}, 0);
        } else {
          utilityTool.debug('Updated the version successfully!', {}, 1);
        }
      });
    });
  } else {
    utilityTool.debug('--type was not given to gulp, but it must be the version type', {}, 0);
  }
});

gulp.task('addAll', ['doVersion'], () => {
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
  } else {
    utilityTool.debug('--b was not given to the gulp cmd, but it must be a feature branch', {}, 0);
  }
});

// DEBUG=true gulp release --type=patch --b autoVerBump --m ""
gulp.task('release', ['push'], () => {
  utilityTool.debug('You did everything!', {}, 1);
});

// Default task
gulp.task('default', [], () => {
  utilityTool.debug('Just a default Gulp task!', {}, 1);
});
