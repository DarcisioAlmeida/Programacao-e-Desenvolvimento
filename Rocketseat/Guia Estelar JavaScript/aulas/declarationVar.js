// Variaveis e tipode de dados
// Declaração or declaration

var nome

    // assignment or atibuioção de valores

nome = "mike"

console.log( typeof nome)
console.log(nome)

let age = 20
let isHuman = true

/* // agrupamento de valores na declaração
    let age, isHuman

    age = 20
    isHuman = true
*/

// multiplos argumentos na função
    console.log(nome, age, isHuman) 

// concatenando valores // escrita + variável
    console.log('O ' + nome + ' tem ' + age + ' anos, isso é verdade? ' + isHuman)

// interpolando valores com tamplete literal or template strings
    console.log(`o ${nome} tem ${age} anos. `) // uso de crase


// OBJECT

    const person = {
        name: 'John',
        age: 30,
        weight: 88.6,
        isAdmin: true
    }
    console.log(`${person.name} tem ${person.age} anos`) // pegar nome do objeto apenas coloque variavel . nome do objeto

// ARRAY

    const animals = [
        'Lion',
        'Monkey',
        'Cat',
    ]
    //acessar valores
    console.log(animals[0]) //pega o valor do array por posição