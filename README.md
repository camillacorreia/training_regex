# Training Regex

| Metacaractere | Significado                                                   |
|---------------|---------------------------------------------------------------|
| .             | Qualquer caractere, exceto quebras de linha.                |
| *             | Zero ou mais ocorrências do caractere ou grupo anterior.     |
| +             | Uma ou mais ocorrências do caractere ou grupo anterior.      |
| ?             | Zero ou uma ocorrência do caractere ou grupo anterior.       |
| \|            | Alternância, corresponde a um dos padrões à esquerda ou à direita. |
| ()            | Grupo de captura, agrupa caracteres para aplicar metacaracteres a eles. |
| []            | Classe de caracteres, corresponde a qualquer caractere dentro dos colchetes. |
| [^]           | Classe de caracteres negada, corresponde a qualquer caractere que não esteja dentro dos colchetes. |
| ^             | Âncora de início de linha, corresponde ao início de uma linha. |
| $             | Âncora de final de linha, corresponde ao final de uma linha. |
| \             | Escape, permite escapar metacaracteres para correspondê-los literalmente. |
| {}            | Quantificador personalizado, especifica o número exato ou faixa de repetições. |