/*
    Enviando (get) Dom (object) para Função
*/
// input chama a função através da ref. no html passando o parametro (this)
// para receber colocar-se (element) 
    function sayMyFirstName(element) {
        alert("Meu primeiro nome é " + element.value)
    }
// outra forma (event) // armazena eventos // target= armazena de qual elemento foi chamado. 
function sayMyLastName() {
    console.log(event)
    alert("Meu sobrenome é " + event.target.value)
} 