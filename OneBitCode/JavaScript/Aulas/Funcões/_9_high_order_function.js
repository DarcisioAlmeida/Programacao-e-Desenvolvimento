/*
    High Order Function

        1. HOF - High Order Function significa : Função de Alta Classe
        2. São funções que recebem ou retornam outras funções
        3. As funções que uma HOF recebem geralmente são anonimas
            - Podendo ser uma Arrow Function ou não
        4. A função que é enviada como parametro de uma HOF é chamada ( callback )
*/

function doubleVelocity(velocity, printer) {
    console.log("Entrei em double Velocity")
    let newVelocity = velocity * 2
    printer(newVelocity)
    return newVelocity
}

let printVelocity = velocity => {
    console.log("Nova velocidade " + velocity + "km/s.")
}

let newVelocity = doubleVelocity(60, printVelocity)
console.log(newVelocity)

