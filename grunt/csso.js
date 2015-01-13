/**
 * Optimize CSS
 * https://github.com/t32k/grunt-csso
 * --------------------------------------------------
 */

exports.task = {
  options: {
    report: 'min',
    banner: '<%= banner.compressed %>'
  },
  styles: {
    expand: true,
    cwd: '<%= path.temp %>',
    src: '<%= path.styles %>/**/*.css',
    dest: '<%= path.temp %>',
    extDot: 'last',
    ext: '.min.css'
  }
};
