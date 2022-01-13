/* 
    Utilizando o While
            Vamos simular o sistema de navegação de uma nave interagindo com usuario
        Para este problema precisamos:
            1. Pedir nome da navegação
            2. Perguntar se ele deseja entrar em dobra com a seguinte mensagem: 
                Deseja realizar a proxíma dobra? 
                    1. Sim
                    2. Não
                Resposta sim, contabilizar uma dobra
            3. Usuario deve ser perguntado se deseja realizar outra dobra
                Deseja realizar a proxíma dobra? 
                    1. Sim
                    2. Não
                Resposta sim, vamos contabilizar mais uma dobra
            4. A pergunta deve ser feita novamente, até que a resposta seja "NÃO"
            5. Ao escolher "NÃO" em qualquer pergunta o programa encerra.
            6. Final o programa deve informar o nome da nave e o numero de dobras realizadas.
*/
let warpCount = 0
let chosenOption = "" 

let spaceship = prompt("Informe o nome de sua nave")

chosenOption = prompt("Deseja entrar em dobra espacial? \n1- Sim \n2- Não")

while(chosenOption == "1"){
    warpCount += 1
    chosenOption = prompt("Deseja realizar a proxíma dobra?  \n1- Sim \n2- Não")
}

alert("Nave: " + spaceship + "\nQuantidade de dobras: " + warpCount)