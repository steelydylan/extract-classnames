#! /usr/bin/env node
"use strict";

const extract = require('./extract');

const argv = require('yargs')
  .command('*','extract classnames from a html file', extract)
  .command('extract', 'extract classnames from a html file', extract)
  .detectLocale(false)
  .version(function() { return require('../package').version; })
  .alias('v', 'version')
  .alias('h', 'help')
  .strict()
  .argv