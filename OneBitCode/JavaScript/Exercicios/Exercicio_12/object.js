/*
    Praticando Objetos
        * Faremos um aplicativo que fará o mapeamento de velocidade de uma espaçonave.
        * Vamos cadastrar uma espaçonave com seu nome, tipo e a velocidade máxima que esta nave pode atingir para que nao entre em combustão.
        * 1. Nave deve partir da velocidade 0 km/s.
        * 2. Menu deve ser exibido para o usuario perguntando se ele quer acelerar ou parar a nave.
            # Se ele quiser parar, uma mensagem deve ser exibida com as caracteristicas da nave (nome e tipo) e em que velocidade ele estava.
            # Se ele quiser acelerar, deve ser exibido um prompt para que ele se informe quanto ele quer acelerar e este valor será incrementado na velocodade.
        * 3. Quando a velocidade for incrementada deve-se fazer uma verificação para ver a espaçonave está acima da velocidade maxima.
    Para resolver este problema: 
        - Exibir um prompt para:  o nome da Nave; tipo da nave, velocidade máxima, perguntar se o usuario quer acelerar ou parar.
        - Se ele quiser parar exibir a mensagem final:
            * Se quiser acelerar, precisamos de um prompt para que usuario informe o quanto quer acelerar 
            * Exibir uma mensagem de alerta quando a velocidade maxima for atingida.
        - Criar um objeto para a nave
*/

let spaceship = {
    velocity: 0,
    speedUp: function(acceleration) {
        this.velocity += acceleration
    }
}

function registerSpaceship() {
    spaceship.name = prompt("Informe o nome da nave")
    spaceship.type = prompt("Informe o tipo da nave")
    spaceship.maxVelocity = Number(prompt("Informe a velocidade maxíma da nave (km/s)"))  // Number - transforma o numero digitado pelo usuario em numeros
}

function acelerate() {
    let acceleration = Number(prompt("Quanto você quer acelerar? (km/s)"))
    spaceship.speedUp(acceleration)
    if(spaceship.velocity > spaceship.maxVelocity) {
        alert(  "VELOCIDADE MÁXIMA ULTRAPASSADA!" +
                "\nVelocidade da Nave: " + spaceship.velocity + "km/s" + 
                "\nVelocidade máxima da Nave: " + spaceship.maxVelocity + "km/s")
    }
}

function stop() {
    alert(  "Nome: " + spaceship.name + "\nTipo: " + spaceship.type + "\nVelocidade da nave: " 
            + spaceship.velocity + "\nMáxima da Nave: " + spaceship.maxVelocity)
    spaceship.velocity = 0
}

function showMenu() {
    let chosenOption
    do {
        chosenOption = prompt("Você deseja:\n1- Acelerar\n2- Parar")
        switch(chosenOption) {
            case "1":
                acelerate()
                break
            case "2":
                stop()
                break
            default:
                alert("Opção inválida")
        }
    } while(chosenOption != "2")
}

registerSpaceship()
showMenu()