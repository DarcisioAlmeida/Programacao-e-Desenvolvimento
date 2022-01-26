import React from 'react'
import Ledverde from './img/led-verde.jpg'
import Ledvermelho from './img/led-vermelho.png'

export default function Led(props){

    return(
    <>
      <h1>Eventos em REACT</h1>
      <p><img style={{width:'50px'}} src ={props.ligado ? Ledverde : Ledvermelho} alt=''/></p>
      <button onClick={()=> props.setLigado(!props.ligado)}>
        {props.ligado ? 'Desligar' : 'Ligar'}
      </button>
    </>
  )
}