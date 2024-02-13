# Training Regex

| Metacaractere | Significado                                                   |
|---------------|---------------------------------------------------------------|
| .                | Qualquer caractere, exceto quebras de linha.                 |
| *                | Zero ou mais ocorrências do caractere ou grupo anterior.     |
| +                | Uma ou mais ocorrências do caractere ou grupo anterior.      |
| ?                | Zero ou uma ocorrência do caractere ou grupo anterior.       |
| *barra vertical* | Alternância, corresponde a um dos padrões à esquerda ou à direita. |
| ()               | Grupo de captura, agrupa caracteres para aplicar metacaracteres a eles. |
| []               | Classe de caracteres, corresponde a qualquer caractere dentro dos colchetes. |
| [^]              | Classe de caracteres negada, corresponde a qualquer caractere que não esteja dentro dos colchetes. |
| ^                | Âncora de início de linha, corresponde ao início de uma linha. |
| $                | Âncora de final de linha, corresponde ao final de uma linha. |
| \                | Escape, permite escapar metacaracteres para correspondê-los literalmente. |
| {}               | Quantificador personalizado, especifica o número exato ou faixa de repetições. |

### Classes
Atuam como conjuntos de caracteres para criação de padrões, pois permitem que você especifique padrões complexos de texto.

As classes são definidas entre colchetes e podem incluir principalmente lista de caracteres, ranges (intervalos) ou negação de classes.

| Regex       | Descrição                                    | Correspondência             |
|-------------|----------------------------------------------|-----------------------------|
| [a-z]       | Qualquer letra minúscula de 'a' a 'z'        | "a", "m", "z"               |
| [0-9]       | Qualquer dígito de 0 a 9                     | "0", "7", "9"               |
| [A-Za-z]    | Qualquer letra maiúscula ou minúscula        | "A", "b", "Z"               |
| [0-9A-Fa-f] | Qualquer caractere hexadecimal               | "1", "A", "d"               |
| [^0-9]      | Qualquer caractere que não seja um dígito    | "a", "B", "!"               |
| [aeiou]     | Qualquer vogal minúscula                     | "a", "e", "o"               |
| [^aeiou]    | Qualquer caractere que não seja uma vogal    | "b", "z", "1"               |
| [?/’ *barra vertical*]       | Caracteres literais                          | "/", " ?", “‘”, *barra vertical*         |

A definição de classes de caracteres permite também a representação de caracteres especiais como literais. Com exceção de alguns caracteres especiais, como os da tabela a seguir:
| Caractere | Descrição                                                                                         |
|-----------|---------------------------------------------------------------------------------------------------|
| -         | Hífen usado para definir intervalos de caracteres. Pode ser escapado com \ para ser tratado como um literal. |
| ]         | Colchete de fechamento usado para marcar o fim de uma classe de caracteres. Pode ser escapado com \ para ser tratado como um literal. |
| ^         | Circunflexo usado para negar uma classe de caracteres quando colocado no início de [ ]. Dentro de [ ], é tratado como um literal. |
| \         | Barra invertida usada para escapar caracteres especiais dentro de [ ] para que sejam tratados como literais. |

### Shorthands
Shorthands são atalhos para definir classes de caracteres comuns.
| Regex | Descrição                             | Correspondência          |
|-------|---------------------------------------|--------------------------|
| \d    | Qualquer dígito decimal               | "0", "7", "9"            |
| \D    | Qualquer caractere que não seja um dígito | "a", "B", "!"         |
| \w    | Qualquer caractere alfanumérico       | "A", "b", "0"            |
| \W    | Qualquer caractere que não seja alfanumérico | "!", "@", " "       |
| \s    | Qualquer caractere de espaço em branco | " ", "\t", "\n"       |
| \S    | Qualquer caractere que não seja espaço em branco | "a", "B", "9"   |


### Escapes
Em alguns momentos você pode precisar utilizar caracteres especiais como literais, como o colchete de definição de classes. Para isso utilizamos o escape, a barra invertida, vamos analisar alguns exemplos na tabela:

| Regex | Descrição                             | Correspondência |
|-------|---------------------------------------|-----------------|
| \[    | Colchete de abertura [ literal        | "["             |
| \]    | Colchete de fechamento ] literal      | "]"             |
| \.    | Ponto . literal                       | "."             |
| \+    | Sinal de adição + literal             | "+"             |
| \\\\  | Escape \ literal                      | '\\'            |

### Greedy e Lazy
Greediness para Correspondências Longas: O comportamento ganancioso é útil quando você deseja encontrar a correspondência mais longa possível em uma sequência. Por exemplo, ao extrair conteúdo entre tags HTML, você pode usar <.*> para corresponder a todo o conteúdo entre a primeira tag < e a última tag >, mesmo que haja várias tags no meio.

Laziness para Correspondências Curtas: O comportamento não ganancioso é útil quando você deseja encontrar correspondências mais curtas em uma sequência. Isso é especialmente útil ao extrair conteúdo entre tags HTML individualmente. Usando <.*?>, você corresponderá ao conteúdo entre a primeira tag < e a primeira tag >, e depois entre a segunda tag < e a segunda tag >, e assim por diante.

| Quantificador | Descrição                                          | Exemplo                                  |
|---------------|----------------------------------------------------|------------------------------------------|
| * (greedy)    | Corresponde a 0 ou mais ocorrências (ganancioso). | a.*b corresponde a "aabab" em "aabab" (correspondência mais longa possível). |
| *? (lazy)     | Corresponde a 0 ou mais ocorrências (não ganancioso). | a.*?b corresponde a "aab" em "aabab" (correspondência mais curta possível). |
| + (greedy)    | Corresponde a 1 ou mais ocorrências (ganancioso). | a.+b corresponde a "aabab" em "aabab" (correspondência mais longa possível). |
| +? (lazy)     | Corresponde a 1 ou mais ocorrências (não ganancioso). | a.+?b corresponde a "aab" em "aabab" (correspondência mais curta possível). |
| ? (greedy)    | Corresponde a 0 ou 1 ocorrência (ganancioso).      | a.?b corresponde a "ab" em "aab" (correspondência mais longa possível). |
| ?? (lazy)     | Corresponde a 0 ou 1 ocorrência (não ganancioso).  | a.??b corresponde a "ab" em "aab" (correspondência mais curta possível). |
| {n,m} (greedy)| Corresponde a pelo menos n e no máximo m ocorrências (ganancioso). | a{2,3} corresponde a "aaa" em "aaaa" (correspondência mais longa possível). |
| {n,m}? (lazy) | Corresponde a pelo menos n e no máximo m ocorrências (não ganancioso). | a{2,3}? corresponde a "aa" em "aaaa" (correspondência mais curta possível). |
