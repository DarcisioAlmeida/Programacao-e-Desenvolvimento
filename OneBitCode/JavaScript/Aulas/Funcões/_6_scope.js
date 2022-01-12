/*
    Scope
        var - funcional tanto como scope global como local - depende de como declarado dentro da função
        let - dentro da função funcional apenas como scope local
        let - fora da função funciona como scopo global 

*/

// let - fora da função - 
    //scopo global - pode ser acessada de qualquer lugar
        let spaceshipName = "Supernova"

        function changeSpaceshipName() {
            spaceshipName = "Elemental"
        }

        console.log(spaceshipName) // inicia e ele pega o nome "Supernova"

        changeSpaceshipName()

        console.log(spaceshipName) // após a chamada função ele trocou o nome para "Elemental"

// let - dentro da função - 
    /*  quando acionado o console.log 
        ele le a variavel let como scopo global
        porém a varivel let foi declarada em scopo local
        ele considera com indefinida
        neste caso let somente pode ser acessada dentro da funçao
    */

    function startSpacheshipVelocity() {
        let spaceshipVelocity = 0
    }

    startSpacheshipVelocity()
    console.log(spaceshipVelocity) // nao encontra let pois ela esta dentro de scopo local

