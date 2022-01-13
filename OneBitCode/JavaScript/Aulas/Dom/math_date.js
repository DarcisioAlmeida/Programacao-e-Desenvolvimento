/*
    # Math e Date
        * São classes nativas do JS
            Math - operações matematicas 
            Date - manipulação de dados - data
*/
// Math
console.log(Math.pow(5,3)) // potenciação // math classe nativa / pow - metodo estatico
console.log(Math.PI) // calculo do PI
console.log(Math.sqrt(64)) // raiz quadradra

// Date
let myBirthday = new Date(2019, 3, 29)
console.log(myBirthday) // tras informação de abril - lembre que é declarado igual a array começa por 0

myBirthday = new Date(2020, 0, 1) // correponde a Janeiro de 2020
console.log(myBirthday)

// Para conhecimento
let today = Date.now() // retorna data de agora em milisegundos desde 01.01.1970 fundação do JS
console.log(today)

