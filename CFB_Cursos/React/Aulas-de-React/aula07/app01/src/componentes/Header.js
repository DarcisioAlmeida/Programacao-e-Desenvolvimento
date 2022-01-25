import React from 'react'

import IMG1 from "./imgs/img1.png"//como a pasta ta dento de componentes não pecisa indicar

export default function Header(){
    return(
        <header>
            <img src = {IMG1} width='200' alt='' />
            <h1> Exemplo de imagem</h1>
        </header>
    )
}