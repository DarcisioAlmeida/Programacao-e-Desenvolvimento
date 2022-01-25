// Exemplos de como declarar CSS em React
import React  from 'react'
import "./App.css"

export default function App() {
  
  const textoDestaque ={
    color:'#00f',
    fontSize: ' 3em'
  }
  return (
    <>
      <section className = 'caixa'> 
        <h1 style ={{color:'red', fontSize:'3em'}}>AULA 08 - Usando raect com CSS</h1>
        <h2>Apredendo a usar react com CSS</h2>
        <p>Aplicando formatações em CSS!</p>
        <p style={textoDestaque}>formatação com CSS usando constantes</p>
        <p  className='texto'>Formatação usando o CSS EXTERNO </p>
        <a href="https://pt-br.reactjs.org/" target='_blank' rel='noreferrer'>React JS- Utilizando formatação com CSS com classes </a>
      </section>
    </>
  )
}


