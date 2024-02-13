const fs = require('fs')
const enderecosCsv = 'enderecos.csv'
const enderecos = fs.readFileSync(enderecosCsv, "utf-8")

const patternEndereco = /^[a-zA-Z0-9\W]+,\s*\d+[a-zA-Z]?,\s*CEP\s\d{5}-\d{3}$/gmi
const matchEndereco = enderecos.match(patternEndereco)
console.log(matchEndereco)

// ^: Indica o início da linha.
// [a-zA-Z0-9\W]+,: Captura o nome da rua que pode conter letras, números e caracteres especiais, seguido por uma vírgula.
// \s*: Permite espaços em branco opcionais após a vírgula.
// \d+[a-zA-Z]?: Captura o número da residência, que pode ser uma sequência de números seguida opcionalmente por uma letra.
// ,: Indica a vírgula que separa o número da residência do CEP.
// \s*: Permite espaços em branco opcionais após a vírgula.
// CEP: Corresponde à palavra "CEP".
// \s: Corresponde a um espaço em branco.
// \d{5}: Corresponde a exatamente 5 dígitos para o código postal.
// -: Corresponde ao hífen.
// \d{3}: Corresponde a exatamente 3 dígitos para a parte do código postal após o hífen.
// $: Indica o fim da linha.