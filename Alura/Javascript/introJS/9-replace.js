// Substituindo palavras com String replace //

/* 
  Caso tenhamos interesse de manipular um CPF por exemplo, podemos pegar o valor do CPF puro, e falarmos que queremos convertê-lo para a sua versão amigável para o usuário: 
  A função .replace recebe como parâmetros o padrão que estamos procurando e como segundo parâmetro o que queremos colocar no lugar
*/
// Exemplo 1 //
  const CPFSemFormatacao = 'cpf é 25684677037'
  const CPFFormatado = CPFSemFormatacao.replace('25684677037', '256.846.770-37') 
  console.log(CPFFormatado) 
    // O retorno será 'cpf é 256.846.770-37'

// Exemplo 2 //
  const frase = 'Frase com uma palavra-feia'
  frase.replace('palavra-feia', '********') 
  console.log(frase) // O retorno seria 'Frase com uma ********')

// Substituindo todas as ocorrências com o apoio das Regex //

/*
  A ideia anterior de excluir palavras de um texto funciona super bem, mas se a palavra aparecer duas vezes no texto, começaremos a ter problemas:
  Para resolver nosso problema anterior, basta trocarmos o primeiro parâmetro passado para o replace de 'palavra-feia' para /palavra-feia/g. O g no final da regex indica que queremos buscar de forma global no texto base. 
*/
// Exemplo 3 //
  const frase2 = 'Frase com uma palavra-feia e tem outra palavra-feia no final'
  const fraseAtualizada = frase2.replace('palavra-feia', '********') 
  console.log(fraseAtualizada) // O retorno seria "Frase com uma ******** e tem outra palavra-feia no final"

  const frase3 = 'Frase que começa com um palavra-feia e tem outra palavra-feia no final'
  const fraseAtualizada3 = frase3.replace(/palavra-feia/, '********') 
  console.log(fraseAtualizada3) // "Frase que começa com um ******** e tem outra ******** no final"

// Regex: expressões regulares //
/*
  Muitos desenvolvedores, quando precisam trabalhar com Regex (regular expressions), costumam pensar "Eu sempre aprendo quando vou usar e esqueço logo em seguida". No dia a dia realmente na maioria dos casos nós não usamos Regex e se formos utilizar talvez valha mais a pena uma lib de validação como a Yup ou Joi.
  As Regex procuram padrões, a forma mais direta é escrever a própria palavra que você deseja encontrar:

/palavra/

o mesmo funciona para números:

/12345679810/

Porém, se você quiser algo mais abrangente com caracteres especiais e tudo mais, onde a ordem não importe, será necessário definir um range de caracteres:

[A-Z0-9!-]

E ainda no exemplo anterior, para pegar mais de um caracter é necessário declarar quantas ocorrências você procura:

[A-Z0-9!-]{3}

Também é possível simplificar, para capturar somente caracteres alfa numéricos você pode usar:

\w

Já para capturar caracteres referentes a digitos você pode usar:

\d

E caso você queira capturar grupos dentro de um match de regex para poder trabalhar melhor como veremos nos próximos exemplos, podemos utilizar os parenteses:

(\d{4})-(\d{4})

Existem outros casos como utilizar a "?" para alguma parte da regex ser opcional, os marcadores de começo "^" e fim "$", mas isso tudo renderia uma série de posts ou mesmo um curso.
*/