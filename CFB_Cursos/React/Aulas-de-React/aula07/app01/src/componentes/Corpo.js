import React from 'react'
import Dados from './Dados'//Inserindo componentes do app

export default function Corpo(){
    const frase4 = () => {//função criada para retornar o texto
        return ' lorem Ipsun'
    }
    const somar =(n1,n2)=>{
        return n1+n2
    }
    return(
        <section>
            <h2> Parágrafo 1 </h2>
            <p>Exemplo de frase</p>
            <p>Exemplo de frase.</p>    
            <Dados
                frase1='Lorem ipsum dolor sit amet consectetur adipiscing elit.'
                frase2=' Etiam eget ligula eu lectus lobortis condimentum.' 
                frase3='Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. ' 
                arrowfunction = {frase4}//utiliza-se  nome do atributo e não da função,pq o atributo está carregando uma função e não uma constante
                somar ={somar}//pode colocar o nome do atributo com o mesmo nome da função
            />    
        </section>
    )
}