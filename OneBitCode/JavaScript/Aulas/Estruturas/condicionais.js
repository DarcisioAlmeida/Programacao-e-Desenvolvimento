// CONDICIONAIS //

/*
let velocity = 110

if(velocity < 100){
    console.log("Estamos numa velocidade aceitavel") 
} else {
    console.log("Entrando em velocidade de risco") 
}
*/
let velocity = 110

if(velocity <= 40){
    console.log("Estamos numa velocidade aceitavel") 
} else if(velocity > 40 && velocity < 80) {
    console.log("Entrando em velocidade de risco") 
} else if (velocity >= 80 && velocity < 100) {
    console.log("Velocidade de Risco")
} else {
    console.log("Você é louco!")
}

// OPERADOR TERNARIO - //
// Estrutura de If e Else em apenas uma linha - 
// Recomendado apenas se for em uma linha
// Operador Ternario executa o comado após interrogação e o que for Verdadeiro ele tras.

(velocity > 100) ? console.log("Velocidade maior que 100") : console.log("Velocidade menor que 100")