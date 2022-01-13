/*
    Evento para Formulário - 
        Submit
*/
// o envento onsubmit() do HTML por padrao recarrega a página e vc não ve o resultado quando envia o formulario
// para evitar isso o event.prevenDefault() - impede que ele realize o carregamento da página.
function save() {
    //Event.preventDefault() // não foi necessário usar
    let name = document.querySelector("input[name='name']").value
    let programmingLang = document.querySelector("select[name='programming-lang']").value

    alert("Nome: " + name + "\nLinguagem de Programação: " + programmingLang)
}