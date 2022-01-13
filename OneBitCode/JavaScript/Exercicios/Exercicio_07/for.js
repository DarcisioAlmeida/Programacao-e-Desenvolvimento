/*
    Utilizando o For
        Vamos connstruir um ocultador de nome
        Ele deve percorrer o nome de uma nave e substituir uma letra que o usuario desejar
    Para este problema precisamos:
        1. Solicitar o nome da spaçonave
        2. Perguntar o caractere que ele deseja substituir
        3. Perguntar por qual caractere ele deseja substituir
        4. Utilizar o For para resolver este problema
        5. Para cada caractere igual ao informado, substituir pelo novo 
        6. Exibir um alerta com o novo nome da nave
            O novo nove da nave é <nome da nave>
*/

let spaceship = prompt('Qual é o nome de sua espaço nave')
let charToReplace = prompt('Qual caractere você quer substituir?')
let replacementChar = prompt('Por qual caractere você quer substituir?')

let newSpaceship = ""

for (let pos = 0; pos < spaceship.length; pos ++ ) {
    if (spaceship[pos] == charToReplace) {
        newSpaceship += replacementChar
    } else {
        newSpaceship += spaceship[pos]
    }
}
console.log(newSpaceship)

alert("O novo nome da nave é " + newSpaceship)