/*
    Se aprofundando nas Funções

        Vamos simular o computador de bordo de uma espaçonave no momento em que ela inicia a parada até abrir as comportas para os pilotos saírem

            1. Considere que a nave esta a 150km/s.
            2. Crie uma função para desacelerar 20km/s a cada segundo
                - Considere, no codigo, que cada interação de um laço de repetição é 1 segundo
            3. Esta função será um HOF e também deve imprimir cada atualização que houver na velocidade da nave
                - Esta impressão deve ser feita por meio de callback que essa função receberá
            4. Ao final exiba uma mensagem informando que a nave esta parada e as comportas podem ser abertas.
*/

function slowDown(velocity, printer) {
    let deceleration = 20

    while(velocity > 0) {
        printer(velocity) // recebeu 150 da velocity
        velocity -= deceleration // 150 - 20 = 130 / roda o loop 130 -20 = 110 e assim até chegar em menor que 0 
    }

    console.log("Nave parada. As comportas podem ser abertas.")
}

let spaceshipVelocity = 150 // 150 vai para parametro velocity da função

slowDown(spaceshipVelocity, function(velocity) {
    console.log("Velocidade atual: " + velocity)
})


//function(velocity) é a função printer
