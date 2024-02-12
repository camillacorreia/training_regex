const fs = require('fs')
const bancoCsv = 'database.csv'
const banco = fs.readFileSync(bancoCsv, "utf-8")

const regexData = /\d{2}[./ ]?\d{2}[./ ]?\d{4}$/gm
const matchData = banco.match(regexData)
console.log(matchData)