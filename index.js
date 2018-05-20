const fs = require('fs');

const getClassNamesFromHtml = (html) => {
  const founds = html.match(/class=('|")(.*?)('|")/g);
  const classnames = founds.map((found) => {
    return found.replace(/class=('|")(.*?)('|")/g, '$2');
  });
  const reduced = classnames.reduce((ret, name) => {
    return [...ret, ...name.split(' ')];
  }, []);
  const filtered = reduced.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
  const ordered = filtered.sort((a, b) => {
    if (a > b) {
      return 1;
    }
    return -1;
  })
  return ordered;
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