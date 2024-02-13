const url = "https://monicahillman.github.io/monibank/";

fetch(url)
  .then(response => response.text())
  .then(html_content => {
    const pattern = /<(h[1|2])[^>]*>(.*?)<\/\1>/gm
    const matches = html_content.match(pattern)

    console.log(matches)
  })
  .catch(error => {
    console.error('Erro ao fazer solicitação:', error);
  });
