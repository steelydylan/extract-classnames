const cssExtractor = require('../index.js');

cssExtractor.extractByFile(`${__dirname}/index.html`).then((css) => {
  console.log(css);
});