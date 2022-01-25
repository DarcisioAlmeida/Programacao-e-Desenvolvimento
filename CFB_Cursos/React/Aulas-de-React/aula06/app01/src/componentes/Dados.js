import React from 'react'

//coloca-se props para poder passar seus atributos para outro componente
export default function Dados(props){

    return(
        <section>
            <p>Frase1 : {props.frase1}</p>
            <p>Frase 2 : {props.frase2}</p>
            <p>Frase 3 : {props.frase3}</p>
            <p>Frase 4(constante): {props.frase4}</p>
            <p>frase 5(constante):{props.frase5}</p>
            <p>frase 6(constante): {props.frase6}</p>
        </section>
    )
}