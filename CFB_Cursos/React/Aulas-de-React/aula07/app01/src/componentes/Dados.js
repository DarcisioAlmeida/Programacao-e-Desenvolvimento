import React from 'react'

export default function Dados(props){//coloca-se props para poder passar seus atributos para outro componente
    let n1 = 15 //váriaveis que irão  ser carregadas da função
    let n2 = 20

    return(
        <section>
           <p>Frase1 : {props.frase1}</p>
           <p>Frase 2 : {props.frase2}</p>
           <p>Frase 3 : {props.frase3}</p>
           <p>Frase 4 : {props.arrowfunction() }</p>
           <p>{`A soma  de ${n1} com ${n2} é igual ` +props.somar(n1,n2)}</p> 
        </section>
    )
}