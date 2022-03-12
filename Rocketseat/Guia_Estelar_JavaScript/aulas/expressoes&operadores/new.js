
/* 
    new
        * left-hand-side-expression
        * criar um novo objeto
*/

// New 
    let name = new String('Darcisio')
    name.surName = 'Almeida'
    let age = new Number(45)
    console.log(name.surName, age)

/*
    Operadores Unários
    typeof
    delete
*/
    console.log(typeof "Darcisio")

    const person = {
        name: 'Maik',
        age: 25,
    }
    delete person.age //delete pega a propriedade escolhida e deleta
    console.log(person)