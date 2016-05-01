var glob = require('glob');

module.exports = glob.sync('*.js', {ignore: 'index.js', cwd: __dirname})
  .reduce((obj, file) => {
    file = file.replace('.js', '')
    obj[file] = require('./' + file);
    return obj;
  }, {});
