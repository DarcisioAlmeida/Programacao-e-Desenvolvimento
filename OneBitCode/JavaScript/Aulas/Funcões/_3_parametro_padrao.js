/*
    Parametro Padrão
        Usado para definir um padrao ao parametro especifico
        Caso não seja informado nenhum parametro ele que será utilizado
*/

function greetPilot(name, message = "Olá Piloto!") {
    console.log(message + " " + name)
}
greetPilot("John Mars")  // pegando o valor padrao informado em message

greetPilot("John Mars", "Seja bem-vindo a nave!") // informando um parametro ele substitui o padrao