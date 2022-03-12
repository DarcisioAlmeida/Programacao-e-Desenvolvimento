/*
    # Manipulando os Conteudo com DOM #
    
    # Qual usar
        // getElementById (element) - pega pela ID
        // getElementsByClassName (HTMLCollection) - pega pela Classe
        // getElementsByTagName(HTMLCollection) - pega pela Tag
        // querySelector (element) - pega pelo seletor Css apenas 1
        // querySelectorAll (Nodelist) permite fazer um foretch - pega todos os seletores

*/
/* Ver no console do browser */
    // getElementByID
        const element = document.getElementById('my-title')
        console.log(element)

    // getElementsByClassName()
        const outroElement = document.getElementsByClassName('one');
        console.log(outroElement)

    // getElementsByTagName
        const novoElement = document.getElementsByTagName('h3');
        console.log(novoElement)

    // querySelector()
        const proElement = document.querySelector('.one')
        console.log(proElement)

    // querySelectorAll()
    const textElement = document.querySelectorAll('.one')
    console.log(textElement)