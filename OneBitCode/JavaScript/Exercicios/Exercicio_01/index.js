/*
    Pegando dados de usuario

    1. Exiba um alerta a seguinte mensagem de boas vindas ao usuario
        Bem-vindo! A Seguir pediremos que informe alguns dados

    2. Peça ao usuario informar seu nome
    3. Peça que usuario informe sua idade
    4. Peça que ele confirme sua idade
    5. Exiba um alerta:
        - nome do usuario digitado
        - a idade digitada
        - a confirmação da idade

*/

alert("Bem-vindo! A Seguir pediremos que informe alguns dados.")

let name = prompt ("Informe qual é o seu nome?")

let id = prompt ("Informe sua idade")

let idConfirmation = confirm("Você tem " + id + " anos")

alert("O Seu nome é " + name + ", você tem " + id + " anos! " + " Você confirma " + idConfirmation)