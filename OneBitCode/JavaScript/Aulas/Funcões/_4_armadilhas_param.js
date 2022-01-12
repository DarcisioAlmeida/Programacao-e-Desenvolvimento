/*
    Armadilhas dos Parametros, Cuidado!
        1. função sem parametro - caso não seja declarado ele ficará como undefined
        2. Ordem dos parametros
*/

// 1. não declarado
    function greetPilot(name, message = "Olá") {
        console.log(message + ", " + name)
    }
    greetPilot() // define o name como (undefined) pois foi declarado a message padrao mas nao declarado o name.

// 2. ordem dos parametros

    function speedUp(velocity, unit = "km/s", acceleration) {
        let newVelocity = velocity + acceleration
        console.log("Nova velocidade: " + newVelocity + unit)
    }
    speedUp(50, "mi/s", 20) // substituiu unit
    speedUp(50, 20) // neste caso ele entende  que 50 vai pra velocity e 20 para unit e nada para acceleration

    /* Forma correta para declarar a linha da function
        function speedUp(velocity, acceleration, unit = "km/s") 
            declarar o parametro colocando unit no final
            evita erro speedUP (linha 20)
            ordem interfere na leitura da função pelo JS
    */ 