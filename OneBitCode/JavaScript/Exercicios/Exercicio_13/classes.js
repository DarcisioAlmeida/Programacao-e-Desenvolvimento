/*
    # Praticando Classes #

    O codigo deve ser em arquivo separado e importado em uma página HTML

        - Temos uma estação espacial que tem uma lista de naves engatadas.
        - Cada nave possui nome, quantidade de tripulantes, uma informação se está ou não engatada e outra informando se as portas de entrada estao abertas.
        - Para gerenciar esses dados, um menu deve ser exibido com as opções:
            1. Realizar engate
                * Nesta opção deve ser possível cadastrar uma nave com nome e número de tripulantes.
                * Após o cadastro, a nave pode ser engatada. Quando uma nave é engatada, suas portas também são abertas. Então, além alterar a propriedade da nave que informa se ela está engatada, altere também a propriedade que informa se as portas de entrada estão abertas.
            2. Imprimir naves 
                * a lista de naves deve ser impressa com um alert
            3. Sair do Programa
                * Ao clicar para sair o programa é encerrado.

    Para o Exercicio: 
        * Crie apenas a classe para espaconave
            - esta classe deve ter o metodo para engatar a nave
        * Criar um array para armazenar as espaçonaves
        * O programa deve ser encerrado somente quando o usuario digitar a opção sair.
            - Caso o usuario escolha uma opção invalida, mostre o menu novamente.        
*/
// criando a classe 
class Spaceship {
    constructor(name, crewQuantity) {
        this.name = name
        this.crewQuantity = crewQuantity
        this.isHitched = false // informe se a nave esta engatada
        this.entraceDoorsOpen = false // informa se porta esta aberta
    }
    hitch() {
        this.isHitched = true // quando a nave for engatada
        this.entraceDoorsOpen = true // quando porta for aberta
    }
}
// criando menu de opções
function showMenu() {
    let chosenOption
    while(chosenOption != "1" && chosenOption != "2" && chosenOption != "3") {
        chosenOption = prompt(  "O que deseja fazer?\n" +
                                "1- Engatar nave\n" +
                                "2- Imprimir naves\n" +
                                "3- Sair do programa")
    }
    return chosenOption
}
// criando opções de nome e tripulantes e adicionando a classe
function createSpaceship() {
    let spaceshipName = prompt("Informe o nome da nave")
    let crewQuantity = prompt("Informe a quantidade de tripulantes")
    let spaceship = new Spaceship(spaceshipName, crewQuantity)
    return spaceship
}
// criando funçao apresenta e armazena lista
function printSpaceshipList(spaceships) {
    let spaceshipList = ""
    spaceships.forEach((spaceship, index) => {
        spaceshipList += (index + 1) + "- " + spaceship.name + " (" + spaceship.crewQuantity + " tripulantes)\n"
    })
    alert(spaceshipList)
}
// lista de espaçonaves 
let hitchedSpaceships = []
let chosenOption // este let não e o mesmo da funçao showMenu acima - este esta em scopo global

while(chosenOption != "3") {
    chosenOption = showMenu()
    switch(chosenOption) {
        case "1":
            let spaceshipToAdd = createSpaceship()
            spaceshipToAdd.hitch()
            hitchedSpaceships.push(spaceshipToAdd)
            break
        case "2":
            printSpaceshipList(hitchedSpaceships)
            break
    }
}