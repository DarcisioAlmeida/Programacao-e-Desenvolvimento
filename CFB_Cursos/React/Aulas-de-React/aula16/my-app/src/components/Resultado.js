import React from "react"

export default function Resultado(props){
    return(
        <div>
            <p>Média das notas : {props.medianotas}</p>
            <p>{props.medianotas >= 7 ? "Aprovado" : "Reprovado"}</p>
        </div>
    )
}