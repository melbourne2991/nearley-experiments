const watch = require('watch');
const fs = require('fs-extra');
const nearley = require('nearley');

const grammar = require("./grammar.js");

const delimitterPattern = /--.*/g;
const testNamePattern = /--(.*)\n/g

const options = {
  interval: 1
};

watch.watchTree(`${__dirname}/tests`, options, (f, curr, prev) => {
  if (typeof f === 'string') {
    return readFile(f);
  }

  Object.keys(f).forEach(readFile);
});

function readFile(filePath) {
  if(!fs.lstatSync(filePath).isDirectory()) {
    const file = fs.readFileSync(filePath, 'utf-8');
    parseTests(file);
  }
}

function parseTests(file) {
  const splits = file.split(testNamePattern);

  for (i = 0; i < splits.length - 1; i = i + 2) {
      let code = splits[i + 2];
      const name = splits[i + 1]

      if (code[0] === '\n') {
        code = code.slice(1, code.length);
      }

      if (code[code.length - 1 ] === '\n') {
        code = code.slice(0, code.length - 1);
      }

      console.log(`Testing:: ${name}`);
      console.log(`"${code}"`);

      const results = parseIt(code);

      console.log(`Results: ${JSON.stringify(results)}\n`);
  }
}

function parseIt(code) {
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar))

  try {
    parser.feed(code);
  } catch (e) {
    console.log('FAILED!');
  }


  return parser.results;
}
