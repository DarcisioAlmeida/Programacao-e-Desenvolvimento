/*
    Revisando as repetições
        Vamos fazer um codio que oculte o nome da nave, mas desta invertendo-o, e que seja sensicel a letra e.

    Para ete problema vamos:
        1. solicitar o nome da espaçonave
        2. Utilizar uma estrutura de repetição para inverter o nome da nave
            devendo percorrer a nave do ultimo caracter para o primeiro
        3. Durante a inversão procurar pelo caracter proibido
        4. caso encontre a inversão deve ser parado onde estiver 
        5. o nome invertido deve ser impresso
            mesmo que nao esteja completo por ter encontrado o caracter proibido
        6. Exibir um alerta com o nome da nave
        7. Imprimir um alerta com a seguinte mensagem
            - nome original da nave
            - nome após ocultação
*/

let spaceshipName = prompt("Qual é o nome da nave?")

let invertedName = ""

for(let i = spaceshipName.length - 1; i >= 0; i--) {
    if(spaceshipName[i] == "e") {
        break
    }
    invertedName += spaceshipName[i]
}

alert("Nome original da nave: " + spaceshipName + "\nNome após ocultação: " + invertedName)

// S u p e r n o v a 
// 0 1 2 3 4 5 6 7 8

    
