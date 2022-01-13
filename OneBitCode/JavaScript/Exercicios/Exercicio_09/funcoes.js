/*
    Exercitando as funções

        - Vamos criar um programa de bordo para nossa nave que receba o nome da nave
        - A Velocidade da nave deve ser inicialmente 0 e um menu deve ser exibido para que o usuario escolha entre as seguintes opções:
            1. Acelerar a nave em 5km/s.
            2. Desacelerar em 5km/s.
                Por mais que desacelere a nave nao pode ter uma velocidade menor que 0km/s.
            3. Imprimir dados de bordo
                deve ser impresso o nome da nave com sua velocidade atual
            4. Sair do programa
        - Caso a pessoa escolha um numero que nao esta na lista, é necessário exibir o menu novamente até que seja escolhida uma opção valida.
            Para fazer este app precisaremos:
                1. Criar uma função que exiba o menu e valide a opção escolhida
                2. Uma função para cada ação do menu acelerar, desacelerar e imprimir dados de bordo.
                3. Encerrar o app somente quando digitar sair
*/

let spaceshipName = prompt("Digite o nome da nave") // nome nave

let spaceshipVelocity = 0 // velocidade = 0

let chosenOption 

// Definindo menu opção usuario - garante que vai ser retornado umas das opções definidas
    function showMenu() {
        let option //undefined
        while(option != "1" && option != "2" && option != "3" && option != "4") {
            option = prompt("O que deseja fazer?\n" +
                            "1- Acelerar a nave em 5km/s\n" +
                            "2- Desacelerar a nave em 5km/s\n" +
                            "3- Imprimir dados de bordo\n" +
                            "4- Sair de programa")
        }
        return option
    }

//funcao acelerar 
    function speedUp(velocity) {
        let newVelocity = velocity + 5
        return newVelocity
    }

//funcao desacelerar
    function slowDown(velocity) {
        let newVelocity = velocity - 5
        if(newVelocity < 0) {
            newVelocity = 0
        }
        return newVelocity
    }

//funcao imprimir dados de bordo
    function printSpaceshipBoardData(name, velocity) {
        alert("Espaçonave: " + name + "\nVelocidade: " + velocity + "km/s")
    }

do {
    chosenOption = showMenu()
    switch(chosenOption) {
        case "1":
            spaceshipVelocity = speedUp(spaceshipVelocity) // chama funcao acelerar
            break
        case "2":
            spaceshipVelocity = slowDown(spaceshipVelocity) // chama a funcao desacelerar
            break
        case "3":
            printSpaceshipBoardData(spaceshipName, spaceshipVelocity) // chama funcao imprimir dados
            break
        default:
            alert("Encerrando programa de bordo") 
    }
} while(chosenOption != "4")



