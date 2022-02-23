/*
    # Variaveis

    * Nomes simbolicos para receber algum valor
    * Atalhos de códigos
    * Identificadores 
    * 3 palavras reservadas para criar auma variável
        - var
        - let
        - const
*/
/*
    # Para criar nomes

    * JS é case sensitive 
    * Js aceita cadeia de caracteres Unicode

    - Posso:    
        * Iniciar com esses caracteres especiais: $ _
        * Iniciar com letras 
        * Colocar acentos
        * Letras maiúsculas e minusculas fazem diferença

    - Não posso
        * Iniciar com numeros
        * Colocar espaços vazios no nome
        
    - Ideal e Recomendado
        * Criar nomes que fazem sentido 
        * Nomes que explique o que a variável é ou faz
        * camelCase - começa tudo em minusculo depois cada nova palavra começa com primeira letra em maiusculo
        * snake_case - entre as palavras usar o undeline(_)
        * Escrever em inglês
*/

// var 
    var clima = "quente"
    console.log(clima)
    clima = "Frio"
    console.log(clima)
// let - semelhante a var mas tem caracterisca de funcionar em scopo local
    let tempo = "chuvoso"
    console.log(tempo)
    tempo = "ensolarado"
    console.log(tempo)
// const - não permite alteração de seu conteudo
    const estacoes = "verao"
    console.log(estacoes)
    estacoes = "inverno" 
    console.log(estacoes) // erro nao permite alterar uma constante
