/*
    # Manipulando os conteudos com uso de Dom #

        // textContent - subsituti textos ou adiciona
        // innerText - troca o texto interno do elemento html
        // innerHTML - trocar conteudo interno do html e acrescenta conteudo html no elemento
        // value - manipular valores de inputs
        // Atributos:
            * setAttribute - adiciona atributo a tag
            * removeAttribute - remove atributos da tag

    # Manipulando Estilos e Classes # 

        // style - insere estilo em qualquer propriedade no CSS
        // classList - alterar estilos 
            * add - classList.add - adiciona
            * remove - classList.remove - remove
            * Toggle - classlist.toogle - 
                {  - se a classe exixtir ele remove
                    -se nao existir ele adiciona
                }

    # Navegando pelo Elementos #
        // parentNode - pegando elementos Pai
        // childeNodes ou children - pega todos elementos filhos
        // firstChild ou firstElementChild - pega primeiro filho
        // lasChild ou lastElementChild - pega ultimo filho  
        // nextSibling ou nextElementSibling - pega elementos irmãos proximo
        // previsiousSibling ou previsiousElementSibling - pega elemento irmao antes 

    # Criando Elementos #
        // append - cria depois do elemento escolhido
        // prepend - cria antes do elemento escolhido
*/
// textContent
    const element = document.querySelector('h1')
    element.textContent = "Olá Devs!"
    console.log(element.textContent)
    element.textContent += " Mais Devs Aqui?"

// innerText
    const outroElement = document.querySelector('h2')
    outroElement.innerText = "Novos Devs na parada!!"

// innerHTML
    const newElement = document.querySelector('h3')
    newElement.innerHTML = " Show de bola! <small> Prazer </small>"

// value
    const proElement = document.querySelector('input')
    proElement.value += " Novos Devs" // adiciono ou troco
    console.log(proElement) // verifico

// setAttribute & removeAttribute
    const header = document.querySelector('header')
    header.setAttribute('id', 'header') // criou uma id de atributo header

    const headerID = document.querySelector('#header')
    console.log(headerID)

    console.log(headerID.getAttribute('class')) // mostra nome da classe do atributo
    header.removeAttribute('class')

// style
    const preElement = document.querySelector('body')
    preElement.style.backgroundColor="#f9cdd2"

// classList
    const oldElement = document.querySelector('p')
    oldElement.classList.add('active', "green") // adicionou
    console.log(oldElement.classList) 
    oldElement.remove('active') // removeu
    oldElement.classList.toggle('active') // verifica se inclui ou exclui - é um liga/desliga

// parentNode ou parentElemnt
    const body = document.querySelector("body")
    console.log(body.parentNode) // ou console.log(body.parentElement)

// childNodes ou children 
    const el = document.querySelector('body')
    console.log(el.children)

// firstChild ou firstElementChild
    console.log(el.firstElementChild)           

// lasChild ou lastElementChild 
    console.log(el.lastElementChild) 

// nextSibling ou nextElementSibling
    const el = document.querySelector('header')            
    console.log(el.nextElementSibling) 

// previsiousSibling ou previsiousElementSibling
    const el = document.querySelector('body script')
    console.log(el.previousElementSibling)

// createElement
    const div = document.createElement('div');
    div.innerText = "Maravilha Devs!!!"
// append ou prepend - adiciona novo elemento após onde escolhido
    const section = document.querySelector('section')
    section.prepend(div)








