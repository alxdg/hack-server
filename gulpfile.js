var gulp = require('gulp');
var scp = require('gulp-scp2');
 
gulp.task('default', function() {
  return gulp.src('**/*.js')
  .pipe(scp({
    host: '10.44.13.70',
    username: 'pi',
    password: 'RaspberryPi123',
    dest: '/home/pi/sandbox/server'
  }))
  .on('error', function(err) {
    console.log(err);
  });
});