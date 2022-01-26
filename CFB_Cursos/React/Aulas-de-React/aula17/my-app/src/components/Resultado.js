import React from "react"
export default function Resultado(props){
    return(
        <div>
            <p>Média das notas : {props.mediaNotas}</p>
            <p>{props.mediaNotas >= 70 ? "Aprovado" : "Reprovado"}</p>
        </div>
    )
}