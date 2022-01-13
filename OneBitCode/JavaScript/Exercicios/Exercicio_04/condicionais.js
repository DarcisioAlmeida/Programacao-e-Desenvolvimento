/*
    Utilizando Condicionais

        Neste exercicio vamos simular o sistema de navagação de uma nave interagiondo com usuario.
        O sistema deve fazer o seguinte:
            1. Perguntar o nome do piloto
            2. Colocar a velocidade inicial da nave como 0
            3. Perguntar a que velocidade ele gostaria de acelerar a nave
            4. Pedir uma confirmação informando que está indo para velocidade X km/s.
            5. Exibir uma das seguintes mensagens com a base na velocidade escolhida:
                * Se for menor que 0 km/s. "Nave esta parada. Considere partir e aumentar velocidade "
                * Se for menor que 40 km/s. "Você está devagar, podemos aumentar mais"
                * Se for maior ou igual a 40 km/s ou menor a 80 km/s. "Parece uma boa velocidade para manter"
                * Se for maior ou igual a 80 km/s ou menor a 100 km/s. "Velocidade alta. Considere diminuir"
                * Se for maior ou igual a 100 km/s.  "Velocidade perigosa. Controle automatico forçado"
                
            6. Imprimir no final o noem do piloto e sua velocidade atual

*/

let namePilot = prompt ("Qual é o seu nome, piloto?")
let nave = 0
let velocity = prompt (" A que velocidade você quer acelerar a nave?")

console.log = confirm("A nave esta indo há " + velocity + "km/s. Você confirma?")

if (velocity < 0 ) {
 console.log = alert("Nave esta parada. Considere partir e aumentar velocidade")
} else if (velocity > 0 && velocity < 40) {
    console.log = alert("Você está devagar, podemos aumentar mais")
} else if (velocity > 40 && velocity < 80) {
    console.log = alert("Parece uma boa velocidade para manter")
} else if (velocity > 80 && velocity < 100) {
    console.log = alert("Velocidade alta. Considere diminuir")
} else {
    console.log = alert("Velocidade perigosa. Controle automatico forçado")
}

console.log = alert (" Sr " + namePilot + " sua velocidade atual é " + velocity + "km/s.")