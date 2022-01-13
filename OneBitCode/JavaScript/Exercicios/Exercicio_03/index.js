/*
    Utilizando JS eXterno
        1. Crie um arquivo JS e o importe no seu arquivo HTML
            este será utilizado para informar a diferença de idade de duas pessoas
        2. Pedir o nome da pessoa mais velha
        3. Pedir a idade da pessoa mais velha
        4. Pedir o nome da pessoa mais nova
        5. Pedir a idade da pessoa mais nova
        6. Calcular a diferença de idade
        7. Exibir o nome da pessoa mais velha e sua idade
        8. Exibir o nome da pessoa mais nova e sua idade
        9. Exibir a diferença de idade 
*/

let olderPersonName = prompt("Qual é o nome da pessoa mais velha?")
let olderPersonAge = prompt("Informe a idade da pessoa mais velha!")


let yougerPersonName = prompt("Qual é o nome da pessoa mais nova?")
let youngerPersonAge = prompt("Informe a idade da pessoa mais nova!")

let ageDifference = olderPersonAge - youngerPersonAge

alert(
    " Pessoa mais velha: " + olderPersonName + "\nIdade: " + olderPersonAge + " anos " + "\n\n Pessoa mais nova: " + yougerPersonName + "\nIdade: " + youngerPersonAge + " anos " + "\n\n Diferença de Idade: " + ageDifference + " anos"
)