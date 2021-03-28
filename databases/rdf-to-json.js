const fs = require("fs");
const parseRDF = require("./lib/parse-rdf");
const rdf = fs.readFileSync(`../data/cache/epub/${process.argv[2]}`);
const book = parseRDF(rdf);
console.log(JSON.stringify(book, null, " "));

// node rdf-to-json.js 132/pg132.rdf
