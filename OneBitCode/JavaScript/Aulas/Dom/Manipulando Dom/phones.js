/* 
    # Manipulando Dom
        - manipular arvore Dom
        - clonando elementos
        - alterando algumas propriedades
        - inserindo no Dom
*/

/*
    A cada click vai cria novo campo telefone com novo numero
        1. pega formulario - const phoneForm
        2. Clonar primeiro filho newPhone 
        3. Pegar posição do filho e soma + 1
        4. colocar novo texto para label
        5. acrescentar novo elemento ao Dom - phoneForm - clona e acrescenta
        6. mostra os filhos adicionados
*/

function addNewPhone() {
    const phoneForm = document.querySelector("form#phones")
    const newPhone = phoneForm.children[0].cloneNode(true) // (true) pega filho e todos outros filhos- (false) pega apenas filho direto
    const phonePosition = phoneForm.children.length + 1
    newPhone.querySelector("label").innerText = "Telefone " + phonePosition + ":"
    phoneForm.appendChild(newPhone)
    console.log(phoneForm.children)
}

function printPhones() {
    let message = ""
    const phones = document.querySelectorAll("input[name='phone']")
    phones.forEach((phone, index)=> {
        message += "Telefone " + (index + 1) + ": " + phone.value + "\n"
    })
    alert(message)
}