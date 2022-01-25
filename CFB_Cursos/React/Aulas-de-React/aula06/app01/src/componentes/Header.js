import React from 'react'

// como a pasta ta dento de componentes não pecisa indicar
import IMG1 from "./imgs/img1.png"

export default function Header(){
    return(
        <header>
            <img src = {IMG1} width='200' alt='' />
            <h1> Exemplo de imagem</h1>
        </header>
    )
}