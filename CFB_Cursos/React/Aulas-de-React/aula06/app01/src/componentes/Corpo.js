import React from 'react'
import Dados from './Dados'//Inserindo componentes do app
import Teste02 from './Teste02'

export default function Corpo(){
    const frase4=' Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'//inserindo conteúdo pelas constantes
    const  frase5='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    const frase6=' Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscin'
    return(
        <section>
            <h2>Parágrafo 1</h2>
            <p>Exemplo de frase</p>
            <p>Exemplo de frase.</p>    
            <Dados
                frase1='Lorem ipsum dolor sit amet consectetur adipiscing elit.'
                frase2=' Etiam eget ligula eu lectus lobortis condimentum.' 
                frase3='Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. ' 
                frase4 ={frase4}
                frase5={frase5}
                frase6 ={frase6}
            />    
            <Teste02/>
        </section>
    )
}