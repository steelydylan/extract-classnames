const fs = require('fs');

const getClassNamesFromHtml = (html) => {
  const founds = html.match(/class=('|")(.*?)('|")/g);
  const classnames = founds.map((found) => {
    return found.replace(/class=('|")(.*?)('|")/g, '$2');
  });
  return classnames;
}

const buildCSSFromClassNames = (classnames) => {
  return classnames.map(classname => {
    return `.${classname} {\n
}\n`;
  }).join('');
}

const extract = (html) => {
  const classnames = getClassNamesFromHtml(html);
  const css = buildCSSFromClassNames(classnames);
  return css;
}

const extractByFile = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, {encoding: 'utf8'}, (err, html) => {
      const css = extract(html);
      resolve(css);
    });
  });
}

module.exports = {
  extract,
  extractByFile
}