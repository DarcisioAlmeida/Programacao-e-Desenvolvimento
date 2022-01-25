import React  from 'react'
import "./App.css"
import Relogio from './componentes/Relogio'

export default function App() {
  
  const textoDestaque = {
    color:'#00f',
    fontSize: ' 3em'
  }
  return (
    <>
      <section className = 'caixa'> 
        <Relogio/>
        <h1 style ={{color:'red', fontSize:'3em'}}>AULA 08 - Usando raect com CSS</h1>
        <h2>Apredendo a usar react com CSS</h2>
        <p>Aplicando formatações em CSS!</p>
        <p style={textoDestaque}>formatação com Css usando constantes</p>
        <p  className='texto'>Formatação usando o CSS EXTERNO </p>
        <a href="https://pt-br.reactjs.org/" target='_blank' rel='noreferrer'>React JS- Utilizanbdo formatação com CSS com classes</a>
      </section>

    </>
  )
}


