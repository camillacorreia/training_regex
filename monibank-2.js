const url = "https://monicahillman.github.io/monibank/";

fetch(url)
  .then(response => {
    if (response.status === 200) {
      return response.text();
    } else {
      throw new Error(`A requisição GET para ${url} falhou com o código ${response.status}`);
    }
  })
  .then(html_content => {
    const pattern = /\bbank\b/gi;
    const linhas = html_content.split('\n');

    linhas.forEach((linha, indice) => {
      if (pattern.test(linha)) {
        console.log(`Linha ${indice + 1}: ${linha}`);
      }
    });
  })
  .catch(error => {
    console.error('Erro ao fazer solicitação:', error);
  });
