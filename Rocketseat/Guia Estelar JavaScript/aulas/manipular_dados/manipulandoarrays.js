// Manipulando arrays

/*
    // criando array
    let myArray = ['a', 'b', 'c']
    console.log(myArray)
*/

// criando array com constructor
    let myArray = new Array('a', 'b', 'c')
    console.log(myArray)

// contar elementos de um array
    console.log(['a', 'b', 'c'].length)

// strings para arrays
// transformar uma cadeia de caracteres em elementos de um array
    let word = "manipulação"
    console.log(Array.from(word)) // from transformou cada caracter em um elemento de array - m a n i p u l a c a o

// Manipulando Arrays

    let techs = ["html", "css", "js"]
    
    // adicionar um item no fim
    techs.push("nodejs")

    //adicionar item no começo
    techs.unshift("SQL")

    //remover do fim
    techs.pop()

    //remover do começo
    techs.shift()

    //pegar somente alguns elementos do array
    //console.log(techs.slice(1,3))

    //remover 1 ou mais itens em qualquer posição do array
    //console.log(techs.splice(1,2))

    // encontrar a posição de um elemento array
    let index = techs.indexOf('css')
    console.log(index)

    