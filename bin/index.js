const argv = require('yargs')
  .command('extract', 'extract classnames from a html file', require('./extract'))
  .detectLocale(false)
  .version(function() { return require('../package').version; })
  .alias('v', 'version')
  .alias('h', 'help')
  .strict()
  .argv