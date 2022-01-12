/*
    Funções Anonimas - Erro
        Neste contexto ela funciona (let e var) seguindos suas relações ao scopo local e global
        Sempre vai chamar primeiro a function independente de onde ela esteja, como no caso abaixo.

*/

console.log(speedUp(60, 10)) // leu a função e retornou o resultado
console.log(doubledSpeed(50)) // nao leu a função pois entende que a let nao foi declarada e não esta reconhecida

// neste caso let é função anonima - nao declarada
let doubledSpeed = function(velocity) { 
    return velocity * 2
}
//console.log(doubledSpeed(50)) assim funciona

// neste caso a função foi declarada
function speedUp(velocity, acceleration) { 
    return velocity + acceleration
}