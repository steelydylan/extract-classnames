const path = require('path');
const fs = require('fs');
const processPath = process.cwd();
const { extractByFile } = require('../');

exports.builder = {
  d: {
    alias: 'dest',
    describe: 'destination path of the generated files',
    default: '',
  },
  s: {
    alias: 'src',
    describe: 'path of the source file',
    default: ''
  },
}

exports.handler = (argv) => {
  extractByFile(path.resolve(processPath, argv.src)).then((css) => {
    fs.writeFile(path.resolve(processPath, argv.dest), css);
  });
}