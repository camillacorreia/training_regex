const fs = require('fs')
const bancoCsv = 'database.csv'
const banco = fs.readFileSync(bancoCsv, "utf-8")

const regexDate = /\d{2}[./ ]?\d{2}[./ ]?\d{4}$/gm
const matchDate = banco.match(regexDate)
console.log(matchDate)

const dataString = "25/09/2023, 09/25/2023, 2023-09-25";
const patternDateBr = /(\d{2}\/\d{2}\/\d{4})/g;
const patternDateUs = /(\d{4}-\d{2}-\d{2})/g;

const capturaDateBr = dataString.match(patternDateBr);
console.log(capturaDateBr);

const capturaDateUs= dataString.match(patternDateUs);
console.log(capturaDateUs);