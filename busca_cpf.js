const fs = require('fs')
const bancoCsv = 'database.csv'
const banco = fs.readFileSync(bancoCsv, "utf-8")

const patternCpf = /\d{3}[.-]?\d{3}[.-]?\d{3}[.-]?\d{2}/g
const matchCpf = banco.match(patternCpf)
console.log(matchCpf)